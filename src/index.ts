// @ts-ignore
const express = require('express');
const dotenv = require('dotenv');
const api = require('./api/routes');
const bodyParser = require('body-parser')
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


app.use('/api', api);
