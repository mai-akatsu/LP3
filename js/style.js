$('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

function fadeIn() {
  $('.kaitenTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) { 
      $(this).addClass('kaiten');
    } else {
      $(this).removeClass('kaiten');
    }
  });
  $('.fadeinTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) { 
      $(this).addClass('fadein');
    } else {
      $(this).removeClass('fadein');
    }
  });
  $('.fadeupTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) { 
      $(this).addClass('fadeup');
    } else {
      $(this).removeClass('fadeup');
    }
  });

}
$(window).scroll(function () {
  fadeIn();
});

window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();

$(function () {

  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .nav_all').fadeToggle(200);
    });
  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .nav_all').fadeToggle(200);
    });
  }
}); 