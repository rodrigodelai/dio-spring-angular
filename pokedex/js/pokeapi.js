const pokeApi = {};

pokeApi.getPokemonList = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url) 
        .then(response => response.json())
        .then(responseBody => responseBody.results)
        .then(pokemonSimpleList => pokemonSimpleList.map(pokeApi.getPokemonDetails))
        .then(listOfPromisses => Promise.all(listOfPromisses))
        .then(pokemonDetailedList => pokemonDetailedList.map(convertPokemonDetailsToPokemon))
        .catch(error => console.error(error));
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then(response => response.json());
}

function convertPokemonDetailsToPokemon(pokemonDetails) {
    const pokemon = new Pokemon();
    pokemon.id = String(pokemonDetails.id);
    pokemon.name = pokemonDetails.name;
    pokemon.types = pokemonDetails.types.map(typeSlot => typeSlot.type.name);
    pokemon.mainType = pokemon.types[0];
    pokemon.imgUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.id.padStart(3,'0')}.png`;
    return pokemon;
}
