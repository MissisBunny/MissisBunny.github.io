 $(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.header').css('min-height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});

$(document).ready(function () {
    $('.row-conformity > [class*=col-]').conformity();
    $(window).on('resize scroll', function() {
        $('.row-conformity > [class*=col-]').conformity();
    });
});
