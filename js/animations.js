document.querySelector('.player').addEventListener('click', runForestRun);
var one = document.querySelector('.one');
var three = document.querySelector('.three');

var deep_one = document.querySelector('.deep-one');
var deep_two = document.querySelector('.deep-two');

let one_width = 5,two_width = 5,three_width = 5,four_width = 5;
let one_height = 5,two_height = 5,three_height = 5,four_height = 5;
let one_margin_top = 47.5,two_margin_top = 55,three_margin_top = 47.5,four_margin_top = 55;
let one_left = 47.5,two_left = 55,three_left = 47.5,four_left = 55;

let next = false;

function runForestRun(){

  psycho();

  psychoEnd();

  if(one_width<95){
    one_width += 5;
    one_height += 5;
    one_margin_top -= 2.5;
    one_left -= 2.5;
    one.style.width = one_width + '%';
    one.style.height = one_height + '%';
    one.style.top = one_margin_top + '%';
    one.style.left = one_left + '%';
    if(one_width>45){
      next = true;
    };
    if(next == true){
      if(three_width<95){
        three_width += 5;
        three_height += 5;
        three_margin_top -= 2.5;
        three_left -= 2.5;
        three.style.width = three_width + '%';
        three.style.height = three_height + '%';
        three.style.top = three_margin_top + '%';
        three.style.left = three_left + '%';
      }else{
        three_width = 5;
        three_height = 5;
        three_margin_top = 47.5;
        three_left = 47.5;
        three.style.display = 'none';
        three.style.display = 'block';
      };
    };
  }else{
    one_width = 5;
    one_height = 5;
    one_margin_top = 47.5;
    one_left = 47.5;
    one.style.display = 'none';
    one.style.display = 'block';
  };
}

function psycho(){
  deep_one.style.transform += 'rotate(25deg)';
  deep_two.style.transform += 'rotate(15deg)';

  let psycho_one = document.querySelector('.psycho-one');
  let psycho_two = document.querySelector('.psycho-two');
  let psycho_three = document.querySelector('.psycho-three');
  let psycho_four = document.querySelector('.psycho-four');

  let x = parseInt((Math.random() * 95) + 1);
  let y = parseInt((Math.random() * 95) + 1);

  if(parseInt(Math.random() * 2) == true){
    psycho_one.style.top = x + '%';
    psycho_one.style.left = y + '%';
  }

  if(parseInt(Math.random() * 2) == true){
    psycho_two.style.top = x + '%';
    psycho_two.style.left = y + '%';
  }

  if(parseInt(Math.random() * 2) == true){
    psycho_three.style.top = x + '%';
    psycho_three.style.left = y + '%';
  }

  if(parseInt(Math.random() * 2) == true){
    psycho_four.style.top = x + '%';
    psycho_four.style.left = y + '%';
  }
};

function psychoEnd(){
  document.querySelector('.player').style.backgroundColor = 'white';
  document.querySelector('.player').style.transform = 'skewY(5rad)';
  document.querySelector('.player').style.width = '100%';
  document.querySelector('.player').style.height = '100%';
  document.querySelector('.player').style.top = 0;
  document.querySelector('.player').style.left = 0;
  document.querySelector('.player').style.transform = 'skewY(10rad)';
}