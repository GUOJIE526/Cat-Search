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

export function createTempItem(temperament) {
  const tempItem = document.createElement("span");
  tempItem.className = "drawer_personality_tags_tag";
  tempItem.innerHTML = temperament;
  return tempItem;
}

export function createDrawerStatsItem(displayName, score) {
  const statsItem = document.createElement("div");
  statsItem.className = "drawer_stats_item";
  const itemTitle = document.createElement("span");
  itemTitle.className = "drawer_stats_item_title";
  itemTitle.innerHTML = `${displayName}：`;
  const bar = document.createElement("div");
  bar.className = "drawer_stats_item_bar";
  const fill = document.createElement("div");
  fill.className = "drawer_stats_item_bar_fill";
  fill.style.width = `${score * 20}%`;
  bar.appendChild(fill);
  statsItem.appendChild(itemTitle);
  statsItem.appendChild(bar);

  return statsItem;
}
