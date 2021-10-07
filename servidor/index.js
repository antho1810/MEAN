const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creando servidor
const app = express();

// Conectamos BD
conectarDB();

app.use(cors())

app.use(express.json());

// Ruta principal
app.use('/api/products', require('./routes/product'));


app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente");
})