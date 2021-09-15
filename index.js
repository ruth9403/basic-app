const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.get('/date', (req, res) => {
    res.send(`Date is ${(new Date()).toLocaleDateString("es-CO")}`)
});

app.listen(port, () =>{
    console.log(`Port is UP!, running on port ${port}`)
});
