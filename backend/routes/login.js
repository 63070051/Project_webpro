const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const { json } = require("express");
const router = express.Router()
let alert = require('alert');


router.post('/register/account',async function(req, res, next) {
    let username = req.body.username;
    let password1 = req.body.password1;
    let password2 = req.body.password2;
    let firstname = req.body.firstname;
    
    let lastname = req.body.lastname;
    let idcard = req.body.idcard;
    let tel = req.body.tel;
    let email = req.body.email;
    let address = req.body.address;
    let birth = req.body.birth;
    let gender = req.body.gender;
    let customer = null;



    let now = new Date();
    let birthDate = new Date(birth);
    let age = now.getFullYear() - birthDate.getFullYear();
    let m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age >= 20){
        customer = true
    }
    console.log(username, password1, password2, firstname, lastname, age, idcard, tel, email, address, birth, gender)
    if(password1 != password2){
        alert('Password do not match')
    }
    else{
        const conn = await pool.getConnection()
        await conn.beginTransaction();
        try {
            const user = await conn.query(
                'INSERT INTO Users(user_firstname, user_lastname, user_idcard, user_age, user_phone, user_address, user_email, user_gender, user_birth, customer_type) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                    firstname, lastname, idcard, age, tel, address, email, gender, birth, customer
                ]
            )
            user_id = user[0].insertId
            console.log(user_id)
            const login = await conn.query(
                'INSERT INTO Login(login_username, login_password, user_id) VALUES(?, ?, ?)', [
                    username, password1, user_id
                ]
            )
            await conn.commit()
            res.json('success')
        } catch (err) {
            await conn.rollback();
            next(err);
        } finally {
            console.log('finally')
            conn.release();
        }
        
    }
    
})
router.post('/connected',async function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password
    const [data, field] = await pool.query(
        'SELECT login_username, login_password, user_id FROM Login WHERE login_username = ?',[
            username
        ]
    )
    if(data[0] == undefined){
        res.json('error')
    }
    else{
        let fklogin = data[0].user_id
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
            res.json(user[0])
        }
        else{
            res.json('error')
        }
    }
})
router.post('/update/account/:id',async function(req, res, next) {
    let id = req.params.id
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let tel = req.body.tel;
    let email = req.body.email;
    let address = req.body.address;
    try {
        const [data, field] = await pool.query(
            'UPDATE Users SET user_firstname = ?, user_lastname = ?, user_phone = ?, user_address = ?, user_email = ? WHERE user_id = ?',[
                firstname, lastname, tel, address, email, id
            ]
        )
        const [user, field1] = await pool.query(
            'SELECT * FROM Users WHERE user_id = ?',[
                id
            ]
        )
        res.json(user[0])
    } catch (error) {
        res.json(error)
    }
})
module.exports = router
