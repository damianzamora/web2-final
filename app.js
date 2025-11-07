const express = require('express')
const app = express();

const leagues_routes = require('./routes/league.routes')

app.use(express.json()) 

app.use("/api", [leagues_routes]) 

module.exports = app; 