import express from "express"
import FarmersSkillsLevelsController from "./controller"

const router = express.Router()

router.put('/update', FarmersSkillsLevelsController.updateFarmerSkillLevel)
router.get('/:skillId/:farmerId?', FarmersSkillsLevelsController.farmerSkillLevel)
router.get('/theme/:themeId/:farmerId?', FarmersSkillsLevelsController.farmerSkillsLevelsByTheme)

export default router