

//nav links 
// const navLinks = document.querySelectorAll("nav a");

// function navLinksHover(event) {
//   event.target.style.color = "black";
//   event.target.style.fontSize = "2.5rem";
//   event.target.style.fontWeight = "bold";
// }

// function navLinksNoHover(event) {
//   event.target.style.color = "black";
//   event.target.style.fontSize = "1.6rem";
//   event.target.style.fontWeight = "normal";
// }


//mouseover & mouseleave on bus image(greensock)
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', (e) => {
  TweenMax.to(e.target, 1, {
    scale: 1.1,
    filter: 'none',
    ease: Elastic.easeOut.config(1, 0.75)
  })
})
busImg.addEventListener('mouseleave', (e) => {
  TweenMax.to(e.target, 0.5, {
    scale: 1,
    filter: 'none',
    ease: Power1.easeIn
  })
})


//doubleclick X2
const adventureImg = document.querySelector('.home .inverse-content .img-content');
adventureImg.addEventListener('dblclick', (e) => {
  event.target.style.display = 'none';
});

const letsGoImg = document.querySelector('.home .content-section .img-content img');
letsGoImg.addEventListener('dblclick', (e) => {
  event.target.style.display = 'none';
});

//wheel
let funbustext = document.querySelector('.logo-heading');
funbustext.addEventListener('wheel', (event) => {
  event.target.style.color = 'yellow';
});

//resize
window.addEventListener("resize", function (event) {
  alert("This page is best viewed at full size");
});

//load
window.addEventListener("load", function (event) {
  console.log("Please don't mess around in the console!");
});

//drag
let pickYourImg = document.querySelector(".content-destination img");
pickYourImg.addEventListener("drag", (event) => {
  event.target.style.display = 'none';
});

//more mouseover
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow"
  event.target.style.boxShadow = '10px 5px 5px red'
});
buttons[0].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "yellow"
  event.target.style.color = "black"
  event.target.style.boxShadow = 'none'
});

buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow"
  event.target.style.boxShadow = '10px 5px 5px red'
});
buttons[1].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "black"
  event.target.style.boxShadow = 'none'
});
buttons[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow";
  event.target.style.boxShadow = '10px 5px 5px red'
});
buttons[2].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "black"
  event.target.style.boxShadow = 'none'
});

//Stop the navigation items from refreshing the page
const nav = document.querySelector('.nav-container');
nav.addEventListener('click', (event) => { event.preventDefault() });

