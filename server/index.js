// const express = require('express')
// const app = express()
// const cors = require('cors')
// const path = require('path')

// app.use(express.json())
// app.use(cors())

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index/html'))
// })

// const port = process.env.PORT 

// port ? SERVER_PORT = port : SERVER_PORT = 4444

// app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))

const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})