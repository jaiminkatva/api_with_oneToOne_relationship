module.exports = (sequelize, DataTypes) => {

    const Scholarship = sequelize.define("scholarship", {
        scholarship_type: {
            type: DataTypes.STRING
        },
        scholarship_year: {
            type: DataTypes.BIGINT(11)
        }
    }, {
        timestamps: false
    })
    return Scholarship
}