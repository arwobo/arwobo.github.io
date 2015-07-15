// Sticky nav interaction

	$(window).scroll(function() {
		
		// if the windowis more than 500px from top,
		if ($(this).scrollTop() > 500){  
   		
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

	// store nav height
		var navHeight = $("nav").outerHeight();

		// On click of a nav link
		$("nav a").on("click", function (event) {
			// prevent standard link operation	
			event.preventDefault();

			// Remove active class from all nav links
			$("nav a").removeClass("active");

			// Give active class to nav link
			$(this).addClass("active");

			// use href to identify which page section to go to
			var sectionTarget = $(this).attr("href");

			// find the top of the section
			var targetOffset = $(sectionTarget).offset().top - navHeight;

			// animate it
			$("body").animate({
				scrollTop: targetOffset
			}, 600);

		});	

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
							


// // In "Media" section (video slider interaction)
	
// 	// For every slider (in case there is ever another slider added to this page)
// 	$(".slideViewer").each(function () {
// 		// Get current slider
// 		var $this = $(this);
// 		// Get the slide-group (container)
// 		var $group = $this.find("slide.group");
// 		// JQuery object to hold all slides
// 		var $slides = $this.find(".slide");
// 		// Create array to hold nav buttons
// 		var buttonArray = [];
// 		// Index number of current slide
// 		var currentIndex = 0;

// 		// move() - function for moving slides
// 		// Creates the slide from old one to new one
// 		function move(newIndex) {
// 			// declare variables
// 			var animateLeft, slideLeft;

// 			// when slide moves, call advance again
// 			advance();

// 			// if current slide is showing or slide is animating, do nothing
// 			if ($group.is(":animated") || currentIndex === newIndex) {
// 				return;
// 			}

// 			// remove class from item
// 			buttonArray[currentIndex].removeClass("active");
// 			// add class to new item
// 			buttonArray[newIndex].addClass("active");

// 			// if new item > current
// 			if (newIndex > currentIndex) {
// 				// Sit the new slide to the right
// 				slideLeft = "100%";
// 				// Animate the current group to the left
// 				animateLeft = "-100%";
// 			} else {
// 				// Sit the new slide to the Left
// 				slideLeft = "-100%";
// 				// Animate the current group to the right
// 				animateLeft = "100%";
// 			}
// 			// Position new slide to left (if less) or right (if more) of current
// 			$slides.eq(newIndex).css( {left: slideLeft, display: "block"} );
// 			// Animate slides and
// 			$group.animate( {left: animateLeft} , function () {
// 				// Hide previous slide
// 				$slides.eq(currentIndex).css( {display: "none"} );
// 				// Set position of the new item
// 				$slides.eq(newIndex).css( {left: 0} );
// 				// Set position of group of slides
// 				$group.css( {left: 0} );
// 				// Set currentIndex to new video
// 				currentIndex = newIndex;
// 			});

// 		}

// 		$.each($slides, function(index) {
// 			// Create a button element for the button
// 			var $button = $("<button type="button" class="slide-btn">&bull;</button>");
// 			// If index is the current item
// 			if (index === currentIndex) {
// 				// Add the active class
// 				$button.addClass("active");
// 			}
// 			// Create event handler for the button
// 			$button.on("click", function () {
// 				// call the "move" function
// 				move(index);
// 				// Add to the buttons holder
// 			}).appendTo(".slide-buttons");
// 			// Add it to the button array
// 			buttonArray.push($button);
// 		});

// 	});




