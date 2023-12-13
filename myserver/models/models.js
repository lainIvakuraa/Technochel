// здесь строим модели данных

const sequelize = require('../database')
const {DataTypes} = require('sequelize') // типы

const User = sequelize.define('user',{ // всё расписываем как в ранее описанной структуре
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'User'},
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('BasketProduct', { // вторичные ключи создадутся автоматически при экспорте
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('Product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, //AllowNull указывает, допускает ли поле отсутствие значение
    price: {type: DataTypes.INTEGER, primaryKey: true},
    img: {type: DataTypes.STRING, primaryKey: true, allowNull: false},
})

const Type = sequelize.define('Type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductInfo = sequelize.define('ProductInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    characteristic: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const BrandType = sequelize.define('BrandType', { // связующая для многие ко многим
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket) // проверил
Basket.belongsTo(User)

Basket.hasMany(BasketProduct) // проверил
BasketProduct.belongsTo(Basket)

BasketProduct.hasOne(Product) // проверил
Product.belongsTo(BasketProduct)

Product.hasMany(ProductInfo) // проверил
ProductInfo.belongsTo(Product)

Brand.hasMany(Product) // проверил
Product.belongsTo(Brand)

Type.hasMany(Product) // проверил
Product.belongsTo(Type)

Type.belongsToMany(Brand, {through: BrandType}) // соединительный параметр
Brand.belongsToMany(Type,{through: BrandType})

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    ProductInfo,
    Type,
    Brand,
    BrandType
}

//после экспорта таблицы заносятся в базу данных. почему-то дополнительно создаются поля времени