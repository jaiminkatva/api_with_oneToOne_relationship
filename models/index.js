const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log("Error ", err);
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./studentModel")(sequelize, DataTypes)
db.scholarship = require("./scholarshipModel")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Yes re-sync");
    })

// one to one realtion

db.student.hasOne(db.scholarship, {
    foreignKey: "stud_id",
    as: "scholarship_info"
});
db.scholarship.belongsTo(db.student, {
    foreignKey: "stud_id",
    as: "student_info"
});

module.exports = db;