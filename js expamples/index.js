//import saludar from './utilidades'
const {saludar, despedirse}= require('./utilidades')

console.log('Ciao') // se ejecuta 1ro

// si se tien un error en la mitad del codigo se tumba el servidor, sin embargo al usar un hilo secundario se tumbara cuando se complete su tiempo
try{
    saludar('Lina')
    despedirse('Lina')
for (let i = 0; i < 10; i++) {
    console.log('i',i)
    /*if (i < 5) {
        i + g//error
    }   */
}} catch (error){// nos permite continuar nuestro servidor, por si acaso haya un error
    console.error('Error',error)
} 

console.log('Arrivederci') // se ejecuta 2ro

