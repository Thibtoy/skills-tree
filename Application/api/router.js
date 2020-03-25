import express from "express"
import farmersRoutes from "./Farmers/routes"

const router = express.Router()

router.use('/farmer', farmersRoutes)

export default router