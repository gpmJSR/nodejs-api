const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contato = new Schema({
    name: {
        type: String,
    }, 
    email: {
        type: String,
    }, 
    subject: {
        type: String,
    }, 
    conteudo: {
        type: String,
    },  
},{
    timestamps: true,
});


mongoose.model('Contato',contato)

//By Gustavo Pinheiro Maia