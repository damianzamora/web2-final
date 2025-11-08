const express = require('express')
const app = express();

const leagues_routes = require('./routes/league.routes')
const users_routes = require('./routes/user.routes')

app.use(express.json()) 

app.use("/api", [leagues_routes,users_routes]) 

module.exports = app; 