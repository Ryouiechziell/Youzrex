const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({origin: "*"}))
app.use(express.json())
app.use(express.static("./"))

app.get("/",(req,res) => {
  res.send("aman lek")
})

app.listen(process.env.PORT || 5001)
