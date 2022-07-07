const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const orderController = require('./controllers/order.controller')
const userController = require('./controllers/user.controller')
const cors = require('cors');
const app = express();
const { config } = require('./config/index');

//Middleware
app.use(express.json());
app.use(cors());
require('./utils/auth/index');
app.use('/api', orderController);
app.use('/api/auth', userController);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Hair Room API!');
})

// Connect to MongoDB
mongoose.connect(config.dbUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(config.port, () => console.log('Server is running on port: ', config.port));
