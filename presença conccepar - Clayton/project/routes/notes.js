const express = require("express")
const router = express.Router()


let notas = []

router.post("/notes", (req, res) => {
    const { content } = req.body
    const novaNota = {
        id: notas.length + 1,
        content
    }

    notas.push(novaNota)
    res.status(201).json({ message: `Nova nota criada com sucesso`, notas: novaNota });
})

router.get("/notes", (req, res) => {
    res.json(notas)
})

router.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const { content } = req.body;

    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.content = content; // Atribuir o conteúdo do corpo da requisição ao campo 'content' da nota

        res.json({ message: 'Nota atualizada com sucesso' });
    } else {
        res.status(400).json({ message: 'Nota não encontrada' });
    }
});

router.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id)
    if (!id) return res.status(400).json({ message: 'id não encontrado' })

    const nota = notas.find((obj) => obj.id === id)
    if (!nota) return res.status(400).json({ message: `Nota ${id} não criada` })
    notas = notas.filter((obj) => obj.id !== id)

    res.json({ message: 'Nota deletada com sucesso' })
})


module.exports = {
    router
}