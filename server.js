require("dotenv").config()
const { urlencoded, json } = require("express")
const express = require("express")
const path = require("path")

//TODO
// Stop git from tracking the .env file.

const app = express()
const PORT = process.env.SERVER_PORT || 3000


app.use(json())
app.use(urlencoded());
app.use(express.static("public")) 

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    return res.render("index")
})

app.listen(PORT, () => {
    console.log(`the server is started on port ${PORT}`)
})