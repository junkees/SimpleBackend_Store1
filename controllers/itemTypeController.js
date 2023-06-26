import {ItemType} from '../models/models.js';
class itemTypeController {
    async getAll(req, res) {
        const itemTypes = await ItemType.findAll()
        return res.status(200).json(itemTypes);
    }

    async getById(req, res) {
        const {id} = req.params
        const itemType = await ItemType.findOne({where: {id}})
        return res.json(itemType)
    }

    async addItemType(req, res) {
        const {id} = req.params
        console.log(id)
        const itemType = await ItemType.create({
            item_id: id
        })
        return res.json(itemType)

    }
}

export default new itemTypeController