const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
//para la raiz retorna index
app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/public/index.html');
});
//anadiendo ruta para cuando no visita raiz
app.get('/*',(req, res) =>{
	return res.redirect('/');
});

module.exports = app;