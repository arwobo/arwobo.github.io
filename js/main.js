// Sticky nav interaction

	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 500){  
   		
   		$('header').addClass("sticky");

   		$('h2').slideUp();
	}
	else{
		
		$('header').removeClass("sticky");

		$('h2').slideDown();
	}

	});

// Scroll to page sections interaction

	// On click of a nav link

	// Scroll to the associated page section (leaving room for sticky nav above)


// Contact area interaction 
	
	// On click of "Contact"
	$("#contact").on("click", function (event) {
		event.preventDefault();
		
		// Hide "contact" image
		$("#contactImageLink").slideUp();

		// Contact info slides down
		$("#contactInfo").slideDown().css("display");
	});		

	// When "X" link is selected 
	$("#contactInfoClose").on("click", function (event) {
		event.stopPropagation();

		// Slide up contact info
		$("#contactInfo").slideUp().css("hide");

		//Show "contact" image 
		$("#contactImageLink").slideDown();
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




