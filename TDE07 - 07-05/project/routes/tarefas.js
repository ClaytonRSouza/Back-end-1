const express = require("express")
const router = express.Router()


let tasks = []

router.get("/tasks", (req, res) => {
    res.json(tasks)
})

router.post("/tasks", (req, res) => {
    const {name, description} = req.body
    const newTask = {
        id: tasks.length + 1,
        name,
        description,
        isDone: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

router.put("/task:id", (req, res) => {
    
})



module.exports = {
    router
}