const { response } = require('express');
const express = require('express');
const path = require('path');

const app = express();

// Configurar Pug como motor de vistas
app.set('view engine', 'pug');

// Ruta a las vistas (archivos Pug)
app.set('views', path.join(__dirname, 'plantillas'));

// Definir una ruta para renderizar la plantilla
app.get('/ejercicio1', (req, res) => {
    res.render('ejercicio1');
  });

app.get('/ejercicio2', (req, res) => {
    res.render('ejercicio2');
  });

app.get('/ejercicio3', async (req, res) => {
    const respon = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
    const opciones = await respon.json();
    const orden = [];
    opciones.provincias.forEach(element => {
       orden.push( element.nombre);
        
    });
    orden.sort();
     res.render('ejercicio3',{ orden });
  });



app.listen(3002);