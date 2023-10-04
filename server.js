const express = require('express');
const { MONGO_CONNECTION_URI, MONGO_DB_NAME, API_PORT} = require('./config/api_config');
const mongoose = require('mongoose');
const cors = require('cors');

//importing the routes of our api
const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');
const customerRoute = require('./routes/customerRoute');
const reviewRoute = require('./routes/reviewRoute');
const orderRoute = require('./routes/orderRoute');

mongoose.connect(`${MONGO_CONNECTION_URI}/${MONGO_DB_NAME}`)
.then( () => {
    console.log(`connected to mongodb on port: ${MONGO_CONNECTION_URI}`);

    //inicializimi i express 
    const app = express();

    // middleware pipeline
    app.use(express.json());
    app.use(cors());
    
    //api routes
    app.get('/', (req, res) => {
        res.json({ msg: "WELCOME TO NODE JS API!"});
    });

    app.use('/product', productRouter);

    app.use('/category', categoryRouter);

    app.use('/customer', customerRoute);

    app.use('/review', reviewRoute);

    app.use('/order', orderRoute);



    //running the server
    app.listen(API_PORT, () => {
        console.log(`Server is listening in port: ${API_PORT} .....`);
    })

})

