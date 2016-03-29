(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	var keeper = "";
	if(document.cookie.indexOf("tracker") >= 0){
		var oreo = document.cookie;
		var oreoPie = oreo.split('=')[1];
		$('.display').html("<p>"+oreoPie+"<p>");
		$('.kbutton').show();
		keeper = oreoPie;
	}
	
	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit    = $('.submit');
	$timeout   = $('.timeout');
	var bclicks = 0;

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$(this).html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	$(document).on('ready', function() {
		setTimeout(function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});
	
	$('.fbutton').on('click', function() {
		$.ajax({url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
			success: function(result){
				console.log(result);
				var rando = Math.floor((Math.random()*14));
				var arr0 = result.data;
				bclicks++;
				if(bclicks ===1){
					$('.fbutton').html('<button id="bz" type="button">Change It</button><br />');
					$('.display').html("<p>"+arr0[rando]+"<p>");
					$('.kbutton').show();
					keeper = arr0[rando];
				}
				else {
					rando = Math.floor((Math.random()*14));
					$('.display').html("<p>"+arr0[rando]+"<p>");
					keeper = arr0[rando];
				}
			}
		});
	});
	
	$('.kbutton').on('click', function() {
		document.cookie="tracker="+keeper;
	});

})();