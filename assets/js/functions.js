$(function() {
	smoothScroll(300);
	serviceBelt();
	serviceLoad();
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function serviceBelt() {
  
	$(".trigger").remove();
	$(".return").remove();

	$('.thumb-unit').click(function() {
	$('.services-belt').addClass("slided");
	$('.service-container').show();
	});

	$('.service-return').click(function() {
	$('.services-belt').removeClass("slided");
	$('.service-container').hide(800);
	});

}

function  serviceLoad() {
  
  $.ajaxSetup({ cache: false });
  
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'service/'+ newfolder;
      
    $('.service-load').html(spinner).load(newHTML);
    $('.service-title').text(newTitle);
  });
  
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );