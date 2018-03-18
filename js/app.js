var upArrow = $('#up-arrow');

// Show/hide up-arrow depending on position of scroll
$(window).scroll(function(event) {

  var scroll = $(window).scrollTop();
  var image = $('#main-photo');
  var featuredWorkHeading = $('#featured-work').children('h2');
  var windowWidth = $(window).width();

  if (windowWidth >= 768) {
    if (scroll > image.position().top) {
      upArrow.fadeIn();
    }
    else {
      upArrow.fadeOut();
    }
  }
  else {
    if (scroll > featuredWorkHeading.position().top) {
      upArrow.fadeIn();
    }
    else {
      upArrow.fadeOut();
    }
  }
});

// Scroll all the way to the top on up-arrow click
upArrow.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});
