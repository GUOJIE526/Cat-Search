import { fetchCats, fetchBreeds } from "./api.js";
import {
  renderCats,
  addCloseDropDownListener,
  addDropDownListener,
  renderOptions,
  clearImages,
} from "./dom.js";

const pageSize = 12;
let order = "DESC";
let page = 1;
let selectedOptions = [];
const catList = [];

async function loadCats(limit, page, order, breedIds = []) {
  //從api抓貓的資料
  const list = await fetchCats(limit, page, order, breedIds);
  catList.push(...list);

  renderCats(list);
}

function handleBreedOptionChange(e) {
  const changeOption = e.target;
  if (changeOption.checked) {
    selectedOptions.push(changeOption.value);
  } else {
    selectedOptions = selectedOptions.filter(
      (item) => item !== changeOption.value
    );
  }
  clearImages();
  loadCats(pageSize, page, order, selectedOptions);
}

async function loadBreedOptions() {
  const breeds = await fetchBreeds();
  renderOptions(breeds, handleBreedOptionChange);
}

function addListeners() {
  addDropDownListener();
  addCloseDropDownListener();
}

document.addEventListener("DOMContentLoaded", async () => {
  loadBreedOptions();
  await loadCats(12, page, order, selectedOptions);

  addListeners();
});
