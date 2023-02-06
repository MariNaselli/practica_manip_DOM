console.log('Hola mundos');

// crear variables que representen a los selectores de cada uno de estos elementos
// css h1 {color: red}
// css .parrafoclase {...}
// css #parrafoid {..}

const h1 = document.querySelector('h1');
const p = document.querySelector ('p');
const parrafoclase = document.querySelector ('.parrafoclase');
const parrafoid = document.querySelector ('#parrafoid');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btncalcular');
const presultado = document.querySelector('#resultado');
console.log ({
    h1,
    p,
    parrafoclase,
    parrafoid,
    //input,
});

console.log (h1);

//console.log (input.value);

//cambiar html desde js

h1.innerHTML = 'Cambio <br> titulo';
h1.innerText = 'Cambio <br> titulo';

//darle una clase a nuestro elemento html
//getAttribute: acceder a los atributos guardados en html
//tambien a las clases
//console.log (h1.getAttribute('pantalla'));

//setAttribute para modificar esa clase o atributo

h1.setAttribute('pantalla', 'ulito');

//pero si hablamos de clases en especifico
//es h1.classList
//podemos agregarle una clase (no quitarle) con add
// tambien hacer un remove para eliminar

//h1.classList.add ('');
//h1.classList.remove ('');

//input.value = "2345"

//console.log(document.createElement("span"));

const img = document.createElement('img');
img.setAttribute ('src', 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600')
console.log(img);

parrafoid.appendChild(img); 

//append appendChild agregan el elemento despues del contenido
//

//como podria borrar el contenid y solo que salga la imagen?

// es un escuchador de eventos: y si pasa ejecuta el js que le diga
//recibe dos parametros: elevento y el codigo js que mandamos a llamar
button.addEventListener('click',btnOnClick);

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    presultado.innerText = "Resultado: " + sumaInputs;
};