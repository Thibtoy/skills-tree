import {noDatabase, databaseName} from './database.js'

export default function databaseInitialisation() {
	let connection = noDatabase.connect()

	console.info('Creating database if not exists')

	connection.query(`CREATE DATABASE ${databaseName}`, (err) => {
		connection.end()
		if (err) {
			if (err.errno === 1007) return console.info('Database already exists and is ready to use')
			else throw err
		}

		console.info('Database successfully created, creating table')
	})
}