// // alert('Hi.....')
// // console.log("bbbbb");console.log(1111)
// console.log(30 + 20);

// console.log(document.getElementById("num1").value)
// console.log(document.getElementById("num2").value)

// n1 = document.getElementById("num1").value
// n2 = document.getElementById("num2").value

// alert( parseInt(n1) + parseInt(n2) )

function showDti() {
  alert("welcome to dti...");
}

let btnSum = document.getElementById("btn-sum");
let showSum = document.getElementById("show-sum");
let btnCancel = document.getElementById("btn-cancel");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

btnSum.addEventListener("click", function () {
  let sum = parseFloat(num1.value) + parseFloat(num2.value);
  showSum.innerHTML = sum;
});

btnCancel.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  showSum.innerHTML = "?????";
  document.body.style.background = "white";
});

let btnRed = document.getElementById("btn-red");
let btnGreen = document.getElementById("btn-green");
let btnYellow = document.getElementById("btn-yellow");
// let body = document.getElementsByTagName("body")

btnRed.addEventListener("click", function () {
  document.body.style.background = "red";
});

btnGreen.addEventListener("click", function () {
  document.body.style.background = "green";
});

btnYellow.addEventListener("click", function () {
  document.body.style.background = "yellow";
});
