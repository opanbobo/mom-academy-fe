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

  $('.multiple-items-1').slick({
    infinite: true,
    adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true
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

//accordion
// Add minus icon for collapse element which is open by default
$('.collapse.show').each(function(){
    $(this).prev('.card-header').find('.svg-inline--fa').addClass('fa-minus-circle').removeClass('fa-plus-circle');
});

// Toggle plus minus icon on show hide of collapse element
$('.collapse').on('show.bs.collapse', function(){
    $(this).prev('.card-header').find('.svg-inline--fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
}).on('hide.bs.collapse', function(){
    $(this).prev('.card-header').find('.svg-inline--fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');
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