const form = document.querySelector("form");
const userName = document.getElementById("userName");

const p = document.querySelector("#cronologia p");
const h5 = document.querySelector("#cronologia h5");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("userName", userName.value);

  //   salva il dato in local storage
  const userValue = localStorage.getItem("userName");
  console.log(userValue);

  p.innerText = userValue;

  addH5();

  form.reset();
});

const remove = document.getElementById("remove");
const cronologia = document.getElementById("cronologia");

remove.addEventListener("click", (e) => {
  if (userName) {
    p.innerText = "";
    localStorage.removeItem("userName");
    addH5();
  }
});

function addH5() {
  if (p.innerText) {
    h5.innerText = "Ultimo UserName Salvato in Local Storage";
  } else {
    h5.innerText = "";
  }
}

const seconds = document.getElementById("seconds");
const minuts = document.getElementById("minuts");

let time = sessionStorage.getItem("time") ? parseInt(sessionStorage.getItem("time")) : 0;
let timeMinut = sessionStorage.getItem("timeMinut") ? parseInt(sessionStorage.getItem("timeMinut")) : 0;

// function go() {
//   time++;
//   sessionStorage.setItem("time", time);
//   seconds.innerText = time;
// }

function go() {
  if (time < 60) {
    time++;
    sessionStorage.setItem("time", time);
    seconds.innerText = time;
  } else {
    time = 0;
    sessionStorage.setItem("time", time);
    timeMinut++;
    sessionStorage.setItem("timeMinut", timeMinut);
    minuts.innerText = timeMinut;
  }
}

// function go() {
//   if (seconds.innerText < 60) {
//     seconds.innerText++;
//     sessionStorage.setItem("seconds", seconds.innerText);
//   } else {
//     seconds.innerText = 0;
//     minuts.innerText++;
//     sessionStorage.setItem("seconds", minuts.innerText);
//   }
// }

setInterval(go, 1000);
