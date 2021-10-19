module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "sequelize",
    dialect : "mysql",
    pool : {
        max : 5,
        min : 0,
        aquire:30000,
        idle:10000
    }
}