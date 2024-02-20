require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const sendEmail = require('../routes/sendmail')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200
}
app.get('/', (req, res) => res.status(200).json({ message: "Hello World!"}))
app.use(cors(corsOptions))
app.use('/api/v1/sendEmail', sendEmail)

const port = 5000 

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
