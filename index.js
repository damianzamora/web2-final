require('dotenv').config();
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
        console.log("\x1b[36m Servidor funcionado en puerto 3000 \x1b[37m") 
    })
        
    })
    .catch(error => console.log(error))