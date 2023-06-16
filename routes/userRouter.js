import {Router} from "express";
import userController from "../controllers/userController.js";
import authMiddleware from '../middleware/authMiddleware.js'
import router from "./index.js";
const userRouter = new Router()

userRouter.get('/getAll', userController.getAll)
userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.get('/auth',  authMiddleware, userController.checkAuth)
userRouter.delete('/delete', userController.delete)

export default userRouter