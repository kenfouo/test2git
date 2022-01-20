

var item1    = document.getElementById('item1');
var selected = document.getElementById('selected');

item1.onclick = function () {
    selected.classList.remove('switch'); 
}
item2.onclick = function () {
    selected.classList.add('switch'); 
}