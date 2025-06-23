function navigate(view) {
  document.getElementById("view").innerHTML = "";
  document.getElementById("searchBox").value = "";

  switch (view) {
    case "states":
      renderGrid(states, "states");
      break;
    case "counties":
      renderGrid(gaCounties.map(name => ({ name })), "counties");
      break;
    case "specialty":
      renderGrid(specialtyPlates, "specialty");
      break;
    case "trips":
      renderTripsView();
      break;
  }
}

function renderGrid(items, key) {
  const view = document.getElementById("view");
  view.dataset.currentView = key;

  const grid = document.createElement("div");
  grid.className = "grid";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      ${item.img ? `<img src="${item.img}" alt="${item.name}" />` : ""}
      <span>${item.name}</span>
    `;
    if (isFound(key, item.name)) div.classList.add("found");

    div.onclick = () => {
      toggleItem(key, item.name);
      div.classList.toggle("found");
    };

    grid.appendChild(div);
  });

  view.appendChild(grid);
}

function toggleItem(key, name) {
  const data = loadData(key);
  const index = data.indexOf(name);
  if (index > -1) data.splice(index, 1);
  else data.push(name);
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function isFound(key, name) {
  return loadData(key).includes(name);
}

function filterItems() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
}

// Trips logic can be similarly extended here.
