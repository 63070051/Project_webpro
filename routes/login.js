const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const router = express.Router()

router.get('/login',async function(req, res, next) {
    res.render('login')

})
router.get('/register', function(req, res, next) {
    res.render('register')

})
router.post('/register/account',async function(req, res, next) {
    console.log(req.body.password1)
    let username = req.body.name;
    let password1 = req.body.password1;
    let password2 = req.body.password2;
    let tel = req.body.tel;
    let email = req.body.email;
    let address = req.body.address;
    let birth = req.body.date;
    let gender = req.body.gender;
    if(password1 != password2){
        alert("Password do not match")
    }
    else{
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            const user = await conn.query(
                'INSERT INTO Users(user_name, user_password, user_phone, user_address, user_email, user_gender, user_birth) VALUES(?, ?, ?, ?, ?, ?, ?)', [
                    username, password1, tel, address, email, gender, birth
                ]
            )
            user_id = user[0].insertId
            console.log(user_id)
            const login = await conn.query(
                'INSERT INTO Login(login_username, login_password, User_user_id) VALUES(?, ?, ?)', [
                    username, password1, user_id
                ]
            )
            await conn.commit()
            res.redirect('/login')
        } catch (err) {
            await conn.rollback();
            next(err);
        } finally {
            console.log('finally')
            conn.release();
        }
        
    }
})
module.exports = router
