
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => {
        return `<li>${typeSlot.type.name}</li>`
    })
}

function convertPokemonToLi(pokemon){
    return `<li class="list-pokemons-item">
                <div class="topo-card">
                    <span class="num-card">#${pokemon.order}</span>
                    <h3 class="nome-pokemon">${pokemon.name}</h3>
                </div>
                <div class="detalhes">
                    <ul class="tipos">
                        ${convertPokemonTypesToLi(pokemon.types).join("")}
                    </ul>
                    <div class="img">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                    </div>
                </div>
            </li>`
}

const pokemonList = document.querySelector('.list-pokemons');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");
})
