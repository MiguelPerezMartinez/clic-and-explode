//Mobile menu animation
document.querySelector('header').addEventListener('click',mobileMenu);
var menuVisible = false;


function mobileMenu(){
  if(menuVisible == false){
    document.querySelector('.menu').style.left = '-100vh';
    menuVisible = true;
  }else{
    document.querySelector('.menu').style.left = '0vh';
    menuVisible = false;
  };
};

//Button explode animation inflate when clic
document.querySelector('.red').addEventListener('click',buttonExplodeRed);
document.querySelector('.green').addEventListener('click',buttonExplodeGreen);
document.querySelector('.blue').addEventListener('click',buttonExplodeBlue);
document.querySelector('.purple').addEventListener('click',buttonExplodePurple);
document.querySelector('.orange').addEventListener('click',buttonExplodeOrange);
document.querySelector('.yellow').addEventListener('click',buttonExplodeYellow);
var explodeBttnRed = document.querySelector('.red');
var explodeBttnGreen = document.querySelector('.green');
var explodeBttnBlue = document.querySelector('.blue');
var explodeBttnPurple = document.querySelector('.button-explode');
var explodeBttnOrange = document.querySelector('.button-explode');
var explodeBttnYellow = document.querySelector('.button-explode');

let r_width = 20,g_width = 20,b_width = 20,p_width = 20,o_width = 20,y_width = 20;
let r_height = 20,g_height = 20,b_height = 20,p_height = 20,o_height = 20,y_height = 20;
let r_margin_top = 40,g_margin_top = 40,b_margin_top = 40,p_margin_top = 40,o_margin_top = 40,y_margin_top = 40;
let r_left = 40,g_left = 40,b_left = 40,p_left = 40,o_left = 40,y_left = 40;


function buttonExplodeRed(){
  console.log(r_width);
  if(r_width<100){
    r_width += 10;
    r_height += 10;
    r_margin_top -= 5;
    r_left -= 5;
    explodeBttnRed.style.width = r_width + '%';
    explodeBttnRed.style.height = r_height + '%';
    explodeBttnRed.style.top = r_margin_top + '%';
    explodeBttnRed.style.left = r_left + '%';
  }else{
    r_width = 20;
    r_height = 20;
    r_margin_top = 40;
    r_left = 40;
    explodeBttnRed.style.display = 'none';
    explodeBttnGreen.style.display = 'block';
  };
};

function buttonExplodeGreen(){
  console.log(g_width);
  if(g_width<100){
    g_width += 10;
    g_height += 10;
    g_margin_top -= 5;
    g_left -= 5;
    explodeBttnGreen.style.width = g_width + '%';
    explodeBttnGreen.style.height = g_height + '%';
    explodeBttnGreen.style.top = g_margin_top + '%';
    explodeBttnGreen.style.left = g_left + '%';
  }else{
    g_width = 20;
    g_height = 20;
    g_margin_top = 40;
    g_left = 40;
    explodeBttnGreen.style.display = 'none';
    explodeBttnBlue.style.display = 'block';
  };
};

function buttonExplodeBlue(){
  console.log(b_width);
  if(b_width<100){
    b_width += 10;
    b_height += 10;
    b_margin_top -= 5;
    b_left -= 5;
    explodeBttnBlue.style.width = b_width + '%';
    explodeBttnBlue.style.height = b_height + '%';
    explodeBttnBlue.style.top = b_margin_top + '%';
    explodeBttnBlue.style.left = b_left + '%';
  }else{
    b_width = 20;
    b_height = 20;
    b_margin_top = 40;
    b_left = 40;
    explodeBttnBlue.style.display = 'none';
    explodeBttnPurple.style.display = 'block';
  };
};

function buttonExplodePurple(){
  console.log(p_width);
  if(p_width<100){
    p_width += 10;
    p_height += 10;
    p_margin_top -= 5;
    p_left -= 5;
    explodeBttnPurple.style.width = p_width + '%';
    explodeBttnPurple.style.height = p_height + '%';
    explodeBttnPurple.style.top = p_margin_top + '%';
    explodeBttnPurple.style.left = p_left + '%';
  }else{
    p_width = 20;
    p_height = 20;
    p_margin_top = 40;
    p_left = 40;
    explodeBttnPurple.style.display = 'none';
    explodeBttnOrange.style.display = 'block';
  };
};

function buttonExplodeOrange(){
  console.log(o_width);
  if(o_width<100){
    o_width += 10;
    o_height += 10;
    o_margin_top -= 5;
    o_left -= 5;
    explodeBttnOrange.style.width = o_width + '%';
    explodeBttnOrange.style.height = o_height + '%';
    explodeBttnOrange.style.top = o_margin_top + '%';
    explodeBttnOrange.style.left = o_left + '%';
  }else{
    o_width = 20;
    o_height = 20;
    o_margin_top = 40;
    o_left = 40;
    explodeBttnOrange.style.display = 'none';
    explodeBttnYellow.style.display = 'block';
  };
};

function buttonExplodeYellow(){
  console.log(y_width);
  if(y_width<100){
    y_width += 10;
    y_height += 10;
    y_margin_top -= 5;
    y_left -= 5;
    explodeBttnYellow.style.width = y_width + '%';
    explodeBttnYellow.style.height = y_height + '%';
    explodeBttnYellow.style.top = y_margin_top + '%';
    explodeBttnYellow.style.left = y_left + '%';
  }else{
    y_width = 20;
    y_height = 20;
    y_margin_top = 40;
    y_left = 40;
    explodeBttnYellow.style.display = 'none';
    explodeBttnRed.style.display = 'block';
  };
};