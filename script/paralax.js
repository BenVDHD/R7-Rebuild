/*(function(){
  var documentEl = $(document),
      parallax = $('.parallax');

  documentEl.on('scroll', function(){
    var wScroll = $(this).scrollTop();
        parallax.css('background-position', '0' + -wScroll/4 + '%');
        console.log(wScroll)
  });

})();
*/
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  $('.parallax').css('background-position', '0' + -wScroll/5 + 'px');

});
