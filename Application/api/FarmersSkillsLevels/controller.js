import FarmersSkillsLevelsServices from './service'

const FarmersSkillsLevelsController = {
	farmerSkillLevel: (req, res) => {
		FarmersSkillsLevelsServices.getFarmerSkillLevel(req.params.farmerId, req.params.skillId)
    		.then(response => {res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err))
	},
	farmerSkillsLevelsByTheme: (req, res) => {
		FarmersSkillsLevelsServices.getFarmerSkillsLevelsByTheme(req.params.farmerId, req.params.themeId)
    		.then(response => {res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err))
	},
	updateFarmerSkillLevel: (req, res) => {
		FarmersSkillsLevelsServices.updateFarmerSkillLevel(req.body.farmerId, req.body.skillId, req.body.levelId)
    		.then(response => {res.status(response.status).send(response)})
    		.catch( err => res.status(err.status).send(err))
	},
}

export default FarmersSkillsLevelsController