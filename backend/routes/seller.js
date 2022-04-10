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

module.exports = router
