const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const live = require('./routes/pagesRoute');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let balance = 834125.00;
app.use('/', live);

// Access the session as req.session






const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`Server started at port ${port}`));