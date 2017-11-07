/* onload es un evento que le indica a window que se ejecute todo el js que esta adentro despues que se cargue la pagina completamente*/
window.onload = function() {
  var board = document.querySelector('.board-js');

  board.addEventListener('click', addBgc);
  /* Elimina el evento*/
  board.removeEventListener('click', addBgc);
 

  /* El primer parametro es un evento, el segundo es un callback
  board.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'red';
  });
  board.addEventListener('dblclick', function(event) {
    event.target.style.backgroundColor = 'green';
  });
  /* mouseover cuando pasa el mouse hace lo que este dentro de mi funcion
  board.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
  });*/
};

function addBgc(event) {
  event.target.style.backgroundColor = 'red';
}
