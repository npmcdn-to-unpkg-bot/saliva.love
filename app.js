// refractor parent selectors
// flickity init before fadein

$(document).ready(function(){

  $('#loading').fadeOut();

  var navItem = $('.projectnav a');

  navItem.each(function(index) {
      var clrs = ['#c0b7af', '#91a7d0', '#f6cac9', '#b6ba99', '#af869a', '#648589', '#d1c2ab'];
      var leftrand = Math.floor(Math.random()*6) + 'em';
      clr = clrs[Math.floor(Math.random()*clrs.length)];
      $(this).find('text').css({fill: clr});
      $(this).css({marginLeft: leftrand});
    });

  navItem.click(function(e) {
    var thisClr = $(this).find('text').css('fill');
    $('.desc, #close, .controls').css({color: thisClr, fill: thisClr});
    $('#close, .controls').css({'visibility': 'visible', opacity: 1});
    var dataID = $(this).attr('data-id');
    $(this).find('text').removeClass('transparent');
    navItem.not(this).find('text').addClass('transparent');
    $('.project#' + dataID).addClass('project-visible').find('.flickity').flickity({
        cellAlign: 'left',
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        wrapAround: true
    });
    $('.project').not('#' + dataID).removeClass('project-visible');
    $('.thumb').fadeOut(300);
    e.preventDefault();
    return false;
  });

  $('#close').click(function(){
    $(this).fadeOut(300);
    $('.project').removeClass('project-visible');
    navItem.find('text').removeClass('transparent');
    $('#close, .controls').css({'visibility': 'hidden', opacity: 0});
  });

  // second first
  $('#info').click(function(){
    $('.project-visible').find('.desc').css({'visibility': 'visible', opacity: 1});
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      $('.project').removeClass('project-visible');
      navItem.find('text').removeClass('transparent');
      $('#close, .controls').css({'visibility': 'hidden', opacity: 0});
    } else if (e.keyCode === 73 || $('.project').hasClass('project-visible')) {
      $('.project-visible').find('.desc').css({'visibility': 'visible', opacity: 1});
    }
  });

  navItem.mouseenter(function() {
    if ($('.project').hasClass('project-visible')) {
      $(this).find('text').removeClass('transparent');
    } else {
      $(this).find('text').addClass('transparent');
      $(this).next('.thumb').stop().fadeIn(300)
      $(this).mousemove(function(e) {
        console.log(e.pageX + $(this).next('.thumb').width()/2);
        $(this).next('.thumb').css({left:e.pageX - $(this).next('.thumb').width()/2, top:e.pageY - $(this).next('.thumb').height()/2});
      });
    }
  }).mouseleave(function() {
    if ($('.project').hasClass('project-visible') && $(this).attr('data-id') != $('.project-visible').attr('id')) {
      $(this).find('text').addClass('transparent');
    } else {
      $(this).find('text').removeClass('transparent');
      $(this).next('.thumb').stop().fadeOut(300);
    }
  })
});
