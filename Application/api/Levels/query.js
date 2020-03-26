import {database} from "../../setup/database"

const Query = {
    getLevel: (id) => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT id, name, description FROM levels WHERE id = ${id}`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                else if (data.length > 0) resolve(data[0])
                else reject('This skill does not exists.')
            })
        })
    },
    getLevels: () => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT id, name, description FROM levels`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                resolve(data)
            })
        })
    }
}

export default Query