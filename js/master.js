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