let offset = 0;

handleButtonClick();

function handleButtonClick() {
    pokeApi.getPokemonList(offset).then(pokemonList => {
        let newHtml = "";
        pokemonList.forEach(pokemon => { newHtml += convertPokemonToHtmlCard(pokemon) });
        document.querySelector(".cards").insertAdjacentHTML("beforeend", newHtml);
    });
    
    offset += 12;

    if (offset >= 900)
        document.querySelector("main button").classList.add("disable");
}

function convertPokemonToHtmlCard(pokemon) {
    return `
        <li class="card ${pokemon.mainType}">
            <span class="id">#${pokemon.id.padStart(3,'0')}</span>
            <h2>${pokemon.name}</h2>
            <ol class="types">
                ${convertTypeListToHtmlListItems(pokemon.types)}
            </ol>
            <img src="${pokemon.imgUrl}" alt="${pokemon.name}">
        </li>`
}

function convertTypeListToHtmlListItems(typeList) {
    return typeList.map(type => `<li class="${typeList[0]}">${type}</li>\n`).join("");
}