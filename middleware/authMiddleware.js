import jsonwebtoken from "jsonwebtoken";

export default function checkAuth(req, res, next) {
    if(req.method === 'OPTIONS') {
        next()
    }
    try {
        const header = req.headers.authorization
        const token = header.split(' ')['1']
        if(!token) {
            return res.json('Не авторизован!')
        }
        req.user = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY)
        next()
    }
    catch (e)
    {
        console.log(e)
        return res.json('Не авторизован!')
    }
}
