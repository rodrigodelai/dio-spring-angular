let offset = 0;
let page = 0;

handleButtonClick();

function handleOpeningClick() {
    const openingImg = document.querySelector("body > div");
    const body = document.querySelector("body");

    openingImg.style = "opacity: 0; pointerEvents: none; z-index: -10; height: 60%";
    body.style = "transform: scale(1)";

    setTimeout(() => {
        openingImg.style = "display: none;";
    }, 500);
}

function handleBackToOpening() {
    // Collapses menu
    if (isMenuClicked()) handleMenuClick();

    const openingImg = document.querySelector("body > div");
    const body = document.querySelector("body");

    openingImg.style = "height: 50%; display: block; opacity: 0; pointerEvents: all; z-index: 10;";
    body.style = "transform: scale(.1);";

    setTimeout(() => {
        openingImg.style = "opacity: 1";
    }, 200);
}

function isMenuClicked() {
    return document.querySelector("header nav").clicked;
}

function handleMenuClick() {
    const nav = document.querySelector("header nav");

    if (nav.clicked) {
        nav.style = "opacity: 0";

        setTimeout(() => {
            nav.classList.add("none")
        }, 500);
    }
    else {
        nav.classList.remove("none");
        
        setTimeout(() => {
            nav.style = "opacity: 1";
        }, 100);
    }
        
    nav.clicked = !nav.clicked;
}

function closeAll() {
    const sections = document.querySelectorAll("main > section");
    sections.forEach(section => {
        section.style = "opacity: 0";

        setTimeout(() => {
            section.classList.add("none");
        }, 300);
    });
}

function handleHomeClick() {
    closeAll();

    setTimeout(() => {
        const home = document.querySelector(".home");
        home.classList.remove("none");
        home.style = "opacity: 1";
    }, 400);

    handleMenuClick();

    page = 0;
}

function handleFavoritesClick() {
    closeAll();

    setTimeout(() => {
        const favorites = document.querySelector(".favorites");
        favorites.classList.remove("none");
        favorites.style = "opacity: 1";
    }, 400);

    LoadFavorites();
    handleMenuClick();

    page = 1;
}

function handleCardClick() {
    // Collapses menu
    if (isMenuClicked()) handleMenuClick();

    // Loads presentation info
    const id = event.target.classList[0].substr(1);
    const name = event.target.childNodes[3].innerText;

    document.querySelectorAll("dialog")[page].id = id;
    document.querySelectorAll(".presentation h2")[page].innerText = name;
    document.querySelectorAll(".presentation h2 + span")[page].innerText = `#${id.padStart("3", 0)}`;

    const newImg = pokeApi.getImgUrl(id)
    const img = document.querySelectorAll(".presentation img")[page];

    img.src = newImg;
    img.alt = name;

    const circle = document.querySelectorAll(".circle")[page];
    const oldMainType = circle.classList[1];
    const items = document.querySelectorAll(`.p${id} li`);
    const newMainType = items[items.length - 1].classList[0];
    
    circle.classList.replace(oldMainType, newMainType);

    // Loads heart image
    const marked = window.localStorage.getItem(id);
    const heart = document.querySelectorAll(".heart")[page];
    
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
        let newHtmlAbout = convertPokemonToHtmlTableAbout(pokemon);
        document.querySelectorAll(".about")[page].innerHTML = newHtmlAbout;

        let newHtmlStats = convertPokemonToHtmlTableStats(pokemon);
        document.querySelectorAll(".stats")[page].innerHTML = newHtmlStats;
    });
    
    // Shows modal
    const modal = document.querySelectorAll("dialog")[page];
    modal.showModal();

    // Scroll to first details card
    const cardList = document.querySelectorAll(".details ol")[page]; 
    cardList.scrollBy(-3 * cardList.childNodes[1].offsetWidth, 0);
}

function closeModal() {
    document.querySelectorAll("dialog")[page].close();
}

function handleHeartClick() {
    const img = document.querySelectorAll(".heart")[page];
    const id = document.querySelectorAll("dialog")[page].id;

    if (!img.clicked) {
        img.src = "./img/dark-heart.png";
        window.localStorage.setItem(id, "1");
    }
    else {
        img.src = "./img/heart.png";
        window.localStorage.removeItem(id);
    }

    img.clicked = !img.clicked;

    if (page) {
        const items = document.querySelectorAll(".p" + id);
        const item = items[items.length - 1];
        item.classList.add("none");
    }
}

function handleArrowClick() {
    const cardList = document.querySelectorAll(".details ol")[page]; 
    let scroll = cardList.childNodes[1].offsetWidth;

    if (event.target.childNodes[0] && event.target.childNodes[0].alt == "Left arrow")
        scroll *= -1; 
   
    if (event.target.alt == "Left arrow")
        scroll *= -1;
        
    cardList.scrollBy(scroll, 0);
}

function handleButtonClick() {
    pokeApi.getPokemonList(offset).then(pokemonList => {
        let newHtml = "";
        pokemonList.forEach(pokemon => { newHtml += convertPokemonToHtmlCard(pokemon) });
        document.querySelector(".home .cards").insertAdjacentHTML("beforeend", newHtml);
    });
    
    offset += 12;

    if (offset >= 900)
        document.querySelector("main button").classList.add("disable");
}

function convertPokemonToHtmlCard(pokemon) {
    return `
        <li class="p${pokemon.id} card ${pokemon.mainType}" onclick="handleCardClick()">
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

function LoadFavorites() {
    document.querySelector(".favorites .cards").innerHTML = "";

    const storage = window.localStorage;
    const ids = Object.keys(storage).map(str => Number(str)).sort((a,b) => a - b);
    
    ids.forEach(id => pokeApi.getPokemon(id).then((pokemon) => {
        const newHtml = convertPokemonToHtmlCard(pokemon);
        document.querySelector(".favorites .cards").insertAdjacentHTML("beforeend", newHtml);
    }));
}