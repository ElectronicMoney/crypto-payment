const express    = require('express');
const config     = require('./config');
const bodyParser = require('body-parser');

const app = express();

// Json body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send({
        username: 'Emoney'
    });
});


app.listen(config.PORT, console.log(`Listening on port ${config.PORT}`));