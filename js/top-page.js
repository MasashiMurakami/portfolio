$(function(){
  // 
    // Scroll Button
    // 
    // var pageHeight = $('.TopView__heading').offset().top;
    var pageHeight = 500;
    var scrollBtn = $('.topPage__button');
  
    $(window).on('load scroll', function() {
      if ($(window).scrollTop() > pageHeight) {
        scrollBtn.addClass('visible');
      } else {
        scrollBtn.removeClass('visible');
      }
    });
});