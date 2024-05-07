const express = require('express');
const app = express();
require("dotenv").config()
const connectToMongoDB = require("./db/mongodb")
const logger = require("morgan")
const cors = require('cors')

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

/*
    MIDDLEWARE
*/
app.use(logger("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors(corsOptions))

/*
    Routes
*/
const McuRouter = require("./routes/mcuRouter")
app.use("/api", McuRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);

    connectToMongoDB()
})