import express, {json} from 'express';
import sequelize from './database/db.js'
import cors from 'cors'
import models from './models/models.js'
import router from "./routes/index.js";

const app = express();
app.use(json())
app.use(cors({ origin: '*' }))
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, () => console.log(`APP START AT http://localhost:${process.env.PORT}`))
    }
    catch (e) {
        console.log(e)
        return e
    }
}

start()