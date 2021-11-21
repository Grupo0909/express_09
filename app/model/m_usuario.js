 const mongoose = require('mongoose')

 const esquema_user = new mongoose.Schema(
     {
         nombre: {
             type: String
         },
         email: {
             type: String,
             unique: true,
             required: true
         }
     },
     {
         versionKey: false
     }
 )

 module.exports = mongoose.model('usuario', esquema_user, 'user_09')