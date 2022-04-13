const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const { json } = require("express");
const router = express.Router()

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/uploads");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

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
router.post('/addcar/:id', upload.array("myImage", 12), async function(req, res, next) {
    try {
        const file = req.files
        let pathArray = []
        let car_year = req.body.car_year
        let car_color = req.body.car_color
        let car_desc = req.body.car_desc
        let car_price = req.body.car_price
        let car_regis = req.body.car_regis
        let car_distance = req.body.car_distance
        let car_engine = req.body.car_engine
        let car_gear = req.body.car_gear
        let car_yearbought = req.body.car_yearbought
        let car_owner = req.body.car_owner
        let car_num_of_gear = req.body.car_num_of_gear
        let car_brand = req.body.car_brand
        let car_drive_type = req.body.car_drive_type
        let car_act = req.body.car_act
        let car_num_of_door = req.body.car_num_of_door

        const [car, field1] = await pool.query(
            'INSERT INTO Car(seller_id, car_year, car_color, car_desc, car_price, car_regis, car_distance, car_engine, car_gear, car_yearbought, car_owner, car_num_of_gear, car_brand, car_drive_type, car_act, car_num_of_door)', [
                req.params.id, car_year, car_color, car_desc, car_price, car_regis, car_distance, car_engine, car_gear, car_yearbought, car_owner, car_num_of_gear, car_brand, car_drive_type, car_act, car_num_of_door
            ]
        )
        file.forEach((file, index) => {
            let path = [file.path.substring(6), car.insertId];
            pathArray.push(path);
          });
        const [img, field2] = await pool.query(
            'INSERT INTO Car_images(car_img, Car_car_id)', [
                pathArray
            ]
        )
        return res.json('success');
      } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router
