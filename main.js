const express = require('express'); //importamos express
const app = express();
const puerto = 3001; //puerto por donde corre la app
const rutass = require('./app/routes/usuario')
const db = require('./config/db')

app.get('/', (req, res)=>{ //muestra un mensajue en el navegador
    res.send({
        data: 'hola a todos cv'
    })
})

app.use(
    express.json({
        limit: '20mb'
    })
)

app.use(
    express.urlencoded({
        limit: '20mb'
    })
)

app.use(rutass)

app.listen(puerto, ()=>{
    console.log('la app esta en linea');
})

db()

