import {database} from "../../setup/database"

const Query = {
    getFarmerSkillLevel: (farmerId, skillId) => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT skills.name, levels.name AS level, levels.description FROM farmers_skills_levels AS fsl `+
                `INNER JOIN skills ON skills.id = fsl.skill_id `+
                `INNER JOIN levels ON levels.id = fsl.level_id `+
                `WHERE fsl.skill_id = ${skillId} AND fsl.farmer_id = ${farmerId};`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                else if (data.length > 0) resolve(data[0])
                else reject('Farmer or skill does not exists.')
            })
        })
    },
    getFarmerSkillsLevelsByTheme: (farmerId, themeId) => {
        return new Promise(function(resolve, reject) {
            let q = `SELECT skills.name, levels.name AS level, levels.description , levels.image FROM farmers_skills_levels AS fsl `+
                `INNER JOIN skills ON skills.id = fsl.skill_id `+
                `INNER JOIN levels ON levels.id = fsl.level_id `+
                `WHERE skills.theme_id = ${themeId} AND fsl.farmer_id = ${farmerId};`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                else if (data.length > 0) resolve(data)
                else reject('Farmer or theme does not exists.')
            })
        })
    },
    createFarmerSkillLevel: (farmerId, skillId) => {
        return new Promise((resolve, reject) => {
            let q = `INSERT INTO farmers_skills_levels (farmer_id, skill_id, level_id) VALUES (${farmerId}, ${skillId}, 2)`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                    resolve(true)
            })
        })
    },
    updateFarmerSkillLevel: (farmerId, skillId, levelId) => {
        return new Promise((resolve, reject) => {
            let q = `UPDATE farmers_skills_levels SET level_id = ${levelId} WHERE farmer_id = ${farmerId} AND skill_id = ${skillId}`
            let connection = database.connect()
            connection.query(q, (err, data) => {
                connection.end()
                if (err) reject(err)
                    resolve('skill\'s level successfully updated')
            })
        })
    }
}

export default Query