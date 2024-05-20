export function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  //create img
  const img = document.createElement("img");
  img.src = item.url;
  img.className = "card_img";
  //create breeds text
  const breeds = document.createElement("p");
  breeds.innerHTML = item.breeds.map((breed) => breed.name).join(", ");

  card.appendChild(img);
  card.appendChild(breeds);
  return card;
}

export function createBreedOption(breed, handleBreedOptionChange) {
  const option = document.createElement("div");
  option.classList.add("multi-select-dropdown_options_option");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = breed.id;
  checkbox.addEventListener("change", handleBreedOptionChange);

  const label = document.createElement("label");
  label.classList.add("multi-select-dropdown_label");
  label.innerHTML = breed.name;

  const br = document.createElement("br");
  option.appendChild(checkbox);
  option.appendChild(label);
  option.appendChild(br);
  return option;
}
