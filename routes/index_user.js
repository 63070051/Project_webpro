const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const router = express.Router()


//INDEX LOGIN
router.post('/connected',async function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password
    const [data, field] = await pool.query(
        'SELECT login_username, login_password, User_user_id FROM Login WHERE login_username = ?',[
            username
        ]
    )
    let fklogin = data[0].User_user_id
    const [user, field1] = await pool.query(
        'SELECT * FROM Users WHERE user_id = ?',[
            fklogin
        ]
    )
    let dataname = ''
    let datapassword = ''
    if(data.length != 0){
        dataname = data[0].login_username;
        datapassword = data[0].login_password;
    }
    console.log(data[0])
    if((dataname == username) && (datapassword == password)){
        res.render('index_user',{
            user : JSON.stringify(user[0])
        })
    }
    else{
        res.send('Username or password not correct')
    }

})

//INDEX

router.get('/connected/:userId',async function(req, res, next) {
    const [user, field1] = await pool.query(
        'SELECT * FROM Users WHERE user_id = ?',[
            req.params.userId
        ]
    )
    res.render('index_user',{
        user : JSON.stringify(user[0])
    })
})

//ABOUT
router.get('/connected/about/:userId', function(req, res, next) {
    res.render('about_user')
})

router.get('/connected/question/:userId', function(req, res, next) {
    res.render('question_user')
})

module.exports = router
