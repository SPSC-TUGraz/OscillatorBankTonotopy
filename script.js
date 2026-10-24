'use strict';
const viewer = document.getElementById('viewer');
const picture = document.getElementById('viewer-image');
const title = document.getElementById('viewer-title');
document.querySelectorAll('[data-image]').forEach(button => {
 button.addEventListener('click', () => {
  picture.src = button.dataset.image;
  picture.alt = button.querySelector('img').alt;
  title.textContent = button.dataset.title;
  viewer.showModal();
 });
});
document.getElementById('close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) { const r=viewer.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) viewer.close(); } });
// When the simulation animation is supplied, replace the placeholder with:
// <video controls playsinline preload="metadata"><source src="assets/masking.mp4" type="video/mp4">Your browser does not support HTML video. <a href="assets/masking.mp4">Download animation</a></video>

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
function selectTab(tab) {
 tabs.forEach(item => {
  const selected = item === tab;
  item.setAttribute('aria-selected', String(selected));
  item.tabIndex = selected ? 0 : -1;
  document.getElementById(item.dataset.panel).hidden = !selected;
 });
}
tabs.forEach((tab, i) => {
 tab.addEventListener('click', () => selectTab(tab));
 tab.addEventListener('keydown', event => {
  let next;
  if (event.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
  else if (event.key === 'ArrowLeft') next = tabs[(i + tabs.length - 1) % tabs.length];
  else if (event.key === 'Home') next = tabs[0];
  else if (event.key === 'End') next = tabs[tabs.length - 1];
  if (next) { event.preventDefault(); selectTab(next); next.focus(); }
 });
});
