module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
                allowNull: false
        }
    }, {
        timestamps: false
    })
    return Student
}