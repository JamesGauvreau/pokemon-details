const pokemonCatch = async() => {
    try {
    const pokemonDog = await fetch('https:pokeapi.co/api/v2/pokemon');
    const pokemonData = await pokemonDog.json()
    const pokemonTotal = pokemonData.results;
    return pokemonTotal;
    }
    catch (error) {
        const message = `you pokemessed up`
        console.log(message)
    }
}

const pokemonRenderAll = async () => {
    const listPoke = await pokemonCatch();
    const listData = await listPoke;
  
    const listName = listData.map((array) => {
        const a1 = array.url.split(`/`);
        const a2 = a1[6];
        return `<a href=" data-link-num="${a2}"><li>${array.name}</li></a>`
    }).join('');
    document.querySelector(`ul`).innerHTML = `${listName}`;
}

const pokemonDetailsDisplay = async () => {
    const selectLink = document.querySelectorAll('a')
    console.log(selectLink)
};

const init = async () => {
    await pokemonRenderAll();
    await pokemonDetailsDisplay();
}

init()
