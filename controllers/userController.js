import {User, Basket} from '../models/models.js'
import {Op} from "sequelize";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

function generateToken(id, username, email) {
    return jsonwebtoken.sign({
             id, username, email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '7d'
        })
}
class UserController {
    async getAll(req, res) {
        console.log(req)
    }

    async register(req, res, next) {
        const {username, email, password} = req.body;
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
        const hashPassword = await bcrypt.hash(password, 5)
        const userCreated = await User.create({
            username,
            email,
            password: hashPassword
        })
        const jwt = generateToken(userCreated.id, userCreated.username, userCreated.email)
        return res.json({jwt})
    }
    async login(req, res) {
        const {username, password} = req.body;
        const findUser = await User.findOne({where: {username}})
        if(!findUser) {
            return res.json("Пользователь не найден!")
        }
        let verifyPassword = bcrypt.compareSync(password, findUser.password)
        if(!verifyPassword) {
            return res.json("Неправильный пароль!")
        }
        const jwt = generateToken(findUser.id, findUser.username, findUser.email)
        return res.json({jwt})
    }
    async delete(req, res) {
        console.log(req.body)
        return res.json("1")
    }

    async checkAuth(req, res) {
        const token = generateToken(req.user.id, req.user.username, req.user.email)
        return res.json({token})
    }
}

export default new UserController()