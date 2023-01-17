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
  let id = 1;
  data.results.forEach((character) => {
    main.append(addCharacter(character, characterContainer, id));
    id++;
    main.append(addLocation(character, locationContainer));
  });
  
  addEventListenerToSection();

  document.body.append(main);
}

function addEventListenerToSection() {
  let listOfSections = document.getElementsByTagName("section");

  listOfSections.forEach(section => {
    section.addEventListener("click", (id => {
      
    }));
  })
}

function addCharacter(character, characterContainer, id) {
    characterContainer.innerHTML += `<section id=${id}>${character.name} </section>` + `<br>`;

    return characterContainer; 
  }

function addLocation(character, locationContainer) {
  locationContainer.innerHTML += `${character.location.name}` + `<br>`;
  return locationContainer;
}

function createButton(buttonName) {
  const button = document.createElement("button");
  button.textContent = buttonName;
  return button;
}

main();
