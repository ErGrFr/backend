// chargement du module express
const express = require('express');
// creation 
const app = express();

app.use(express.json());  // ou body parser , on intercepte toutes les requetes json


// mongoDB 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://EricG:Lolita60540@cluster0.9srzq.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//mongodb+srv://EricG:Lolita60540@cluster0.9srzq.mongodb.net/Cluster0?retryWrites=true&w=majority


//------- MiddleWare ---------------------

// app.use((req, res, next)=>{
//     console.log('requete recu 1');
//     next();
// })

// app.use((req, res, next)=>{
//     res.status(201);
//     console.log('201');
//     next();
// })

// app.use((req, res, next)=> {
//     res.json({message: 'requete recu 2'});
//     next();
// })

// app.use((req, res, next)=>{
//     console.log('reponse envoyée avec succès');

// })

//-------------------- new API --------------------

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// requete POST
app.post('/api/stuff',(req, res, next)=>{
    console.log(req.body);  // grace a express
    res.status(201).json({
        message: 'l objet a été créé'
    });
});

// requete GET
app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

//--------------------------------------------------

// renvoi des infos 
module.exports = app;
