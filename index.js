

var item1       = document.getElementById('item1');
var selected    = document.getElementById('selected');
var myStickers  = document.getElementById('myStickers');
var allStickers = document.getElementById('allStickers');

item1.onclick = function () {
    selected.classList.remove('switch'); 
    setTimeout(() => {
        allStickers.style.display = 'flex'
        myStickers.style.display = 'none'
    }, 400);
}
item2.onclick = function () {
    selected.classList.add('switch'); 
    setTimeout(() => {
        myStickers.style.display = 'flex'
        allStickers.style.display = 'none'
    }, 400);
}