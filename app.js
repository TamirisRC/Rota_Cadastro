const express = require("express")
const agendamentos = require("./banco")
const app = express()

app.get("/cadastrar", (req, res) => {

    agendamentos.create({
        nome: req.query.nome,
        endereco: req.query.endereco,
        bairro: req.query.bairro,
        cep: req.query.cep,
        cidade: req.query.cidade,
        estado: req.query.estado,
        observacao: req.query.observacao
    }).then((agendamento) => {
        console.log("Agendamento Criado!!")
    }).catch(() => {
        console.log("Erro")
    })
})

module.exports = app 