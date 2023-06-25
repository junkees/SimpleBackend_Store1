import {Router} from "express";
import itemController from "../controllers/itemController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const itemRouter = new Router()

itemRouter.get('/', itemController.getAll)
itemRouter.get('/getItem', itemController.getOne)
itemRouter.get('/getItemByName', itemController.getAllByName)
itemRouter.post('/addItem', itemController.addItem)


export default itemRouter