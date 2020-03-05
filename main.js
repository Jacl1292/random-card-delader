/*let ul = document.getElementById("dominio");
for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
        for (k = 0; k < noun.length; k++) {
            var viewdomin = pronoun[i] + adj[j] + noun[k];
            let li = document.createElement('li');
            li.innerHTML = viewdomin;
            ul.appendChild(li);
        }
    }
}
var when_random = Math.floor(Math.random()*when.length); 
var what_random = Math.floor(Math.random()*what.length); 
var who_random = Math.floor(Math.random()*who.length); 

let cadena = who[who_random] + " "+ what[what_random] +" " +when[when_random];
document.querySelector("#oracion").innerHTML= cadena;*/


/*window.onload= function(){*/
let baraja =["A","2","3","4","5","6","7","8","9",10,"J","Q","K"];
let imagenes=["./imagen/corazon1.jpg","./imagen/diamantes.png","./imagen/picas.png","./imagen/trebol.png"];
let cont= Math.floor(Math.random()*imagenes.length);
let contcard= Math.floor(Math.random()*baraja.length);
let imag =document.querySelectorAll("img");
imag[0].src= imagenes[cont];
imag[1].src= imagenes[cont];
let numero= document.querySelector(".numer");
numero.innerHTML=baraja[contcard];

