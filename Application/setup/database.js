import databaseConf from '../config/database'
import mysql from 'mysql2'

export const databaseName = databaseConf.database

export const database = {
	connect: () => mysql.createConnection(databaseConf, err => {
		if (err) throw err
	})
}

export const noDatabase = {
	connect: () => mysql.createConnection({
		host: databaseConf.host,
		user: databaseConf.user,
		password: databaseConf.password
	}, err => {
		if (err) throw err
	})
}