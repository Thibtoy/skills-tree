import FarmersSkillsLevelsQueries from "./query"
import SkillQueries from "../Skills/query"

const FarmersSkillsLevelsServices = {
    getFarmerSkillLevel: (farmerId, skillId) => {
        return new Promise((resolve, reject) => {
            FarmersSkillsLevelsQueries.getFarmerSkillLevel(farmerId, skillId)
                .then(data => resolve({status: 200, payload: {success: true, level: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    getFarmerSkillsLevelsByTheme: (farmerId, themeId) => {
        return new Promise((resolve, reject) => {
            FarmersSkillsLevelsQueries.getFarmerSkillsLevelsByTheme(farmerId, themeId)
                .then(data => resolve({status: 200, payload: {success: true, level: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    updateFarmerSkillLevel: (farmerId, skillId, levelId) => {
        return new Promise((resolve, reject) => {
            FarmersSkillsLevelsQueries.updateFarmerSkillLevel(farmerId, skillId, levelId)
                .then(data => resolve({status: 200, payload: {success: true, msg: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    getAllSkillsWithLevelsByThemes: (farmerId) => {
        return new Promise((resolve, reject) => {
            SkillQueries.getThemes()
                .then(async themes => {
                    let themesList = []
                    for (let i = 0, l = themes.length; i < l; i++) {
                        let theme = new Object()
                        theme.id = themes[i].id
                        theme.name = themes[i].name
                        theme.skills = await FarmersSkillsLevelsQueries.getFarmerSkillsLevelsByTheme(farmerId, theme.id)
                            .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
                        themesList.push(theme)
                    }
                    resolve({status: 200, payload: {success: true, themes: themesList}})
                })
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    }
}

export default FarmersSkillsLevelsServices