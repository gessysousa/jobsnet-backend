//importação
const Candidate = require('../models/Candidate');

//funcionalidades 
module.exports = {
    async register ( req, res ){//função assincrona, devido a comunicação com o servidor
        const {//garante quais informações eu preciso, caso seja enviado mais alguma coisa
            name,
            birth,
            maritalstatus,
            gender,
            cpf,
            rg,
            address,
            number,
            neighborhood,
            city,
            cep,
            email,
            cellphone,
            telephone,
            profession,
            intendposition
        } = req.body;

        const newCandidate = new Candidate();//instancia do candidato do modelo

        newCandidate.name = name;
        newCandidate.birth = birth;
        newCandidate.maritalstatus = maritalstatus;
        newCandidate.gender = gender;
        newCandidate.cpf = cpf;
        newCandidate.rg = rg;
        newCandidate.address = address;
        newCandidate.number = number;
        newCandidate.neighborhood = neighborhood;
        newCandidate.city = city;
        newCandidate.cep = cep;
        newCandidate.email = email;
        newCandidate.cellphone = cellphone;
        newCandidate.telephone = telephone;
        newCandidate.profession = profession;
        newCandidate.intendposition = intendposition;

        newCandidate.save((err, savedCandidate) => {//função executada quando terminar de salvar
            if (err) { //caso ocorra um erro é enviada uma mansagem no console indicando erro de servidor
                console.log(err);
                return( 
                res.status(500).send()//201 colocado para não quebrar a página
                )
                }
            //caso tudo ocorra bem
            return res.status(200).send(savedCandidate);
        });
    }, 
};