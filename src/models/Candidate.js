//importação
const mongoose = require('mongoose');

//informações do cadastro de currículo que vai ficar no banco de dados
const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: false },
    birth: { type: String, unique: false, required: false },
    maritalstatus: { type: String, unique: false, required: false },
    gender: {type: String, unique: false, required: false },
    cpf: { type: String, unique: true, required: true },
    rg: { type: String, unique: false, required: false },
    address: { type: String, unique: false, required: false },
    number: { type: String, unique: false, required: false },
    neighborhood: { type: String, unique: false, required: false },
    city: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: false},
    email: { type: String, unique: false, required: false },
    cellphone: { type: String, unique: false, required: false },
    telephone: { type: String, unique: false, required: false },
    profession: { type: String, unique: false, required: false },
    intendposition: { type: String, unique: false, required: false },
},
{
    timestamps: true //faz o created_at e udated_at no banco
});
module.exports = mongoose.model('Candidate', CandidateSchema);

