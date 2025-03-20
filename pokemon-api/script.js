// Colocamos el título en el HTML:
const div = document.getElementById("root");

const h1 = "<h1>Mi PokéDex</h1>";
div.innerHTML += h1; // le pasamos el string con etiquetas al div

const container = document.createElement("div");
container.classList.add("container");
div.appendChild(container);

// Función para actualizar card de pokemon:
function actualizarCard(pokemonObj) {
    // Usar estos datos para actualizar la página:
    const card = document.createElement("div");
    // Añadimos una clase para darle estilos a los cards:
    card.classList.add("pokemon-card");
    // pokemons - id, name, url
    const h2 = document.createElement("h2");
    h2.innerText = "#" + pokemonObj.id + " " + pokemonObj.name; 
    card.appendChild(h2)
    // Creamos dinámicamente los elementos y lo añadimos al container:
    
        // Añadimos imagen en el card:
        const img = document.createElement("img");
        // img.src = "https://placehold.co/300x300?text=" + "Aquí va " + pokemonObj.name;
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonObj.id + ".png"
        card.appendChild(img);

    container.appendChild(card);
}



// Guardo la url del API como variable:
let url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
// Variable para guardar los pokemons (lista de todos):
let pokemons = [];
// Hacemos el fetch para pedir los datos:
fetch(url)
    .then(response => response.json())
    .then(data => {
        pokemons = data.results
        // Ejemplo para sacar el primero:
        const primerPkmn = pokemons[0];
        //console.log(primerPkmn)
        for (let i = 0; i < 10; i++) {
            console.log(i)
            console.log(pokemons[i])
            // Creamos una fn para actualizar los datos en un card que es un div para cada pokemon:
            actualizarCard(pokemons[i]);
        }
    });


