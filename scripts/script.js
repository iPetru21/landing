window.addEventListener("load", (event) => {
  let ibgs = document.querySelectorAll('._ibg');

  ibgs.forEach( e => {
    let imageSrc = e.getAttribute('src');
    e.parentElement.style.backgroundImage = `url(${imageSrc})`;
    e.style.display = 'none';
  });
});