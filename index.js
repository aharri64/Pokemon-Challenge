require('dotenv').config();
const express = require('express');
const app = express()
const expressLayouts = require('express-ejs-layouts')
const axios = require('axios')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log('you made it yo')
})

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
    console.log('...listening on', port);
});