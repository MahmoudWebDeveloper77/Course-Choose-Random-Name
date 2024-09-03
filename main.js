let names = [];

function addName() {
  const name = document.getElementById("nameInput").value.trim();

  if (name != "") {
    names.push(name);
    document.getElementById("nameInput").value = "";
  }
}

// Function to select a random name from the array
function selectRandomName() {
  if (names.length === 1) {
    document.getElementById("selectedName").textContent =
      "Pls Add More Things.";
  } else {
    const randomIndex = Math.floor(Math.random() * names.length);
    names[randomIndex];
    document.getElementById("selectedName").textContent = "The Choosen IS " + names[randomIndex];
  }
}
