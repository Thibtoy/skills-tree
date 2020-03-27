import {database, noDatabase, databaseName} from './database.js'
import fs from 'fs'

export default function databaseInitialisation() {
	let connection = noDatabase.connect()

	console.info('Creating database')

	connection.query(`DROP DATABASE IF EXISTS ${databaseName}`, err => {
		if (err) throw err
		connection.query(`CREATE DATABASE ${databaseName}`, async err => {
			connection.end()
			if (err) throw err

			console.info('Database successfully created, executing migartions')

			let migrations = fs.readdirSync('./api/_migrations')
			connection = database.connect()

			for (let i = 0, l = migrations.length; i < l; i++) {
				let migration = migrations[i]
				let sqls = fs.readFileSync(`./api/_migrations/${migration}`).toString().split(';')


				console.info(`executing migration n° ${migration.split('.')[0]}`)

				await sqls.forEach(async (sql, i) => {
					await new Promise ((resolve, reject) => {
						if (i === (sqls.length - 1)) resolve(true)
						connection.query(sql, (err) => {
							if (err) reject(err)
							else resolve()
						})
					})
					.then((end) => {
						if (end) console.info(`migration n° ${migration.split('.')[0]} successfully done`)
					})
					.catch(err => {
						console.error(err)
					})
				})
			}
			connection.end()

			console.info('Your database is ready to use!')
		})
	})
}