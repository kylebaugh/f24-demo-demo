const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.js'))
})

const port = process.env.PORT || 4444

app.listen(port, () => console.log(`Server running on port ${port}`))

// const express = require('express')
// const path = require('path')

// const app = express()

// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

// const port = process.env.PORT || 4005

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })