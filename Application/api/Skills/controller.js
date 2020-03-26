import SkillServices from './service'

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
        SkillServices.getAllSkillsByThemes()
            .then(response => {res.status(response.status).send(response)})
            .catch( err => res.status(err.status).send(err))
    }
}

export default SkillController