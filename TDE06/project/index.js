const express = require("express")
const server = express()

//http://127.0.0.1:5000

const port = 5000
server.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})

server.get("/health", (req, res) => {
    res.json({
        "status": "running"
    })
})

