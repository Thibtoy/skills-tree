import SkillServices from './service'
import FarmerServices from '../Farmers/service'
import FarmersSkillsLevelsServices from '../FarmersSkillsLevels/service'

const SkillController = {
    skills : (req, res) => {
    	SkillServices.getAllSkills()
    		.then(response => {res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err))
    },
    skill : (req, res) => {
        SkillServices.getOneSkill(req.params.id)
            .then(response => {res.status(response.status).send(response)})
            .catch( err => res.status(err.status).send(err))
    },
    skillsByTheme : (req, res) => {
        SkillServices.getSkillsByTheme(req.params.id)
            .then(response => {res.status(response.status).send(response)})
            .catch( err => res.status(err.status).send(err))
    },
    allSkillsByThemes : (req, res) => {
        let token = req.cookies.token
        FarmerServices.isAuth(token)
            .then((data) => {
                let farmerId = data.payload.id
                FarmersSkillsLevelsServices.getAllSkillsWithLevelsByThemes(farmerId)
                    .then(response => {
                        console.log(response)
                        res.status(response.status).send(response)})
                    .catch( err => {
                        console.log(err)
                        res.status(err.status).send(err)})
            })
            .catch((err) => {
                console.log(err)
                SkillServices.getAllSkillsByThemes()
                    .then(response => res.status(response.status).send(response))
                    .catch( err => res.status(err.status).send(err))
            })
    }
}

export default SkillController