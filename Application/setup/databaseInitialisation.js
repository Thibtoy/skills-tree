import {database, noDatabase, databaseName} from './database.js'
import fs from 'fs'

export default function databaseInitialisation() {
	let connection = noDatabase.connect()

	console.info('Creating database if not exists')

	connection.query(`CREATE DATABASE ${databaseName}`, async err => {
		connection.end()
		if (err) {
			if (err.errno === 1007) return console.info('Database already exists and is ready to use')
			else throw err
		}
		console.info('Database successfully created, creating table')

		let migrations = fs.readdirSync('./api/_migrations')
		connection = database.connect()

		for (let i = 0, l = migrations.length; i < l; i++) {
			let migration = migrations[i]
			let sql = fs.readFileSync(`./api/_migrations/${migration}`).toString()

			console.info(`creating ${migration.split('.')[0]} table`)

			await new Promise ((resolve, reject) => {
				connection.query(sql, (err) => {
					if (err) reject(err)
					else resolve()
				})
			})
			.then(() => {
				console.info(`table ${migration.split('.')[0]} successfully created`)
			})
			.catch(err => {
				throw err
			})
		}

		connection.end()
		console.info('Tables successfully created, your database is ready to use')
	})
}