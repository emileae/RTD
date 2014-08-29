function renderTemplate($renderTemplate, $target, resultJSON){

	var targetID = $target.getAttribute('id');
	var templateID = $renderTemplate.getAttribute('id');

	var template = Handlebars.compile( $renderTemplate.innerHTML );
	var html = template( resultJSON );
	$target.innerHTML = html;
	
};
