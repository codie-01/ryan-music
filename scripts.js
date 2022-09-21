// A $( document ).ready() block.
$( document ).ready(function() {


    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click",() => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })
    
    document.querySelectorAll(".nav-link").forEach(n => n. addEventListener ("click",() => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))

});


// Linktree JS

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


// CARO KELLEY Linktree JS

$(document).ready(function(){
  $("#flip-2").click(function(){
    $("#panel-2").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flip-3").click(function(){
    $("#panel-3").slideToggle("slow");
  });
});