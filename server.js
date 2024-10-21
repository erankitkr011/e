const express = require('express');
const path = require('path');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const app = express();
let db;

MongoClient.connect('mongodb+srv://ankitkr23042004:XSF0srtElLSB0iXV@cluster0.ryory2y.mongodb.net/')
    .then(client => {
        db = client.db('dbName');
        db.collection('collectionName').insertOne({ "name": "question" })
            .then(d => console.log('Document inserted'))
            .catch(err => console.error('Error inserting document:', err));

        db.collection('collectionName').find().toArray()
            .then(d => console.log(d))
            .catch(err => console.error('Error fetching documents:', err));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/GetProducts', (req, res) => {
    const category = req.query.category;
    const filePath = path.join(__dirname, "products.json");
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);
    const filteredProducts = products.filter(product => product.product_category === category);
    res.json(filteredProducts);
});

app.listen(3000, () => {
    console.log("Server is started on port 3000");
});