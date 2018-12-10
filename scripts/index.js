const animals = [];
const list = document.getElementById("pet-list");
const LBCon = document.getElementById("light-box__container");

(async function getAnimals() {
  await fetch("../data/dogs.json")
    .then(blob => blob.json())
    .then(data => animals.push(...data.dogs));
  animals.forEach(animal => showAnimal(animal));
})();

function showAnimal(animal) {
  let li = document.createElement("li");
  let img = document.createElement("div");
  img.style.backgroundImage = `url(..${animal.image})`;
  img.classList.add("pet-container__image");
  li.classList.add("pet-container");
  li.append(img);
  li.addEventListener("click", () => lightBox(animal));
  return list.append(li);
}

function lightBox(animal) {
  let img = document.createElement("img");
  img.src = `${animal.image}`;
  img.classList.add("light-box__image");
  LBCon.append(img);
  LBCon.style.display = "initial";
}
