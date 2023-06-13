import {Router} from "express";
import userRouter from "./userRouter.js";
const router = new Router()

router.use('/v1/user', userRouter)
//router.use('/v1/item', )
//router.use('/v1/item_type', )

export default router

