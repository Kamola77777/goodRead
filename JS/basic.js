const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
//________LOADER____________//
var loader = document.querySelector(".loader")
        
        window.addEventListener("load", vanish);
        function vanish() {
            loader.classList.add("disappear");
            
        }