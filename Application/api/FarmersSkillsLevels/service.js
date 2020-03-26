import FarmersSkillsLevelsQueries from "./query"

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
}

export default FarmersSkillsLevelsServices