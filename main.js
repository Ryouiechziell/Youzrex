const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({origin: "*"}))
app.use(express.json())

app.get("/",(req,res) => {
  res.sendFile("./yt.html")
})

app.listen(process.env.PORT || 5001)