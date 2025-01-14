const pokemonList = document.querySelector('.list-pokemons');
const loadMoreButton = document.querySelector('#loadMoreButton');
const btnVoltar = document.querySelector('#btn-voltar');
const pokemonCardInfo = document.querySelector('secao-pokemon-info');
const limit = 6;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
            `<li class="list-pokemons-item ${pokemon.type}">
                    <div class="top-card">
                        <span class="num-card">#${pokemon.number}</span>
                        <h3 class="name-pokemon">${pokemon.name}</h3>
                    </div>
                    <div class="details">
                        <ul class="type">
                            ${pokemon.types.map((type) => `<li>${type}</li>`).join("")}
                        </ul>
                        <div class="container-img">
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                    </div>
                </li>`
            ).join("");

        pokemonList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})

btnVoltar.addEventListener('click', () => {
    const secaoPokedex = document.querySelector('.secao-pokedex');
    const secaoPokemonInfo = document.querySelector('.secao-pokemon-info');
    
    secaoPokedex.style.display = 'block';
    secaoPokemonInfo.style.display = 'none';
})