const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const router = express.Router()


//ADD CAR
router.post('/connected/add/car/:userId',async function(req, res, next) {
    let seller_id = req.params.userId
    let year = req.body.year
    let color = req.body.color
    let desc = req.body.desc
    let price = req.body.price
    let regis = req.body.regis
    let distance = req.body.distance
    let engine = req.body.engine
    let gear = req.body.gear
    let yearbought = req.body.yearbought
    let owner = req.body.owner
    let numgear = req.body.numgear
    let brand = req.body.brand
    let drivetype = req.body.drivetype
    let act = req.body.act
    let door = req.body.door
    const [car, fields] = await pool.query(
        'INSERT INTO Car (car_year, car_color, car_desc, car_price, car_regis, car_distance, car_engine, car_gear, car_yearbought, car_owner, car_num_of_gear, car_brand, car_drive_type, car_act, car_num_of_door, seller_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            year,
            color,
            desc,
            price,
            regis,
            distance,
            engine,
            gear,
            yearbought,
            owner,
            numgear,
            brand,
            drivetype,
            act,
            door
        ]
    )
    
})



module.exports = router
