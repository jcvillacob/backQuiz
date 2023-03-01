const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /\d{10}/.test(v);
          },
          message: props => `${props.value} no es un número de teléfono válido. Debe tener 10 dígitos.`
        }
    }
});
  
module.exports = mongoose.model('Creator', creatorSchema);