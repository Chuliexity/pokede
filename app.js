const pokemonGrid = document.querySelector("#cardsGrid")

const requestURL = "./pokemon.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const pokemon = request.response;

  for (let i = 0; i <= 8; i++) {
      const card = document.createElement("div");
      card.classList.add("card");

      const pokemonInfo = document.createElement("div");
      pokemonInfo.classList.add("pokemonInfo");

      const pokemonName = document.createElement("p");
      pokemonName.classList.add("pokemonName");
      pokemonName.innerHTML = `Name:<br>${pokemon[i].name}`;

      const pokemonNumber = document.createElement("p");
      pokemonNumber.classList.add("pokemonNumber");
      pokemonNumber.textContent = `#${pokemon[i].id}`;

      const pokemonType = document.createElement("p");
      pokemonType.classList.add("pokemonType");
      pokemonType.innerHTML = `Type:<br>${pokemon[i].type}`;

      const pokemonImg = document.createElement("img");
      pokemonImg.classList.add("pokemonImg");
      pokemonImg.src = pokemon[i].image;
      card.appendChild(pokemonInfo);
      card.appendChild(pokemonImg);
      pokemonInfo.appendChild(pokemonName);
      pokemonInfo.appendChild(pokemonNumber);
      pokemonInfo.appendChild(pokemonType);
      pokemonGrid.appendChild(card);
  }
};
