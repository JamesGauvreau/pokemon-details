const pokemonCatch = async() => {
    try {
    const dog = await fetch('https:pokeapi.co/api/v2/pokemon');
    const pokemonData = await dog.json()
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
        
        const pokemonUl = document.querySelector(`ul`);
        const pokemonLi = document.createElement(`li`); 

        pokemonLi.innerHTML = a1[6].height;
        pokemonUl.appendChild(pokemonLi);

        return `<li>${array.name}</li>`
    }).join('');    // This removes the commas. 

    document.querySelector(`ul`).innerHTML = `${listName}`; // This defines each <li>

    const button = document.querySelector(`li`);
    const callButton = () => {
        console.log(`button confirmed`);
    }
    
    button.addEventListener(`click`, callButton);
    
}


const pokemonShowMulti = async () => {
    await pokemonRenderAll();
}

pokemonShowMulti()