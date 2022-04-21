const express = require('express')
const pool = require('../config')
const path = require("path")
const Joi = require('joi')
const multer = require('multer')
const { json } = require("express");
const router = express.Router()
let alert = require('alert');

// const usernameValidator = async (value, helpers) => {
//     const [rows, _] = await pool.query("SELECT username FROM users WHERE username = ?", [value])
//     if (rows.length > 0) {
//         const message = 'This username is already taken'
//         throw new Joi.ValidationError(message, { message })
//     }
//     return value
// }

// const passwordValidator = (value, helpers) => {
//     if (value.length < 8) {
//         throw new Joi.ValidationError('Password must contain at least 8 characters')
//     }
//     if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
//         throw new Joi.ValidationError('Password must be harder')
//     }
//     return value
// }

// const signupSchema = Joi.object({
//     idcard : Joi.string().required().min(13).max(13),
//     email: Joi.string().required().email(),
//     tel: Joi.string().required().pattern(/0[0-9]{9}/),
//     firstname: Joi.string().required().max(150),
//     lastname: Joi.string().required().max(150),
//     address: Joi.string().required().max(255),
//     birth : Joi.string().required(),
//     gender : Joi.string().required(),
//     password1: Joi.string().required().custom(passwordValidator),
//     password2: Joi.string().required().custom(passwordValidator),
//     confirm_password: Joi.string().required().valid(Joi.ref('password')),
//     username: Joi.string().required().min(5).max(30).external(usernameValidator),
// })

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
    const [checkuser, field] = await pool.query(
        'SELECT * FROM Login WHERE login_username = ?',[
            username
        ]
    )
    const [checkphone, field1] = await pool.query(
        'SELECT * FROM Users WHERE user_phone = ?',[
            tel
        ]
    )
    const [checkidcard, field2] = await pool.query(
        'SELECT * FROM Users WHERE user_idcard = ?',[
            idcard
        ]
    )
    const [checkemail, field3] = await pool.query(
        'SELECT * FROM Users WHERE user_email = ?',[
            email
        ]
    )

    // try {
    //     await signupSchema.validateAsync(req.body, { abortEarly: false })
    // } catch (err) {
    //     return res.status(400).send(err)
    // }

    // console.log(username, password1, password2, firstname, lastname, age, idcard, tel, email, address, birth, gender)
    console.log(checkuser[0] != undefined)
    if(password1 != password2){
        alert('Password do not match')
    }
    else if(checkuser[0] != undefined){
        res.json('Username is used')
    }
    else if(checkphone[0] != undefined){
        res.json('Phone is used')
    }
    else if(checkidcard[0] != undefined){
        res.json('ID card is used')
    }
    else if(checkemail[0] != undefined){
        res.json('Email is used')
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
