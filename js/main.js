// Sticky nav interaction

	$(window).scroll(function() {
		
		// if the windowis more than 500px from top,
		if ($(this).scrollTop() > $('.quote').offset().top - 600){  
   		
   		// add sticky class to header
   		$('header').addClass("sticky");

   		// hide h2
   		$('h2').slideUp();
	}
	
	// otherwise
	else {
		
		// remove sticky class
		$('header').removeClass("sticky");

		// show h2S
		$('h2').slideDown();
	}

	});

// Scroll to page sections interaction on click

	// var navHeight2 = $("nav").outerHeight();
	// console.log(navHeight2);
	
		// On click of a nav link
		$("nav a").on("click", function (event) {
			// prevent standard link operation	
			event.preventDefault();

			// Remove active class from all nav links
			$("nav a").removeClass("active");

			// Give active class to selected nav link
			$(this).addClass("active");

			// use href to identify which page section to go to
			var sectionTarget = $(this).attr("href");

			// find the top of the section
			var targetOffset = $(sectionTarget).offset().top - 50;

			// animate it
			$("html, body").animate({scrollTop: targetOffset
			}, 600);

		});	

// Clear "active" nav class on click of H1 a

	$("h1 a").on("click", function () {
		$("nav a").removeClass("active");
	})		

// Highlighting nav areas on scroll

	// Create variables for sections, nav, and nav height
	var sections = $('section');
	var nav = $('nav');
	var nav_height = nav.outerHeight();
	 
	// On scroll, determine how far window position is from top of page
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  // for each section,  
	  sections.each(function() {
	    // define variables for top and bottom of section
	    var top = $(this).offset().top - nav_height;
	    var bottom = top + $(this).outerHeight();
	 
	    // if the current position is greater than top value, and less than bottom,
	    if (cur_pos >= top && cur_pos <= bottom) {
	      // remove active classes from nav links
	      nav.find('a').removeClass('active');
	      sections.removeClass('active');
	 
	      // add active class to section link
	      $(this).addClass('active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    }
	  });
	});


// Contact area interaction 
	
	// On click of "Contact"
	$("#contact").on("click", function (event) {
		event.preventDefault();
		
		// Hide "contact" image
		$(".contactImageLink").removeClass("show");

		// Contact info slides down
		$(".contactInfo").addClass("show");
	});		

	// When "X" link is selected 
	$("#contactInfoClose").on("click", function (event) {
		event.stopPropagation();

		event.preventDefault();	

		// Slide up contact info
		$(".contactInfo").removeClass("show");

		//Show "contact" image 
		$(".contactImageLink").addClass("show");
	});	
							


// // In "Listen" section (video slider interaction)
	





