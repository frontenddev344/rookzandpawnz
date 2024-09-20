document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggle").addEventListener("click", function () {
      document.body.classList.add("menuToggle");
    });
  
    document.querySelector(".close").addEventListener("click", function () {
      document.body.classList.remove("menuToggle");
    });
  });

  AOS.init({
    duration: 1200,
  })
  