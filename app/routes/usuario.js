const express = require('express')

const control = require('../controller/usuario')

const ruta = express.Router()

const path = 'user'

ruta.get(
    `/user`, control.getData
)

module.exports =ruta
