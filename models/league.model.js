const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minLength: 3, 
        maxLength: 40,
        trim: true /* Evita espacios al principio y final */
    },
    sport: {
        type: String, 
        required: [true, 'El campo "sport" es obligatorio'],
        enum: {
            values: ['football', 'basketball', 'nfl'],
            message: 'El deporte "{VALUE}" no es válido. Los valores permitidos son: football, basketball, nfl'
              },
        trim: true
    },
    country: {
        type: String, 
        required: true,
        trim: true
    },
    openingDate: Date ,    
    participantNumber: {
        type: Number,
        required: true 
}}, {
  versionKey: false, // oculta "__v" en todas los métodos.
  timestamps: true   // genera automáticamente createdAt y updatedAt.
})

module.exports = mongoose.model("League", leagueSchema)