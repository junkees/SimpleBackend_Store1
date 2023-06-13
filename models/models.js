import sequelize from "../database/db.js";
import {DataTypes} from "sequelize";


export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    }
}, {
    timestamps: false
})

export const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    timestamps: false
})

const Item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    referral_url: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
})

const ItemType = sequelize.define('item_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
},{
    timestamps: false,
})

User.hasOne(Basket)
Basket.belongsTo(User)

Item.hasMany(ItemType)
ItemType.belongsTo(Item)
export default {
    User, Basket, Item, ItemType
}