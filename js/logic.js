$(function(){
	loadProducts();
	loadBrands();
	loadMyFavoriteBrands();
	selectProduct($("#img-thumbnails img").first());

	$( "#myFavoriteBrands" ).sortable();
	$( "#myFavoriteBrands" ).disableSelection();
})