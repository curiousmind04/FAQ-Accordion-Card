const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const a1 = document.querySelector(".arrow1");
const a2 = document.querySelector(".arrow2");
const a3 = document.querySelector(".arrow3");
const a4 = document.querySelector(".arrow4");
const a5 = document.querySelector(".arrow5");

button1.addEventListener("click", function () {
  if (q1.classList.contains("open")) {
    q1.classList.remove("open");
    button1.style.fontWeight = "400";
    a1.style.transform = "none";
  } else {
    q1.classList.add("open");
    button1.style.fontWeight = "700";
    q2.classList.remove("open");
    button2.style.fontWeight = "400";
    q3.classList.remove("open");
    button3.style.fontWeight = "400";
    q4.classList.remove("open");
    button4.style.fontWeight = "400";
    q5.classList.remove("open");
    button5.style.fontWeight = "400";
    a1.style.transform = "rotate(180deg)";
    a2.style.transform = "none";
    a3.style.transform = "none";
    a4.style.transform = "none";
    a5.style.transform = "none";
  }
});
button2.addEventListener("click", function () {
  if (q2.classList.contains("open")) {
    q2.classList.remove("open");
    button2.style.fontWeight = "400";
    a2.style.transform = "none";
  } else {
    q2.classList.add("open");
    button2.style.fontWeight = "700";
    q1.classList.remove("open");
    button1.style.fontWeight = "400";
    q3.classList.remove("open");
    button3.style.fontWeight = "400";
    q4.classList.remove("open");
    button4.style.fontWeight = "400";
    q5.classList.remove("open");
    button5.style.fontWeight = "400";
    a2.style.transform = "rotate(180deg)";
    a1.style.transform = "none";
    a3.style.transform = "none";
    a4.style.transform = "none";
    a5.style.transform = "none";
  }
});
button3.addEventListener("click", function () {
  if (q3.classList.contains("open")) {
    q3.classList.remove("open");
    button3.style.fontWeight = "400";
    a3.style.transform = "none";
  } else {
    q3.classList.add("open");
    button3.style.fontWeight = "700";
    q2.classList.remove("open");
    button2.style.fontWeight = "400";
    q1.classList.remove("open");
    button1.style.fontWeight = "400";
    q4.classList.remove("open");
    button4.style.fontWeight = "400";
    q5.classList.remove("open");
    button5.style.fontWeight = "400";
    a3.style.transform = "rotate(180deg)";
    a2.style.transform = "none";
    a1.style.transform = "none";
    a4.style.transform = "none";
    a5.style.transform = "none";
  }
});
button4.addEventListener("click", function () {
  if (q4.classList.contains("open")) {
    q4.classList.remove("open");
    button4.style.fontWeight = "400";
    a4.style.transform = "none";
  } else {
    q4.classList.add("open");
    button4.style.fontWeight = "700";
    q2.classList.remove("open");
    button2.style.fontWeight = "400";
    q3.classList.remove("open");
    button3.style.fontWeight = "400";
    q1.classList.remove("open");
    button1.style.fontWeight = "400";
    q5.classList.remove("open");
    button5.style.fontWeight = "400";
    a4.style.transform = "rotate(180deg)";
    a2.style.transform = "none";
    a3.style.transform = "none";
    a1.style.transform = "none";
    a5.style.transform = "none";
  }
});
button5.addEventListener("click", function () {
  if (q5.classList.contains("open")) {
    q5.classList.remove("open");
    button5.style.fontWeight = "400";
    a5.style.transform = "none";
  } else {
    q5.classList.add("open");
    button5.style.fontWeight = "700";
    q2.classList.remove("open");
    button2.style.fontWeight = "400";
    q3.classList.remove("open");
    button3.style.fontWeight = "400";
    q4.classList.remove("open");
    button4.style.fontWeight = "400";
    q1.classList.remove("open");
    button1.style.fontWeight = "400";
    a5.style.transform = "rotate(180deg)";
    a2.style.transform = "none";
    a3.style.transform = "none";
    a4.style.transform = "none";
    a1.style.transform = "none";
  }
});

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     if (q.classList.contains("open")) {
//       q.classList.remove("open");
//     } else {
//       q.classList.add("open");
//     }
//   });
// });
