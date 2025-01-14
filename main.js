const express = require("express")
const cors = require("cors")
const fs = require("fs")
const yt = fs.readFileSync("./yt.html")
const app = express()

app.use(cors({origin: "*"}))
app.use(express.json())

app.get("/",(req,res) => {
  res.sendFile(yt)
})

app.listen(process.env.PORT || 5001)
