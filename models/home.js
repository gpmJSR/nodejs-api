const mongoose = require('mongoose')
const Schema = mongoose.Schema
const home = new Schema({
    topTitulo: {
        type: String,
    }, 
    topSubtitulo: {
        type: String,
    }, 
    topTextoBtn: {
        type: String,
    }, 
    topLinkBtn: {
        type: String,
    },  
    
    serTitulo: {
        type: String
    },
    serSubtitulo: {
        type: String
    },

    serUmIcone: {
        type: String
    },
    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },

    serDoisIcone: {
        type: String
    },
    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },

    serTresIcone: {
        type: String
    },
    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },
},{
    timestamps: true,
});


mongoose.model('Home',home)

//By Gustavo Pinheiro Maia