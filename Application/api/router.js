import express from "express"
import farmersRoutes from "./Farmers/routes"
import skillsRoutes from "./Skills/routes"

const router = express.Router()

router.use('/farmer', farmersRoutes)
router.use('/skills', skillsRoutes)

export default router