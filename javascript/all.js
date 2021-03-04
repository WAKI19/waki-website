
$(function() {
  $('.menu-bar-wrap').click(function() {
    if($('.menu-bar').hasClass('fa-bars')) {
      $('.main-menu').css('right', '0');
      $('.filter').show();
      $('.menu-bar').toggleClass('fa-bars');
      $('.menu-bar').toggleClass('fa-times');
    } else {
      $('.main-menu').css('right', '-50%');
      $('.filter').hide();
      $('.menu-bar').toggleClass('fa-bars');
      $('.menu-bar').toggleClass('fa-times');
    }
  });
})
