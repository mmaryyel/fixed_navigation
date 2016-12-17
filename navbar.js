$(document).ready(function(){
  var navOffset = $("nav").offset().top;
  console.log("navOffset", navOffset);
  $(window).on("scroll", function () {
    // Aquí deberás escribir la lógica que modificará la barra
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop",scrollTop);
    if ((scrollTop >= 200)) {
      $(".top-nav").css('opacity', '0.5')
      $("nav").addClass("fixed");
    } else { 
      $(".top-nav").css('opacity', '1');
      $("nav").removeClass("fixed");
    }
  });

}) 
