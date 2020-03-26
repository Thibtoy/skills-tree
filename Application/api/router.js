import express from "express"
import farmersRoutes from "./Farmers/routes"
import skillsRoutes from "./Skills/routes"
import farmersSkillsLevelsRoutes from "./FarmersSkillsLevels/routes"

const router = express.Router()

router.use('/farmer', farmersRoutes)
router.use('/skills', skillsRoutes)
router.use('/farmer/levels', farmersSkillsLevelsRoutes)

export default router