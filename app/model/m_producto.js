const mongoose = require('mongoose')

const esquema_producto = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        codigo: {
            type: Number,
            required: true,
            unique: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('producto', esquema_producto, 'productos')

