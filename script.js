async function main() {
  const data = await createDataObject();
  createHtmlElements(data);
}

async function createDataObject() {
  const url = "https://rickandmortyapi.com/api/character";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

function createHtmlElements(data) {
  const main = document.createElement("div");
  main.classList.add("main");

  main.append(createButton("home"));
  const characterContainer = document.createElement("div");
  characterContainer.classList.add("character-list");
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location-list");
  data.results.forEach((character) => {
    main.append(addCharacter(character, characterContainer));
    main.append(addLocation(character, locationContainer));
  });

  document.body.append(main);
}

function addLocation(character, locationContainer) {
  locationContainer.innerHTML += `${character.location.name}` + `<br>`;
  return locationContainer;
}

function addCharacter(character, characterContainer) {
  characterContainer.innerHTML += `${character.name}` + `<br>`;
  return characterContainer;
}

function createButton(buttonName) {
  const button = document.createElement("button");
  button.textContent = buttonName;
  return button;
}

main();
