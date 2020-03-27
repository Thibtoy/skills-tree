import SkillQueries from "./query"
import bcrypt from 'bcrypt'
import config from '../../config/server'
import jwt from 'jsonwebtoken'

const SkillServices = {
    getAllSkills: () => {
    	return new Promise((resolve, reject) => {
            SkillQueries.getAllSkills()
                .then(data => resolve({status: 200, payload: {success: true, data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
    	})
    },
    getOneSkill: (id) => {
        return new Promise((resolve, reject) => {
            SkillQueries.getOneSkill(id)
                .then(data => resolve({status: 200, payload: {success: true, skill: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    getSkillsByTheme: (id) => {
        return new Promise((resolve, reject) => {
            SkillQueries.getSkillsByTheme(id)
                .then(data => resolve({status: 200, payload: {success: true, skill: data}}))
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    },
    getAllSkillsByThemes: () => {
        return new Promise((resolve, reject) => {
            SkillQueries.getThemes()
                .then(async themes => {
                    let themesList = []
                    for (let i = 0, l = themes.length; i < l; i++) {
                        let theme = new Object()
                        theme.id = themes[i].id
                        theme.name = themes[i].name
                        theme.skills = await SkillQueries.getSkillsByTheme(theme.id)
                            .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
                        themesList.push(theme)
                    }
                    resolve({status: 200, payload: {success: true, themes: themesList}})
                })
                .catch(err => reject({ status: 400, payload: {success: false, message: err}}))
        })
    }
}

export default SkillServices