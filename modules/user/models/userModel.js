const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
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

// Método pre-save para encriptar la contraseña
userSchema.pre('save', async function (next) {
  try {
    // Generar una sal (hash aleatorio) y utilizarla para cifrar la contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);

    // Reemplazar la contraseña sin cifrar con la cifrada
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});
  
module.exports = mongoose.model('User', userSchema);