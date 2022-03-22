console.log('Estoy en demo node');

function saludar(nombre) {
    return 'Hola,'+ nombre;
}

var nombre = 'Vero';
var mostrar = saludar(nombre);
mostrar = mostrar + '!!!';
var largo = mostrar.length;
var n = Math.pow(3,3);
console.log(mostrar);
console.log(largo);
console.log(n);
