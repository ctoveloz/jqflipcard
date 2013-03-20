$(function(){
	$.support.css3d = supportsCSS3D();
	var formContainer = $('.flipCard');
	$('#flip').click(function(e){
		formContainer.toggleClass('flipped');
		if(!$.support.css3d){
			$('#front').toggle();
		}
		e.preventDefault();
	});
	
	function supportsCSS3D() {
		var props = [
			'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
		], testDom = document.createElement('a');
		  
		for(var i=0; i<props.length; i++){
			if(props[i] in testDom.style){
				return true;
			}
		}
		
		return false;
	}
});
