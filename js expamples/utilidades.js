const saludar = (nombre) => {
    console.log('Good Night '+ nombre)
}

const despedirse = (nombre) => {
    console.log('Good Bye '+ nombre)
}
//export {saludar}
module.exports = {saludar: saludar, despedirse: despedirse}