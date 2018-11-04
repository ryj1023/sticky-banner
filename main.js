
/* 
	Make the right column the same height as the parent container.
	This will ensure the div will stay at the bottom on the column when
	the fixed position is removed and changed to absolute.
*/
$('.right-column').css('height', $('#sticky-content-container').height())

 $(window).scroll(() => {
 	/*
		Get the current scroll distance from the top
 	*/
	const scrollTop = $(window).scrollTop()
	/* 
		Get the distance from the added 'sticky-position-start' div to the top
		of the page in order to have a reference point for where the 'sticky'
		div should start it's position to be switched to 'fixed'
	*/
	const stickyStartOffset = $('#sticky-position-start').offset().top
	/*
		Get the height of the parent container in order to know the scroll position in
		which to disable the the 'sticky' div
	*/
	const stickyContentContainerHeight = $('#sticky-content-container').height()

	/*
		As long as the you have scrolled passed the 'sticky' starting point
		and have not yet scrolled passed the 'sticky' end point, set the positon to 'fixed'
	*/
	
	if ((scrollTop > stickyStartOffset) && scrollTop + $('#sticky-div').height() < stickyContentContainerHeight) {
	 	$('#sticky-div').css({ position: 'fixed', top: '0', bottom: 'unset'})

	 	/*
			When you scroll passed the end of the parent container with the 'sticky' div,
			switch the position of the sticky div to display at the bottom of the parent column
	 	*/
    } else if (scrollTop + $('#sticky-div').outerHeight() > stickyContentContainerHeight) {
    	$('#sticky-div').css({ position: 'absolute', bottom: '0px', top: 'unset'})
    	/*
			Any time you are scrolling above the sticky-position-start container, revert the
			sticky div to it's original position
    	*/
    } else {
    	$('#sticky-div').css({ position: 'relative', top: '0'})
    }
});




