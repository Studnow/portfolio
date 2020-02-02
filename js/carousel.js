'use strict'

let rectCounter = 0;
getStyleRect();

function getStyleRect() {
  let rect = document.getElementsByClassName("rectangle");
  let slides = document.getElementsByClassName("my-slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  rectCounter++;
  if (rectCounter > slides.length) {
    rectCounter = 1;
  } for (let i = 0; i < rect.length; i++) {
    rect[i].className = rect[i].className.replace(" active", "");
  }
  slides[rectCounter - 1].style.display = "flex";
  rect[rectCounter - 1].className += " active";
  setTimeout(getStyleRect, 2500);
}

function bar() {

  let h = document.getElementsByClassName('menu');
  for (let i = 0; i < h.length; i++) {
    if (h[i].style.display === 'grid') {
      h[i].style.display = 'none';
    } else {h[i].style.display = 'grid';
  }
  }
}

/*let w = window.innerWidth;

function showMenu() {
  
  let menu = document.getElementsByClassName('menu');
  let nav = document.getElementsByClassName('nav')

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].style.display === 'none' && w > 425) {
      menu[i].style.display = 'flex';
    } 
  }
}*/
