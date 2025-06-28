let currentTrip = null;
let currentLeg = null;

function navigate(view) {
  document.getElementById("view").innerHTML = "";
  document.getElementById("searchBox").value = "";

  switch (view) {
    case "states":
      renderGrid(data.usStates, "states");
      break;
    case "counties":
      renderGrid(data.georgiaCounties, "counties");
      break;
    case "georgia-specialty":
      renderGrid(data.georgiaSpecialtyPlates, "georgia-specialty");
      break;
    case "florida-specialty":
      renderGrid(data.floridaSpecialtyPlates, "florida-specialty");
      break;
    case "military":
      renderGrid(data.militaryPlates, "military");
      break;
    case "territories":
      renderGrid(data.usTerritories, "territories");
      break;
    case "canada":
      renderGrid(data.canadianProvinces, "canada");
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

  items.forEach(name => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${name}</span>`;

    if (isFound(key, name)) {
      div.classList.add("found");
    }

    div.onclick = () => {
      div.classList.toggle("found");
    };

    grid.appendChild(div);
  });

  view.appendChild(grid);

  // If in a trip session, show Save Progress button
  if (currentTrip && currentLeg) {
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Progress";
    saveBtn.style.marginTop = "1rem";
    saveBtn.style.padding = "0.6rem 1rem";
    saveBtn.style.borderRadius = "8px";
    saveBtn.style.border = "none";
    saveBtn.style.backgroundColor = "#34a853";
    saveBtn.style.color = "#fff";
    saveBtn.style.cursor = "pointer";
    saveBtn.style.fontSize = "1rem";

    saveBtn.onclick = () => {
      const allMarked = [...document.querySelectorAll(".item.found")].map(item =>
        item.textContent.trim()
      );
      saveData(key, allMarked);
      alert("Progress saved for this tab.");
    };

    view.appendChild(saveBtn);
  }
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
    if (!trip[currentLeg][key]) trip[currentLeg][key] = [];
    return trip[currentLeg][key];
  } else {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }
}

function saveData(key, data) {
  if (currentTrip && currentLeg) {
    const trips = getTrips();
    const trip = trips.find(t => t.name === currentTrip);
    trip[currentLeg][key] = data;
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

// Trips functionality (already working)
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
      To: ${countPlates(t.toTrip)} plates, From: ${countPlates(t.fromTrip)} plates<br>
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
      toTrip: createEmptyTripData(),
      fromTrip: createEmptyTripData()
    };
    saveTrip(trip);
    navigate('trips');
  };

  view.appendChild(list);
  view.appendChild(form);
}

function createEmptyTripData() {
  return {
    "states": [],
    "counties": [],
    "georgia-specialty": [],
    "florida-specialty": [],
    "military": [],
    "territories": [],
    "canada": []
  };
}

function countPlates(legData) {
  if (!legData) return 0;
  return Object.values(legData).reduce((sum, list) => {
    if (Array.isArray(list)) return sum + list.length;
    return sum;
  }, 0);
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
  navigate('states');
}