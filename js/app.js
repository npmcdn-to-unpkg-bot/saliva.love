$(document).ready(function(){

  // Roll the dice
  $('nav a').each(function(i) {
      var colors = ['#c0b7af', '#91a7d0', '#f6cac9', '#b6ba99', '#af869a', '#648589', '#d1c2ab'];
      var gutter = Math.floor(Math.random()*6) + 'em';
      fillColor = colors[Math.floor(Math.random()*colors.length)];
      $(this).find('text').css({'fill': fillColor});
      $(this).css({'margin-left': gutter});
    });

  // Nav && Clr control
  $('nav a').click(function(e) {
      $('body').removeClass('home');
      $(this).find('text').css({'stroke': 'transparent', 'fill': fillColor});
      $('nav a').not(this).find('text').css({'stroke': '#fff', 'fill': 'transparent'});
      e.preventDefault();
      return false;
  });

  // Shortcuts && Controls
  $(document).keyup(function(e) {
        case e.keyCode === 27:
          $('body').addClass('home');
        break;
        }
    });

  // Ajax

  // Flickity

});
