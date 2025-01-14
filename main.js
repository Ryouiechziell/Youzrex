const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({origin: "*"}))
app.use(express.static(__dirname + "/public"))

app.get("/",(req,res) => {
  res.redirect("/yt.html")
})

app.listen(process.env.PORT || 5001)
