const express = require('express')
const app = express()

app.get('/', (solicitud, respuesta) => {
    respuesta.send('<h1>Hola</h1>')
})

//para que funcione toca colocarle un puerto

// definir una puerta, donde este pendiente de lo que llegue en esa puerta

app.listen(3000, () =>{
    console.log('El servidor ya esta encendido http://localhost:3000')
})

// funcion que nos indica cuando el servidor esta encendido