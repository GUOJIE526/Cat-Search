import { fetchCats } from "./api.js";
import { renderCats } from "./dom.js";

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

document.addEventListener("DOMContentLoaded", async () => {
  await loadCats(12, page, order, selectedOptions);
});