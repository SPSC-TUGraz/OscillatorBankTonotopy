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
