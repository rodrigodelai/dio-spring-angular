let offset = 0;

handleButtonClick();

function handleOpeningClick() {
    const openingImg = document.querySelector("body > div");
    const body = document.querySelector("body");

    openingImg.style = "opacity: 0; pointerEvents: none; z-index: -10;";
    body.style = "transform: scale(1)";
}

function handleBackToOpening() {
    const openingImg = document.querySelector("body > div");
    const body = document.querySelector("body");

    openingImg.style = "opacity: 1; pointerEvents: all; z-index: 10;";
    body.style = "transform: scale(.1);";
}

function handleCardClick() {
    // Loads presentation info
    const id = event.target.id.substr(1);
    const name = event.target.childNodes[3].innerText;

    document.querySelector("dialog").id = id;
    document.querySelector(".presentation h2").innerText = name;
    document.querySelector(".presentation h2 + span").innerText = `#${id.padStart("3", 0)}`;

    const newImg = pokeApi.getImgUrl(id)
    const img = document.querySelector(".presentation img");

    img.src = newImg;
    img.alt = name;

    const circle = document.querySelector(".circle");
    const oldMainType = circle.classList[1];
    const newMainType = document.querySelector(`#p${id} li`).classList[0];
    
    circle.classList.replace(oldMainType, newMainType);

    // Loads heart image
    const marked = window.localStorage.getItem(id);
    const heart = document.querySelector("#heart");
    
    if (marked) {
        heart.src = "./img/dark-heart.png";
        heart.clicked = true;
    }
    else {
        heart.src = "./img/heart.png";
        heart.clicked = false;
    }

    // Loads details info
    pokeApi.getPokemon(id).then(pokemon => {
        let newHtmlStats = convertPokemonToHtmlTableStats(pokemon);
        document.querySelector("#stats").innerHTML = newHtmlStats;
        
        let newHtmlAbout = convertPokemonToHtmlTableAbout(pokemon);
        document.querySelector("#about").innerHTML = newHtmlAbout;
    });
    
    // Shows modal
    const modal = document.querySelector("dialog");
    modal.showModal();
}

function closeModal() {
    document.querySelector("dialog").close();
}

function handleHeartClick() {
    const img = document.querySelector("#heart");
    const id = document.querySelector("dialog").id;

    if (!img.clicked) {
        img.src = "./img/dark-heart.png";
        window.localStorage.setItem(id, "1");
    }
    else {
        img.src = "./img/heart.png";
        window.localStorage.removeItem(id);
    }

    img.clicked = !img.clicked;
}

function handleArrowClick() {
    let scroll = document.querySelector(".details li").offsetWidth; 
    if (event.target.alt == "Left arrow") scroll *= -1;
    document.querySelector(".details ol").scrollBy(scroll, 0);
}

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
        <li id="p${pokemon.id}" class="card ${pokemon.mainType}" onclick="handleCardClick()">
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

function convertPokemonToHtmlTableAbout(pokemon) {
    return `
        <tbody>
            <tr>
                <td>Height</td>
                <td>${pokemon.height} m</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>${pokemon.weight} kg</td>
            </tr>
            <tr>
                <td>Abilities</td>
                <td>${pokemon.abilities.join(", ")}</td>
            </tr>
        <tbody>`
}

function convertPokemonToHtmlTableStats(pokemon) {
    return `
        <tbody>
            <tr>
                <td>HP</td>
                <td>${pokemon.stats.hp}</td>
            </tr>
            <tr>
                <td>Attack</td>
                <td>${pokemon.stats.attack}</td>
            </tr>
            <tr>
                <td>Defense</td>
                <td>${pokemon.stats.defense}</td>
            </tr>
            <tr>
                <td>Sp. Attack</td>
                <td>${pokemon.stats.specialAttack}</td>
            </tr>
            <tr>
                <td>Sp. Defense</td>
                <td>${pokemon.stats.specialDefense}</td>
            </tr>
            <tr>
                <td>Speed</td>
                <td>${pokemon.stats.speed}</td>
            </tr>
        </tbody>`
}