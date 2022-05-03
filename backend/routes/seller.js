const express = require("express");
const pool = require("../config");
const path = require("path");
const multer = require("multer");
const { json } = require("express");
const fs = require("fs");
const router = express.Router();


router.post("/seller/:id", async function (req, res, next) {
  try {
    const [row, field] = await pool.query(
      "SELECT * FROM Users WHERE user_id = ?",
      [req.params.id]
    );
    return res.json(row);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/requestseller/:id", async function (req, res, next) {
  try {
    const [row, field] = await pool.query("INSERT INTO Seller VALUES(?, ?)", [
      "Not-Vertified",
      req.params.id,
    ]);
    return res.json("success");
  } catch (err) {
    next(err);
  }
});
router.post("/getseller", async function (req, res, next) {
  try {
    const [row, field] = await pool.query(
      "SELECT * FROM Users JOIN Seller USING(user_id)"
    );
    return res.json(row);
  } catch (err) {
    next(err);
  }
});
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



module.exports = router;
