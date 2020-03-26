import LevelQueries from "./query"

const LevelServices = {
    getLevel: (id) => {
        return new Promise((resolve, reject) => {
            SkillQueries.getLevel(id)
                .then(data => resolve({status: 200, payload: {success: true, level: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    getLevels: () => {
        return new Promise((resolve, reject) => {
            SkillQueries.getLevels()
                .then(data => {
                    let levels = []
                    for (let i = 0, l = data.length; i < l; i++) {
                        let level = new Object()
                        level.id = data[i].id
                        level.name = data[i].name
                        level.description = data[i].description
                        levels.push(level)
                    }
                    resolve({status: 200, payload: {success: true, levels}})
                })
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    }
}

export default LevelServices