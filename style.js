// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function() {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
  });
  

  // ==============================
// FITUR DARK/LIGHT MODE TOGGLE
// ==============================

document.addEventListener("DOMContentLoaded", function () {

  const darkToggleBtn = document.getElementById("dark-toggle");

  const currentMode = localStorage.getItem("mode");

  if (currentMode === "light") {
    document.body.classList.add("light-mode");
    darkToggleBtn.innerHTML = "🌙 Dark Mode";

  } else {
    
    darkToggleBtn.innerHTML = "🌙 Dark Mode";
  }

  darkToggleBtn.addEventListener("click", function () {
    
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      
      darkToggleBtn.innerHTML = "🌙 Dark Mode";
      localStorage.setItem("mode", "light")
    } else {

      darkToggleBtn.innerHTML = "☀️ Light Mode";
      localStorage.setItem("mode", "dark");
    }

  });

});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});