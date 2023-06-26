import {Router} from "express";
import userRouter from "./userRouter.js";
import itemRouter from "./itemRouter.js";
import itemTypeRouter from "./itemTypeRouter.js";
const router = new Router()

router.use('/v1/user', userRouter)
router.use('/v1/item', itemRouter)
router.use('/v1/item_type', itemTypeRouter)

export default router

