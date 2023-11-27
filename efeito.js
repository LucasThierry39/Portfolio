let titulo = document.querySelector('.titulo');

titulo.addEventListener('mouseover', function() {
 titulo.style.backgroundColor = 'blue';
 titulo.style.color = 'white';
});

titulo.addEventListener('mouseout', function() {
 titulo.style.backgroundColor = 'white';
 titulo.style.color = 'black';
});