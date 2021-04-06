document.querySelector('.player').addEventListener('click', runForestRun);
var one = document.querySelector('.one');
var two = document.querySelector('.two');

let one_width = 10,two_width = 5;
let one_height = 10,two_height = 5;
let one_margin_top = 45,two_margin_top = 47.5;
let one_left = 45,two_left = 47.5;

function runForestRun(){
  console.log(one_width)
  if(one_width<95){
    one_width += 10;
    one_height += 10;
    one_margin_top -= 5;
    one_left -= 5;
    one.style.width = one_width + '%';
    one.style.height = one_height + '%';
    one.style.top = one_margin_top + '%';
    one.style.left = one_left + '%';
  }else{
    one_width = 20;
    one_height = 20;
    one_margin_top = 40;
    one_left = 40;
    one.style.display = 'none';
    one.style.display = 'block';
  };
}