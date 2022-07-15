const db = require("../models")

// include model
const Student = db.student
const Scholarship = db.scholarship
    // main work
    // 1. student insert controller

const addStudent = async(req, res) => {

    let data = {
        name: req.body.name,
        class: req.body.class
    }

    const student = await Student.create(data)
    res.status(200).send(student)
    console.log(student);
}


// 2. Get all the student controller

const getAllStudent = async(req, res) => {
    const student = await Student.findAll({})
    res.status(200).send(student)
    console.log(student);
}


// 3. Get Single student controller 

const getOneStudent = async(req, res) => {
    let id = req.params.id
    const student = await Student.findOne({ where: { id: id } })
    res.status(200).send(student)
}


// 4. update student controller 

const updateStudent = async(req, res) => {
    let id = req.params.id
    const student = await Student.update(req.body, { where: { id: id } })
    res.status(200).send(student)
}


// 5. delete student controller 

const deleteStudent = async(req, res) => {
    let id = req.params.id
    await Student.destroy({ where: { id: id } })
    res.status(200).send(`delete student successfully id is ${id}`)
}


// one to one relation between student and scholarship

const oneToone = async(req, res) => {

    let data = await Student.findAll({
        attributes: ['id', 'name'],
        include: [{
            model: Scholarship,
            attributes: ['id', 'scholarship_type', 'scholarship_year'],
            as: 'scholarship_info'
        }]
    })
    res.status(200).send(data)
}

module.exports = { addStudent, getAllStudent, getOneStudent, updateStudent, deleteStudent, oneToone }