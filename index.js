const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.listen(3000, () => {
    console.log('Start server at port 3000.')
})

// กำหนดให้ path blogapi แสดงข้อมูลบทความทั้งหมดในรูปแบบ json

// app.get('/blogapi', (req, res) => {
//     res.json(article)
// })

// กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด

// app.get('/blogapi/:id', (req, res) => {
//     res.json(article.find(article => article.id === req.params.id))
// })
const path = require('path')

// Setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup static path
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false}));
// Config Router
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')

app.use(indexRouter)
app.use(loginRouter)