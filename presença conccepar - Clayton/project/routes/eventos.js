const express = require("express")
const router = express.Router()

let eventos = []

router.get('/v1/eventos', verificarAutenticacao, (req, res) => {
    res.json(eventos);
});

router.post('/v1/evento', verificarAutenticacao, (req, res) => {
    const { nome, data, descricao } = req.body;

    const novoEvento = {
        id: eventos.length + 1,
        nome,
        data,
        descricao
    };

    eventos.push(novoEvento);

    res.status(201).json({ message: 'Evento adicionado com sucesso', evento: novoEvento });
});

router.put('/v1/evento/:id', verificarAutenticacao, (req, res) => {
    const { id } = req.params;
    const { nome, data, descricao } = req.body;

    const eventoIndex = eventos.findIndex(evento => evento.id == id);

    if (eventoIndex !== -1) {

        eventos[eventoIndex] = {
            ...eventos[eventoIndex],
            nome: nome || eventos[eventoIndex].nome,
            data: data || eventos[eventoIndex].data,
            descricao: descricao || eventos[eventoIndex].descricao
        };

        res.json({ message: 'Evento atualizado com sucesso', evento: eventos[eventoIndex] });
    } else {
        res.status(404).json({ message: 'Evento não encontrado' });
    }
});

router.delete('/v1/evento/:id', verificarAutenticacao, (req, res) => {
    const { id } = req.params;

    eventos = eventos.filter(evento => evento.id != id);

    res.json({ message: 'Evento deletado com sucesso' });
});

module.exports = {
    router
}