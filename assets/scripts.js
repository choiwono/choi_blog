$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  $(window).scroll(function(){
    let header = 300;
    let scroll = getCurrentScroll();
    if(scroll >= header) {
      console.log("scroll 넘어감");
      $("#mainNav").addClass('fixed-header');
    } else {
      $("#mainNav").removeClass('fixed-header');
    }
  })
})
