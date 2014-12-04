$(function(){
	loadProducts();
	loadBrands();
	loadMyFavoriteBrands();

 	loadNotifications();

	selectProduct($("#img-thumbnails img").first());

	$( "#myFavoriteBrands" ).sortable();
	$( "#myFavoriteBrands" ).disableSelection();
})