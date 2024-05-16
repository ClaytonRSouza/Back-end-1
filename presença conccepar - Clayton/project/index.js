const express = require("express")
const { router: userRouter } = require("./routes/user")
const { router: eventosRouter} = require("./routes/eventos")
const {router: notesRouter} = require("./routes/notes")

const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})


server.use("/v1", userRouter)
server.use("/v1", eventosRouter)
server.use("/v1", notesRouter)
const port = 3030
server.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})