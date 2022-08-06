const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:5000');

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(4000, () => {
    console.log("Server is listening on port 4000...")
});