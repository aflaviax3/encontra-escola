const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const School = require('./models/school');
const app = express();

mongoose.connect(
    'mongodb+srv://andradeaf22:35JjJnVvmzgyEXy5@cluster0.z9qdqsn.mongodb.net/node-angular?retryWrites=true&w=majority'
    ).then(() => {
        console.log('Connected to the database');
    }).catch(()=> {
        console.log('An error occurred, connection failed')
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/schools', (req, res, next) => {
    const school = new School({
        // cod: req.body.cod,
        nome: req.body.nome,
        cidade: req.body.cidade,
        estado: req.body.estado,
        regiao: req.body.regiao,
        endereco: req.body.endereco,
        dependenciaAdministrativa: req.body.dependenciaAdministrativa,
        placeId: req.body.placeId,
        metodologia: req.body.metodologia,
        religiao: req.body.religiao,
        website: req.body.website,
        email: req.body.email,
        telefone: req.body.telefone
    });
    console.log(school);
    school.save();
    req.status(201).json({
        message: 'post added successfully'
    });
});

app.get('/api/schools', (req, res, next) => {
    // const schools = [{
        // {
            //     "_id": {
            //       "$oid": "6450686a7a100fcbff689fce"
            //     },
            //     "nome": "Colégio Adventista de São José dos Campos",
            //     "cidade": "São José dos Campos",
            //     "estado": "São Paulo",
            //     "regiao": "Sudeste",
            //     "endereco": "R. Manoel Fiel Filho, 300 - Bosque dos Eucaliptos, São José dos Campos - SP, 12233-600",
            //     "dependenciaAdministrativa": "Privada",
            //     "placeId": "ChIJg7UJS0q1zZQRHNL-X35L0Vo",
            //     "metodologia": "Não informada",
            //     "religiao": "Adventista",
            //     "website": "https:\\saojosedoscampos.educacaoadventista.org.br",
            //     "telefone": "(12) 3919-2200"
            //   }
        //   }];
        School.find().then(documents => {
            res.status(200).json({
                message: 'All schools fetched successfully',
                schools: documents
            });
        });
});

app.get('/api/schools/:schoolMethod', (req, res, next) => {
        let metodologia = req.params.schoolMethod;
        School.find({metodologia: metodologia}).then(documents => {
            res.status(200).json({
                message: 'All schools fetched successfully',
                schools: documents
            });
        });
});

// ver como faz qdo pega um objeto
app.post('/api/schools/search', (req, res, next) => {
    // {selectedState: null, schoolName: null, selectedCity: null, selectedMethodology: null, selectedGrade: null}
    School.find({
        // metodologia: req.body.selectedMethodology ? req.body.selectedMethodology : '',
        nome: req.body.schoolName ? { "$regex": req.body.schoolName, "$options": "i" } : '',
        ...req.body.selectedCity ? { cidade: req.body.selectedCity } : {}
        // cidade: req.body.selectedCity ? req.body.selectedCity : '',
        // estado: req.body.selectedState ? req.body.selectedState : ''
    }).then(documents => {
        res.status(200).json({
            message: 'All schools fetched successfully',
            schools: documents
        });
    });
});

module.exports = app;

