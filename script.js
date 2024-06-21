// ----- Navigation menu scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// ---- Set active class to nav bar menu items
// NEED: sabai menu items ko pages haru baneko hunu parxa
const pathName = window.location.pathname;
// alert(pathName);
const pageName = pathName.split('/').pop();
// alert(pageName);
if (pageName === 'index.html') {
  document.querySelector('.home').classList.add('active');
}
if (pageName === 'about.html') {
  document.querySelector('.about').classList.add('active');
}
if (pageName === 'service.html') {
  document.querySelector('.service').classList.add('active');
}
