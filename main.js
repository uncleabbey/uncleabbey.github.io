const toggleBtn = document.querySelector('.toggler');

const nav = document.querySelector('.navigator');
const header = document.querySelector('header')

//  display form
toggleBtn.onclick = () => {
  if(nav.style.display === 'none') {
    // header.classList.add('header')
    nav.style.display = 'block';
} else if(nav.style.display === 'block') {
  // header.classList.remove('header')
  nav.style.display = 'none'
} else {
  // header.classList.add('header')
  nav.style.display = 'block'
}

};


const night = document.getElementById("night-toggle")
const theme = document.querySelector("#theme-link");
// night.addEventListener("click", () => {
//   // console.log(theme.href);
//   if (theme.getAttribute("href") == "style.css") {
//     theme.href = "dark-mode.css"
//   } else {
//     theme.href = "style.css"
//   }
// })
var toggled =false;

var switchHolder = document.getElementById("outer-div");
var switchButton = document.getElementById("inner-div");

switchButton.addEventListener('click',function () {
    if(!toggled){
    switchButton.style.transition =".4s all ease-in-out";
    switchButton.style.transform ="translateX(48px)";
    switchButton.style.backgroundColor = "white";
    switchHolder.style.border= "2px solid white";

      theme.href = "dark-mode.css"
    toggled = true;
    }else{
      theme.href = "style.css"
    switchButton.style.transition =".4s all ease-in-out";
    switchButton.style.transform ="translateX(-1px)";
    switchButton.style.backgroundColor = "black";
    switchHolder.style.border= "2px solid black";


    toggled = false;
    }
});
