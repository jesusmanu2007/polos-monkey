const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contacto', (req, res) => {
    const datos = req.body;

    fs.readFile('contactos.json', 'utf8', (err, data) => {
        let contactos = [];
        if (!err && data) {
            contactos = JSON.parse(data);
        }

        contactos.push(datos);

        fs.writeFile('contactos.json', JSON.stringify(contactos, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar en el archivo:', err);
                return res.status(500).json({ mensaje: 'Error al guardar los datos' });
            }
            console.log('Datos guardados en el archivo:', datos);
            res.json({ mensaje: 'Datos recibidos con éxito' });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en el puerto ${port}`);
});