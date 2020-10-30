module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ken2ken842",
    DB: "ecomdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}