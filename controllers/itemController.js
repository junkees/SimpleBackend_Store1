import {Item} from '../models/models.js';
class ItemController {

    async getAll(req, res) {
        const items = await Item.findAll()
        console.log(items)
        return res.status(200).json(items);
    }

    async getOne(req, res) {
        const {id} = req.body
        if(!id) {
            return res.status(400).json({message: 'Неверный запрос'})
        }
        const item = await Item.findOne({where: {id}})
        return res.json(item)
    }

    async getAllByName(req, res) {
        const {name} = req.body;
        if(!name) {
            return res.status(400).json({message: 'Неверный запрос'})
        }
        const items = await Item.findAll({where: {name}})
        return res.json(items)
    }

    async addItem(req, res) {
        const {name, price, rating, referral_url, img} = req.body
        console.log(name + price + rating + referral_url + img)
        if(!name || !price || !rating || !referral_url || !img) {
            return res.status(400).json({message: 'Неверный запрос'})
        }
        const item = await Item.create({name, price, rating, referral_url, img})
        return res.json(item)
    }
}

export default new ItemController();