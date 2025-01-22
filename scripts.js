//DOM Elements
const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

// Option
const showAmPm = true;

// Show current time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12-hour Format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  // Update every second
  setTimeout(showTime, 1000);

  // Add zero
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
}

// Set background and greeting
function setBG() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1454916286212-0ea211dc68d6')";
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1456066775592-f14f4ea694a4')";
    greeting.textContent = "Good afternoon, ";
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1488682371245-58436e0dc611')";
    greeting.textContent = "Good evening, ";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBG();
getName();
getFocus();
setName();
setFocus();
