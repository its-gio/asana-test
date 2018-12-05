const animals = [];
fetch("../data/dogs.json")
  .then(blob => blob.json())
  .then(data => animals.push(...data.dogs));

const list = document.getElementById("pet-list");
