const express = require("express")
const {prisma} = require("../db/prisma")
const router = express.Router()


router.get("/tasks", async (req, res) => {
    const tasks = await prisma.tasks.findMany()
    console.log(tasks);
    res.status(200).json(tasks)
})

router.post("/tasks", async (req, res) => {
    const {name, description} = req.body
    const newTask = await prisma.tasks.create({
        data: {
            name,
        description,
        isDone: false
        }
    })
    res.status(201).json(newTask)
})

router.put("/task/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { name, description, isDone } = req.body;
    
    const idExists = await prisma.tasks.findFirst(id)
    if(!idExists) return res.status(400).json({ message: `Task ${id} not found`, status: 400});

    const task = await prisma.tasks.update({
        data: {
        name,
        description,
        isDone
    },
    where: {
        id
    }
    })
    return res.status(200).json({ message: "Task was updated", status: 200, task });
});

router.delete("/task/:id", (req, res) => {
    const id = Number(req.params.id)
    if(!id) return res.status(400).json({message: `Id ${id} informed is not valid`, status:400})
    
    const task = tasks.find((obj) => obj.id === id)
    if(!task) return res.status(400).json ({message: `Task ${id} are not created`, status:400})
    tasks = tasks.filter((obj) => obj.id !== id)

    return res.status(200).json({message: `Task ${id} was deleted with success`, status:200})
})




module.exports = {
    router
}