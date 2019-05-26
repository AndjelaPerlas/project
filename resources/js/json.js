
var apartments = [
  {
    "picture": {
    	"src": "house-1.jpg",
    	"alt":"Vikendica Zlatni prag"
    },
    "info": {
      "name" : "Vikendica Zlatni prag",
      "persons" : "2-3 osobe",
      "rooms" : "Sobe: dvokrevetne/ trokrevetne",
      "price": "25 EUR/noćenje"
    },
    "description": "Vikendica nesebično nudi kompletno opremljen smeštaj sa odvojenim ulazom, za vaš ugodan i prijatan boravak u oazi netaknute prirode naše najlepše planine. Ispred apartmana nalaze se prostrane terase za vaše potpuno uživanje, obed ili kafu uz prelep pogled ka jezeru."
  },

{
    "picture": {
    	"src": "house-2.jpg",
    	"alt":"Vikendica Tarsko srce"
    },
    "info": {
      "name" : "Vikendica Tarsko srce",
      "persons" : "3-4 osobe",
      "rooms" : "Sobe: trokrevetne/ četvorokrevetne",
      "price": "35 EUR/noćenje"
    },
    "description": " Vikendica TARSKO SRCE nalazi se na Osluši, u centralnom delu planine Tare, na 1030m nadmorske visine. Udaljena je 4km od Mitrovca, gde se nalazi i najbliža prodavnica i ambulanta. Svojim komforom i udobnošću pružiće Vam sve za savršen odmor na najzdravijem delu planine Tare."
  },

{
    "picture": {
    	"src": "house-3.jpg",
    	"alt":"Hotel sa 4 zvezdice"
    },
    "info": {
      "name" : "Hotel sa 4 zvezdice",
      "persons" : "više osoba",
      "rooms" : "Sobe: dvokrevetne/četvorokrevetne",
      "price": "35 EUR/noćenje"
    },
    "description": "U samom centru parka Tara, svega nekoliko minuta hoda od glavnog šetališta, restorana i kafića. U sklopu hotela postoji i recepcija, odmah na ulazu u objekat, gde goste dočekuje naše ljubazno osoblje i po potrebi pruža sve neophodne informacije i pomoć našim dragim gostima."
  }
];

var stay =  "";
for(var i = 0; i < apartments.length; i++) {
	stay += "<div class='col span-1-of-3 box'>"
	+"<img src='resources/images/" + apartments[i].picture.src + "' alt='" + apartments[i].picture.alt + "'>"
	+ "<h3>" + apartments[i].info.name + "</h3>" 
	+ "<div class='place-feature'><i class='ion-ios-person icon-small'></i>" + apartments[i].info.persons + "</div><div class='place-feature'><i class='ion-home icon-small'></i>" + apartments[i].info.rooms + "</div><div class='place-feature'><i class='ion-pricetag icon-small'></i>" + apartments[i].info.price + "</div>" 
	+ "<div class='place-feature'><p>" + apartments[i].description + "</p></div><div class='place-feature'><a href='kontakt.html' class='btn btn-full'>Rezervišite</a></div></div>"; 


	
}

document.querySelector('.apartment').innerHTML = stay;