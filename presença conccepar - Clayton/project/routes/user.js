const express = require("express");
const router = express.Router();

let usuarios = [];

router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    if (usuario) {
      res.status(200).json({ message: 'Login successful', usuario });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
});

router.post("/register", (req, res) => {
    const { email, password } = req.body;

    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        res.status(400).json({ message: 'Email already in use' });
    } else {
        const novoUsuario = {
            email,
            password
        };

        usuarios.push(novoUsuario);
        res.status(201).json({ message: 'User registered successfully', usuario: novoUsuario });
    }
});

module.exports = {
    router
};
