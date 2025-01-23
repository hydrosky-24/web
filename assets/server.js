// Import module yang diperlukan
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Port untuk server

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint untuk menerima data sensor
app.post('/api/data', (req, res) => {
    const { temperature, pH, turbidity, tds } = req.body;

    // Validasi data
    if (temperature === undefined || pH === undefined || turbidity === undefined || tds === undefined) {
        return res.status(400).send({ message: 'Data tidak lengkap!' });
    }

    // Log data ke server
    console.log('Data Sensor Diterima:');
    console.log(`Suhu: ${temperature} °C`);
    console.log(`pH: ${pH}`);
    console.log(`Kekeruhan: ${turbidity} NTU`);
    console.log(`TDS: ${tds} ppm`);

    // Respon ke perangkat
    res.status(200).send({ message: 'Data diterima!' });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
