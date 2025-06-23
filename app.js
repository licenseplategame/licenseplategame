let currentTrip = null;
let currentLeg = null;

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
  let data = loadData(key);
  const index = data.indexOf(name);

  if (index > -1) data.splice(index, 1);
  else data.push(name);

  saveData(key, data);
}

function loadData(key) {
  if (currentTrip && currentLeg) {
    const trips = getTrips();
    const trip = trips.find(t => t.name === currentTrip);
    return trip[currentLeg] || [];
  } else {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
}

function saveData(key, data) {
  if (currentTrip && currentLeg) {
    const trips = getTrips();
    const trip = trips.find(t => t.name === currentTrip);
    trip[currentLeg] = data;
    localStorage.setItem("trips", JSON.stringify(trips));
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
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

// TRIPS FEATURE BELOW

function renderTripsView() {
  currentTrip = null;
  currentLeg = null;
  const view = document.getElementById("view");
  const trips = getTrips();

  const list = document.createElement("ul");
  trips.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${t.name}</strong> (${t.startDate} → ${t.endDate})<br>
      To: ${t.toTrip.length} plates, From: ${t.fromTrip.length} plates<br>
      <button onclick="setTrip('${t.name}', 'toTrip')">Track To</button>
      <button onclick="setTrip('${t.name}', 'fromTrip')">Track From</button>
    `;
    list.appendChild(li);
  });

  const form = document.createElement("form");
  form.innerHTML = `
    <h3>Add Trip</h3>
    <input name="name" placeholder="Trip Name" required/><br>
    <input name="startDate" type="date" required/>
    <input name="endDate" type="date" required/><br>
    <button type="submit">Add Trip</button>
  `;
  form.onsubmit = e => {
    e.preventDefault();
    const trip = {
      name: form.name.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      toTrip: [],
      fromTrip: []
    };
    saveTrip(trip);
    navigate('trips');
  };

  view.appendChild(list);
  view.appendChild(form);
}

function getTrips() {
  return JSON.parse(localStorage.getItem("trips") || "[]");
}

function saveTrip(trip) {
  const trips = getTrips();
  trips.push(trip);
  localStorage.setItem("trips", JSON.stringify(trips));
}

function setTrip(name, leg) {
  currentTrip = name;
  currentLeg = leg;
  alert(`Now tracking: ${name} (${leg === 'toTrip' ? 'To Destination' : 'From Destination'})`);
  navigate('states');  // default view, adjust if needed
}
