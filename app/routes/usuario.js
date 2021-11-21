const express = require('express')
const control = require('../controller/usuario')
const ruta = express.Router()

const path = 'user'
const path2 = 'producto'

//insert en usuarios
ruta.post(`/${path}`, control.insertData)

//insert en productos
ruta.post(`/${path2}`, control.insertProducto)

//update en usuarios
ruta.put(`/${path}/:id`, control.updateSingle)

//borrar
ruta.delete(`/${path}/:id`, control.delete_u)

ruta.get(
    `/user`, control.getData
)

module.exports =ruta
