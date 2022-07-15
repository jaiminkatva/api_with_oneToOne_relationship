const db = require("../models")

// include scholarship model
const Scholarship = db.scholarship
const Student = db.student

// main work
// 1. insert scholarship controller

const addScholarship = async(req, res) => {
    let data = {
        scholarship_type: req.body.scholarship_type,
        scholarship_year: req.body.scholarship_year
    }

    const scholarship = await Scholarship.create(data)
    res.status(200).send(scholarship)
    console.log(scholarship);
}


// 2. get all scholarship controller

const getAllScholarship = async(req, res) => {
    const scholarship = await Scholarship.findAll()
    res.status(200).send(scholarship)
    console.log(scholarship)
}


// 3. get single scholarship controller 

const getOneScholarship = async(req, res) => {
    let id = req.params.id
    const scholarship = await Scholarship.findOne({ where: { id: id } })
    res.status(200).send(scholarship)
    console.log(scholarship)
}


// 4. update scholarship controller 

const updateScholarship = async(req, res) => {
    let id = req.params.id
    const scholarship = await Scholarship.update(req.body, { where: { id: id } })
    res.status(200).send(scholarship)
}


// 5. delete scholarship controller 

const deleteScholarship = async(req, res) => {
    let id = req.params.id
    await Scholarship.destroy({ where: { id: id } })
    res.status(200).send(`delete scholarship id is ${id}`)
}


// 6. belong to

const belongTo = async(req, res) => {

    const data = await Scholarship.findAll({
        attributes: ['scholarship_type', "scholarship_year"],
        include: [{
            model: Student,
            as: 'student_info'
        }]
    })
    res.status(200).send(data)
}

module.exports = {
    addScholarship,
    getAllScholarship,
    getOneScholarship,
    updateScholarship,
    deleteScholarship,
    belongTo
}