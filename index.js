const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.json("test")
})

app.listen(4000, () => console.log("App running successfully"))