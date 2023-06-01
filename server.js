const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorhandler");


connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/contacts/', require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
});
