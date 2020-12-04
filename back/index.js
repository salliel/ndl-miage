const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin :  function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Routes
app.get('/test', (req, res) => {
    res.status(200).json({ test: 'test'});
});

app.use('/api/data-gathering', require('./controllers/data-gathering'));


app.listen(port, () => console.log(`server listening on port ${port}!`));