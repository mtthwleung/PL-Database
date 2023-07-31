//express
const express = require('express');
const app = express();

//handlebars
const { engine } = require('express-handlebars');
app.engine('handlebars', engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//encoding incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//home page
app.get('/', (req, res) => {
    res.render('home');
})

//css and frontend js files
app.use(express.static('public'))

//route handlers
app.get('/scoreboard', (req, res) => {
    res.sendFile("public/index.html", { root: __dirname });
})

const stadiumsRoutes = require('./routers/stadiumsRoutes')
app.use('/stadiums', stadiumsRoutes);

const teamsRoutes = require('./routers/teamsRoutes');
app.use('/teams', teamsRoutes);

const nationalteamsRoutes = require('./routers/nationalteamsRoutes');
app.use('/nationalteams', nationalteamsRoutes);

const update = require('./routers/update');
app.use('/update', update);

const add = require('./routers/add');
app.use('/add', add);

const transfer = require('./routers/transfer');
app.use('/transfer', transfer);

app.listen(8080, () => {
    console.log('Server is listening')
})