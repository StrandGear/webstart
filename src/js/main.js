/* var button = document.querySelector('#button'); //ищем внутри документа html,querySelector позволяет найти определенный элемент
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
   modal.classList.add('modal_active');
   
});

close.addEventListener('click', function() {
   modal.classList.remove('modal_active');
   
}) */