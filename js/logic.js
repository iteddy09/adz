$(function(){
	loadProducts();
	selectProduct($("#img-thumbnails img").first());

	$( ".brands" ).sortable();
	$( ".brands" ).disableSelection();
})