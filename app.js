const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('requete recu 1');
    next();
})

app.use((req, res, next)=>{
    res.status(201);
    console.log('201');
    next();
})

app.use((req, res, next)=> {
    res.json({message: 'requete recu 2'});
    next();
})

app.use((req, res, next)=>{
    console.log('reponse envoyée avec succès');

})

module.exports = app;
