import {User, Basket} from '../models/models.js'
import {Op} from "sequelize";
class UserController {
    async getAll(req, res) {
        console.log(req)
    }

    async register(req, res, next) {
        const {username, email, password, role} = req.body;
        if(!username || !email || !password) {
            return res.json("Не задано имя пользователя, почта, пароль")
        }
        const findUser = await User.findOne(
            {
                where: {
                    [Op.or]: [
                        {username},
                        {email}
                    ]
                }
            })
        if(findUser) {
            return res.json("Пользователь уже существует!")
        }
        const userCreated = await User.create({
            username,
            email,
            password
        })
        return res.json("success")
    }
    async login(req, res) {
        console.log(req.body)
        return res.json("1")
    }
    async delete(req, res) {
        console.log(req.body)
        return res.json("1")
    }
}

export default new UserController()