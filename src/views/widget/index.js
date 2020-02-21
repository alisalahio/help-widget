import html from './widget.html';
import './widget.css';
import { showPopup, closePopup } from '../popup'

let elements = [];
let body;
let widgets;
let popups = [];

export function show() {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement('div');
  temporary.innerHTML = html;

  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  widgets = document.getElementsByClassName('help-widget')
  widgets[0].addEventListener('click', triggerShowPopup);
  body.addEventListener('click', triggerClosePopup)
}

export function triggerClosePopup(e) {
  popups.pop();
  closePopup();
}

export function triggerShowPopup(e) {
  e.stopPropagation();
  if (popups.length === 0) {
    showPopup();
    popups.push(1);
  } else {
    popups.pop();
    closePopup()
  }
}