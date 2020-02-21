import html from './popup.html';
import './popup.css';

let elements = [];
let body;

export function showPopup() {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement('div');
  temporary.innerHTML = html;

  // append elements to body
  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    temporary.children[0].addEventListener('click', stopClose)
    body.appendChild(temporary.children[0]);
  }
}

export function stopClose(e) {
  e.stopPropagation();
  return;
}

export function closePopup() {
  while (elements.length > 0) {
    elements.pop().remove();
  }
}