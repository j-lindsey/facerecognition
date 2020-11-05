const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mindful1983',
        database: 'smartbrain'
    }
});


const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send('success'); })
app.post('/signin', (req, res) => { signin.handleSignin(req, res, knex, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, knex, bcrypt, saltRounds) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, knex) })
app.put('/image', (req, res) => { image.handleImage(req, res, knex) })

app.listen(3000, () => {
    console.log('app is running on port 3000')
})

