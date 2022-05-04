const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");
const { json } = require("express");
const fs = require("fs");
const router = express.Router();

router.post('/cusreqseller/:cusid/:carid', async function (req, res, next) {
    let cus_id = req.params.cusid
    let car_id = req.params.carid
    try {
        const [sellerid, _] = await pool.query(
            'SELECT seller_id FROM Seller AS s JOIN Car AS c ON(s.user_id = c.seller_id) WHERE c.car_id = ?', [
                car_id
            ]
        )
        const [saledata, field] = await pool.query(
            'INSERT INTO Sales_data(Sal_price, sal_status, cus_id, car_id, seller_id)', [
                0, 'pending', cus_id, car_id, sellerid
            ])
        return res.json('success')
    } catch (error) {
        return next(error)
    }
  })
  router.get('/getcuscarseller/:cusid', async function (req, res, next) {
    let cus_id = req.params.cusid
    try {
        const [cus, _] = await pool.query(
            'SELECT * FROM Car JOIN Sales_data USING(car_id) WHERE cus_id = ?', [
                cus_id
            ]
        )
        return res.json(cus)
    } catch (error) {
        return next(error)
    }
  })

module.exports = router;
