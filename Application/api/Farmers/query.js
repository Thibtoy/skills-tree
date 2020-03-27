import {database} from "../../setup/database";

const Query = {
    register: (farmer) => {
        return new Promise(function(resolve, reject) {
            let q = `INSERT INTO farmers (email, first_name, last_name, password) VALUES (`+
                `'${farmer.email}', '${farmer.firstName}', '${farmer.lastName}', '${farmer.password}');`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) {
                    console.log(err)
                    (err.sqlState === '23000')? reject('Farmer already exist') : reject('Something went wrong')
                }
                else resolve(data);
            });
        });
    },

    getFarmer: farmer => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT * FROM farmers WHERE farmers.email = '${farmer.email}';`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err);
                else if (data.length > 0) resolve(data[0]);
                else reject('Farmer does not exist');
            });
        })
    }
}

export default Query