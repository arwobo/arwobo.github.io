// Sticky nav interaction

	$(window).scroll(function() {
		
		// if the window is more than 500px from top,
		if ($(this).scrollTop() > $('.quote').offset().top - 200){  
   		
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
			var targetOffset = $(sectionTarget).offset().top - 60;

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
	    var top = $(this).offset().top - nav_height - 100;
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

	// On click of video selector box
	$("#selector1 h4 a").on("click", function (event) {
		event.preventDefault();	

		// Clear "active" class from all boxes
		clearActive();

		// Add "active" class to selected box
		$(this).closest("div").addClass("activeSelector");

		// Remove "show" class from all videos, add "hide", and add "show" class to selected video
		showVideo1();
	
	});	

	$("#selector2 h4 a").on("click", function (event) {
		event.preventDefault();	

		// Clear "active" class from all boxes
		clearActive();

		// Add "active" class to selected box
		$(this).closest("div").addClass("activeSelector");

		// Remove "show" class from all videos, add "hide", and add "show" class to selected video
		showVideo2();
	
	});	

	$("#selector3 h4 a").on("click", function (event) {
		event.preventDefault();	

		// Clear "active" class from all boxes
		clearActive();

		// Add "active" class to selected box
		$(this).closest("div").addClass("activeSelector");

		// Remove "show" class from all videos, add "hide", and add "show" class to selected video
		showVideo3();
	
	});	


	// Functions for hiding all videos and then showing each video
	function showVideo1	() {
		hideVideos();
		$("#video1").addClass("show");
	}

	function showVideo2	() {
		hideVideos();
		$("#video2").addClass("show");
	}

	function showVideo3	() {
		hideVideos();
		$("#video3").addClass("show");
	}

	// Function for hiding all videos
	function hideVideos () {
		$(".listenVideo").removeClass("show");
	}

	// Function for clearing active state from selector box
	function clearActive () {
		$(".selectorBox").removeClass("activeSelector");
	}




