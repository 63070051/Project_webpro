const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const { json } = require("express");
const router = express.Router()
let alert = require('alert');

router.post('/detail/:carid',async function(req, res, next) {
    try {
        const [detailcar, field] = await pool.query(
            'SELECT * FROM Car WHERE car_id = ?',[
                req.params.carid
            ]
        )
        const [carimg, field1] = await pool.query(
            'SELECT * FROM Car_images WHERE car_id = ?',[
                req.params.carid
            ]
        )
        res.json({
            detailcar : detailcar[0],
            carimg : carimg
        })
    } catch (error) {
        res.json(error)
    }
})
module.exports = router
