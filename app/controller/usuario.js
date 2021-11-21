const mongoose = require('mongoose')

const modelo_u = require('../model/m_usuario')

exports.getData = (req, res)=>{
    res.send({data: 'esto esta en controlador'})
}

exports.insertData = (req, res)=>{
    const data = req.body
    //res.send({data})
    modelo_u.create(data, (err, docs)=>{
        if(err){
            console.log('error', err);
            res.send({error: err},402)
        }else{
            res.send({data: docs})
        }
    })
}