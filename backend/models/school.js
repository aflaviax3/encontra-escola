const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    cod: String,
    nome: String,
    cidade: String,
    estado: String,
    regiao: String,
    endereco: String,
    dependenciaAdministrativa: String,
    placeId: String,
    metodologia: String,
    religiao: String,
    website: { type: String, required: false},
    email:{ type: String, required: false},
    telefone:{ type: String, required: false}
});

module.exports = mongoose.model('School', schoolSchema);