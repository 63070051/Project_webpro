const express = require('express')
const pool = require('../config')
const path = require("path")
const multer = require('multer')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index')

})
router.get('/about', function(req, res, next) {
    res.render('about_guest')
})
router.get('/question', function(req, res, next) {
    res.render('question_guest')
})

module.exports = router