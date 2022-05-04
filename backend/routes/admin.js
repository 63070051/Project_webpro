const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");
const { json } = require("express");
const fs = require("fs");
const router = express.Router();


router.post("/vertifiedseller/:id", async function (req, res, next) {
    try {
      const [row, field] = await pool.query(
        "UPDATE Seller SET `s_vertified` = ? WHERE user_id = ?",
        ["Vertified", req.params.id]
      );
      const [users, field1] = await pool.query(
        "UPDATE Users SET `seller_type` = 1 WHERE user_id = ?",
        [req.params.id]
      );
      return res.json("success");
    } catch (err) {
      next(err);
    }
  });
  router.post("/cancelseller/:id", async function (req, res, next) {
    try {
      const [row, field] = await pool.query(
        "UPDATE Seller SET `s_vertified` = ? WHERE user_id = ?",
        ["Not-Vertified", req.params.id]
      );
      const [users, field1] = await pool.query(
        "UPDATE Users SET `seller_type` = 0 WHERE user_id = ?",
        [req.params.id]
      );
      return res.json("success");
    } catch (err) {
      return res.status(500).json(err);
    }
  });
  router.post("/finalsell/:saledataid", async function (req, res, next) {
    try {
      const [saledata, field] = await pool.query(
        "UPDATE Sales_data SET sal_status = ? WHERE sal_id = ?",
        ["confirmed", req.params.saledataid]
      );
      return res.json("success");
    } catch (err) {
      return res.status(500).json(err);
    }
  });
  router.get("/getcarsaledata", async function (req, res, next) {
    try {
      const [saledata, field] = await pool.query(
        "SELECT * FROM Sales_data WHERE sal_status = 'waiting admin'",
      );
      return res.json(saledata);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  module.exports = router;