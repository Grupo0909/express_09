const mongoose = require('mongoose')
const modelo_u = require('../model/m_usuario')
const modelo_p = require('../model/m_producto')

exports.getData = (req, res)=>{
    //res.send({data: 'esto esta en controlador'})
    modelo_u.find({},(err,docs)=>{
        res.send({docs})
    })
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

exports.insertProducto = (req,res)=>{
    const data = req.body
    //res.send({data})
    //modelo_p.collection.insert(data, (err, docs)=>{
    modelo_p.create(data, (err, docs)=>{
        if(err){
            console.log('error', err);
            res.send({error: err},402)
        }else{
            res.send({data: docs})
        }
    })
}

const parserId = (x)=>{
    return mongoose.Types.ObjectId(x)
}
exports.updateSingle = (req, res)=>{
    const {id} = req.params //contine el valor a comparar en la base de datos
    const body = req.body //contiene llave y valor a actualizar
    modelo_u.updateOne(
        {_id: parserId(id)},
        body,
        (err, docs)=>{
            res.send({
                items: docs
            })
        }
    )
}

exports.delete_u = (req, res)=>{
    const {id} = req.params //contine el valor a comparar en la base de datos
    //const body = req.body //contiene llave y valor a actualizar
    modelo_u.deleteOne(
        {_id: parserId(id)},
        //body,
        (err, docs)=>{
            res.send({
                items: docs
            })
        }
    )
}