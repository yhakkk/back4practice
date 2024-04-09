const express = require('express');
const morgan = require('morgan');
const routes = require('./rutas/route.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(routes);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})