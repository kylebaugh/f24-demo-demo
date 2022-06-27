const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const {port} = process.env 

port ? SERVER_PORT = port : SERVER_PORT = 4444

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))