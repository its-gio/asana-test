// import * as data from "../data/dogs.json";
const animals = [];
const list = document.getElementById("pet-list");

(async function getAnimals() {
  await fetch("../data/dogs.json")
    .then(blob => blob.json())
    .then(data => animals.push(...data.dogs));
  animals.forEach((animal, i) => showAnimal(animal, i));
})();

function showAnimal(animal, i) {
  //   console.log(animal.image, i);
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", `..${animal.image}`);
  img.classList.add("pet-image");
  li.append(img);
  list.appendChild(li);
}
