import {Router} from "express";
import itemTypeController from "../controllers/itemTypeController.js";
const itemTypeRouter = new Router()

itemTypeRouter.get('/', itemTypeController.getAll)
itemTypeRouter.get('/get/:id', itemTypeController.getById)
itemTypeRouter.get('/add/:id', itemTypeController.addItemType)

export default itemTypeRouter