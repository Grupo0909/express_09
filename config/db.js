const mongoose = require('mongoose')

const db_url= 'mongodb://127.0.0.1:27017/app_09' //ruta para conectarme a mongo

//modulo para conexion
module.exports = ()=>{
    const conex = ()=>{
        mongoose.connect(
            db_url,
            {
                keepAlive: true,
                useNewUrlparser: true,
                useUnifiedTopology: true
            },
            //funcion que me dice si hay error o no
            (error)=>{
                if(error){
                    console.log('existe un error en la conexion');
                }else{
                    console.log('la conexion fue exitosa');
                }
            }
        )
    }
    conex()
}