
$('.right-column').css('height', $('#sticky-content-container').height())

 $(window).scroll(() => {
	const scrollTop = $(window).scrollTop()
	const stickyStartOffset = $('#sticky-position-start').offset().top
	const stickyDivOffset = $('#sticky-div').offset().top
	const stickyContentContainerHeight = $('#sticky-content-container').height()
	
	if ((scrollTop > stickyStartOffset) && scrollTop + $('#sticky-div').height() < stickyContentContainerHeight) {
	 	$('#sticky-div').css({ position: 'fixed', top: '0', bottom: 'unset'})

    } else if (scrollTop + $('#sticky-div').outerHeight() > stickyContentContainerHeight) {
    	$('#sticky-div').css({ position: 'absolute', bottom: '0px', top: 'unset'})
    } else {
    	$('#sticky-div').css({ position: 'relative', top: '0'})
    }
});




