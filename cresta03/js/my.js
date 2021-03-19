$(function() {
  //
  // SmoothScroll
  //
  $('a[href^="./#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href").replace("./","");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  //
  // Header Scroll
  //
    //cssを変更するクラス
    var nav = $('.gNav'),
        headerHeight = $('.header').innerHeight() - 10;
    $(window).on('load scroll', function(){
      var value = $(this).scrollTop();
      if ( value > headerHeight ) {
        nav.addClass('transform');
      } else {
        nav.removeClass('transform');
      }
    });

  //
  // deSVG
  //
  window.addEventListener('load', function(){
    deSVG('.gNav-left__img', true);
  });

  // 
  // Hamburger menu checkbox-unchecked function
  // 
  $('.menu-link').on("click", function(evt) {
    if( $('#menu-btn-check').prop("checked") ) {
      $('#menu-btn-check').prop("checked", false);
    }
  });
  $('.menu-other-bg').on("click", function(evt) {
    if( $('#menu-btn-check').prop("checked") ) {
      $('#menu-btn-check').prop("checked", false);
    }
  });
});