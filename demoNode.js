console.log('Estoy en demo node');

function saludar(nombre) {
    return 'Hola,'+ nombre;
}

function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    if(letra.length > 1) {
      console.log('Dato incorrecto');
    } else if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u') {
      console.log('Es vocal');
    } else {
      console.log('No es vocal');
    }
  }

//var nombre = 'Vero';
//var mostrar = saludar(nombre);
//mostrar = mostrar + '!';
//var largo = mostrar.length;
//var n = Math.pow(3,3);
//console.log(mostrar);
//console.log(largo);
//console.log(n);

let pum ;
var dem = 'á';

esVocal(dem);
console.log(pum);
console.log(tieneTresDigitos('man'));
console.log(tieneTresDigitos(103));
console.log(tieneTresDigitos(-555));
console.log(saludo(pum));
console.log(saludo('español'));

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma=='aleman') {
    return "Guten Tag!";
  }
  if (idioma == "mandarin") {
    return "Ni Hao!";
  }
  if (idioma == "ingles") {
    return "Hello!";
  }
  let und;
  if (idioma == und) {
    return "chau!";
  }
  return "Hola!";
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  return (numero >= 100 && numero <= 999) || (numero <= -100 && numero >= -999);
}

//for(let i = 0; i<5;i++) {
 //   console.log(i*i);
//}
