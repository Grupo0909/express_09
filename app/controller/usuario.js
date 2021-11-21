const mongoose = require('mongoose')

exports.getData = (req, res)=>{
    res.send({data: 'esto esta en controlador'})
}