const express = require('express');
const bodyParser = require('body-parser'); //this is the middleware translating data from front-end to back-end
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

 //this is how to execute body-parser
 app.use(bodyParser.json())
 app.use(cors())

const database ={
    user: [
        {
            id: '1',
            name: 'John',
            email: 'johngil@gmail.com',
            password: 'password',
            facedetected: 0,
            joined: new Date()
        },
        {
            id: '2',
            name: 'syrel',
            email: 'sai@gmail.com',
            password: 'password',
            facedetected: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '001',
            hash: '',
            email: 'johngil@gmail.com'
        }
    ]
}

app.get('/', (req, res)=> {
    res.send(database.user);
})

//signin --> POST = success/fail
app.post('/signin', (req, res) => {

    bcrypt.compare("annpassword", '$2a$10$2pWBbQMHyBs9F3grG12nkeo2JeYQ1i5yCaDJcsrdRQTVmXXyYcZlm', function(err, res) {
        console.log('attemp1', res)
        // res == true
    });
    bcrypt.compare("veggies", '$2a$10$2pWBbQMHyBs9F3grG12nkeo2JeYQ1i5yCaDJcsrdRQTVmXXyYcZlm', function(err, res) {
        console.log('attemp2', res)
        // res = false
    });

    if (req.body.email === database.user[0].email && req.body.password === database.user[0].password) {
        res.json('success');
       } else {
            res.status(400).json('error logging in');
       }
})

//register --> POST = user
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    });
    database.user.push({
        id: '3',
        name: name,
        email: email,
        facedetected: 0,
        joined: new Date()
    })
    res.json(database.user[database.user.length-1]) //adding new user to the list at the end or in last item
})

//profile/:Id --> GET = user
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let userfound = false;
    database.user.forEach(user => {
        if (user.id === id) {
            userfound = true;
            return res.json(user);
        }
    })
    if (!found){
        res.status(400).json('user not found')
    }
})

//image --> PUt --> user
app.put('/image', (req, res) => {
    const { id } = req.body;
    let userfound = false;
    database.user.forEach(user => {
        if (user.id === id) {
            userfound = true;
            user.facedetected++
            return res.json(user.facedetected);
        }
    })
    if (!found){
        res.status(400).json('user not found')
    }
})

bcrypt.hash("bacon", null, null, function(err, hash) {

});


app.listen(3000, () => {
    console.log('app is running on port 3000');
})