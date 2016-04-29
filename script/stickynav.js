$(window).scroll(function (e) {
      $el = $('nav');
      if ($(this).scrollTop() > window.innerHeight && $el.css('position') != 'fixed') {
          $('nav').css({ 'position': 'fixed', 'top': '0', 'left':'0', 'right':'0'});
        }
        if ($(this).scrollTop() < window.innerHeight && $el.css('position') == 'fixed') {
          $('nav').css({ 'position': 'absolute', 'top': '100vh', 'left':'', 'right':'' });
        }
      $el = $('.hmenu');
      if ($(this).scrollTop() > window.innerHeight && $el.css('position') != 'fixed') {
          $('.hmenu').css({ 'position': 'fixed', 'top': '0', 'left':'0', 'right':'0'});
        }
        if ($(this).scrollTop() < window.innerHeight && $el.css('position') == 'fixed') {
          $('nav').css({ 'position': 'fixed', 'top': '0', 'left':'0', 'right':'0'});
        }
      });
