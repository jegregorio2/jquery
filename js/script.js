$(document).ready(function(){
	// click - 
	$('.nav li').click(function(){
		var category = $(this).attr('class'); 
		$('.nav li').removeClass('active'); 
		$(this).addClass('active'); 
		// switch2
		switch (category) {
			case 'nav-consumer':
				$('.thumbnail').removeClass('selected'); 
				$('.consumer').addClass('selected'); 
				break;
			case 'nav-mobile':
				$('.thumbnail').removeClass('selected'); 
				$('.mobile').addClass('selected'); 
				break;
			case 'nav-commerce':
				$('.thumbnail').removeClass('selected'); 
				$('.commerce').addClass('selected'); 
				break;
			case 'nav-enterprise':
				$('.thumbnail').removeClass('selected'); 
				$('.enterprise').addClass('selected'); 
				break;
			case 'nav-all':
				$('.thumbnail').removeClass('selected'); 
				break;
			default:
		} // end switch 
	}); // end click 
}); // end ready function 