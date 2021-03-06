const animals = [];
const list = document.getElementById("pet-list");
const LBCon = document.getElementById("light-box__container");
const LBImg = document.getElementById("light-box__image");

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
  img.addEventListener("click", () => lightBox(animal));
  return list.append(li);
}

function lightBox(animal) {
  LBImg.src = `${animal.image}`;
  return LBCon.classList.remove("close");
}

function exitLightbox() {
  return LBCon.classList.add("close");
}

LBCon.addEventListener("click", () => exitLightbox());
