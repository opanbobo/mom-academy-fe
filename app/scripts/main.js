$(document).ready(function() {

  var submitIcon = $('.searchbar-icon');
  var inputBox = $('.searchbar-input');
  var searchbar = $('.searchbar');
  var isOpen = false;
  submitIcon.click(function() {
      if (isOpen == false) {
          searchbar.addClass('searchbar-open');
          inputBox.focus();
          isOpen = true;
      } else {
          searchbar.removeClass('searchbar-open');
          inputBox.focusout();
          isOpen = false;
      }
  });
  submitIcon.mouseup(function() {
      return false;
  });
  searchbar.mouseup(function() {
      return false;
  });
  $(document).mouseup(function() {
      if (isOpen == true) {
          $('.searchbar-icon').css('display', 'block');
          submitIcon.click();
      }
  });

  $('.modal').on('hidden.bs.modal', function (e) { 
    if ($('.modal:visible').length) { 
        $('body').addClass('modal-open');
    }
 });

 $('.dropdown-toggle').dropdown()

  // slider
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

  $('.multiple-items-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 480,
            settings: {
              arrows: false,
              autoplay: true
            }
        }
    ]
  });



});



function buttonUp() {
  var inputVal = $('.searchbar-input').val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
      $('.searchbar-icon').css('display', 'none');
  } else {
      $('.searchbar-input').val('');
      $('.searchbar-icon').css('display', 'block');
  }
}