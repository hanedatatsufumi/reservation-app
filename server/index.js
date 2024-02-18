const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const SampleDb = require('./sample-db');
const productRoutes = require('./routes/products');
const path = require('path');

mongoose.connect(config.DB_URI)
.catch(error => console.log(error))
.then(
    () => {
        // const fakeDB = new FakeDB();
        // fakeDB.seeDb();
        const sampleDb = new SampleDb();
        sampleDb.initDb();
    }
);

const app = express();

// app.get('/products', function(req, res) {
//     res.json({'success': true });
// });

app.use('/api/v1/products', productRoutes);

const appPath = path.join(__dirname, '..', 'dist', 'reservation-app', 'browser');
app.use(express.static(appPath));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log('Server is running on port 3001');
});

