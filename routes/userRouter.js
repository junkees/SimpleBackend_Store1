import {Router} from "express";
import userController from "../controllers/userController.js";
import router from "./index.js";
const userRouter = new Router()

userRouter.get('/getAll', userController.getAll)
userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.delete('/delete', userController.delete)

export default userRouter