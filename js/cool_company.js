document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('scroll', function() {

		// get nav and up button
		var nav = document.getElementById('navbar');
		var up = document.getElementById('up');

		// top and bottom of the document
		var documentAtBottom = 
			(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight;
		var documentAtTop = (document.documentElement.scrollTop == 0);

		// animate nav
		if(documentAtTop){
			nav.style.backgroundColor = "rgb(66, 66, 66)";
			nav.style.animation = 'navup 2s'
		}else if(!documentAtTop){
			nav.style.backgroundColor = "rgba(66, 66, 66, 0.5)";
			nav.style.animation = 'navdown 2s'
		}

		// animate up button
		if(documentAtBottom){
			up.classList.remove('fadeout')
			up.classList.add('fadein')
		}else if(!documentAtBottom){
			up.classList.remove('fadein')
			up.classList.add('fadeout')
		}
	});

  
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
            indicators: true
        });

 });
