function renderTemplate($renderTemplate, $target, resultJSON){
	
	var targetID = $target.attr('id');
	var templateID = $renderTemplate.attr('id');
	
	var template = Handlebars.compile( $renderTemplate.html() );
	var html = template( resultJSON );
	$target.html( html );
	
	$('loading').hide();
	
	if ( contentScroll ){
		contentScroll.refresh();
	};
    if ( navScroll ){
		navScroll.refresh();
	};
};

function fillProductQty(){
	var orderArray = fetchOrdersAccounts();
	if ( orderArray ){
		var products = orderArray['ProductArray']
		for ( i=0; i<products.length; i++ ){
			if ( $( "#qtyBox_"+products[i]['prodID'] ).length ){
				$( "#qtyBox_"+products[i]['prodID'] ).html( products[i]['Qty'] )
			};
		};
	};
};