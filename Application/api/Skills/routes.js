import express from "express"
import SkillController from "./controller"
//import authorisation from "../../helpers/authorisation"

const router = express.Router()

router.get('/', SkillController.skills)
router.get('/themes', SkillController.allSkillsByThemes)
router.get('/:id', SkillController.skill)
router.get('/themes/:id', SkillController.skillsByTheme)

export default router