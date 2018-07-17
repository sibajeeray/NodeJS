var express = require('express');
var app = express();

const parseArgs = require('minimist') (process.argv.slice(2))
const IP = parseArgs.ip || "127.0.0.1"
const PORT = parseArgs.port || 8000


app.get("/", function (req, res) {
  res.send("Server running on " + IP  + ":" + PORT)
})

console.log("START ", IP+" :",PORT)
app.listen(PORT, IP)

module.exports = app;


