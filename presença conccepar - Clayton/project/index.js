const express = require("express")
const { router } = require("./routes/user")

const server = express()
server.use(express.json())

server.get("/health", (req, res) => {
    res.json({
        status: "Running"
    })
})


server.use("/v1", router)
const port = 3030
server.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})