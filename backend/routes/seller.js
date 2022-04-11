const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const { json } = require("express");
const router = express.Router()


router.post('/seller/:id',async function(req, res, next) {
    try {
        const [row, field] = await pool.query(
            'SELECT * FROM Users WHERE user_id = ?', [
                req.params.id
            ]
        )
        console.log(row)
        return res.json(row);
      } catch (err) {
        return res.status(500).json(err)
    }
})
router.post('/requestseller/:id',async function(req, res, next) {
    try {
        const [row, field] = await pool.query(
            'INSERT INTO seller VALUES(?, ?)', [
                'Not-Vertified' ,req.params.id
            ]
        )
        return res.json('success');
      } catch (err) {
        return res.status(500).json(err)
    }
})
router.post('/getseller',async function(req, res, next) {
    try {
        const [row, field] = await pool.query(
            'SELECT * FROM Users AS u JOIN (SELECT * FROM Seller) AS s ON u.user_id = s.User_user_id'
        )
        console.log(row)
        return res.json(row);
      } catch (err) {
        return res.status(500).json(err)
    }
})
router.post('/vertifiedseller/:id',async function(req, res, next) {
    try {
        const [row, field] = await pool.query(
            'UPDATE Seller SET `s_vertified` = ? WHERE User_user_id = ?', [
                'Vertified', req.params.id
            ]
        )
        console.log(row)
        return res.json('success');
      } catch (err) {
        return res.status(500).json(err)
    }
})
router.post('/cancelseller/:id',async function(req, res, next) {
    try {
        const [row, field] = await pool.query(
            'UPDATE Seller SET `s_vertified` = ? WHERE User_user_id = ?', [
                'Not-Vertified', req.params.id
            ]
        )
        console.log(row)
        return res.json('success');
      } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router
