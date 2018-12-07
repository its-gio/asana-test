// import * as data from "../data/dogs.json";
const animals = [];
const list = document.getElementById("pet-list");

(async function getAnimals() {
  await fetch("../data/dogs.json")
    .then(blob => blob.json())
    .then(data => animals.push(...data.dogs));
  animals.forEach(animal => showAnimal(animal));
})();

function showAnimal(animal) {
  console.log(animal);
  //   let li = document.createElement("li");
  //   let img = document.createElement("img");
  //   list.appendChild(li);
}
