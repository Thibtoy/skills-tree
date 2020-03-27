import express from "express"
import FarmerController from "./controller"
//import authorisation from "../../helpers/authorisation"

const router = express.Router()

router.post('/register', FarmerController.register)
router.post('/authenticate', FarmerController.authenticate)
router.get('/isAuth', FarmerController.isAuth)

export default router