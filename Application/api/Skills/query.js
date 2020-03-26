import {database} from "../../setup/database"

const Query = {
    getAllSkills: () => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT * FROM skills;`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                resolve(data)
            })
        })
    },
    getOneSkill: (id) => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT * FROM skills WHERE id = ${id};`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                else if (data.length > 0) resolve(data[0])
                else reject('This skill does not exists.')
            })
        })
    },
    getSkillsByTheme: (id) => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT * FROM skills WHERE theme_id = ${id};`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else if (data.length > 0) resolve(data)
                else reject('This theme does not exists.')
            })
        })
    },
    getThemes: () => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT id, name FROM themes;`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) {
                    console.log(err)
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

export default Query