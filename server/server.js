const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome")
})

const port = process.env.PORT || 5002
app.listen(port, () => console.log("Server started at " + port))