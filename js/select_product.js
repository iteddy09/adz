var productImg = $("#product img#big-image");
var zoomImg = $("#product #zoom-container");
var pinsEl = $("#product #pins");
var likesEl = $("#product #likes");
var priceEl = $("#product #price");
var nameEl = $("#product #name");
var brandEl = $("#product #brand");
var purchasedEl = $("#product #purchased");
var materialEl = $("#product #material");
var userNameEl=$("#user #userName");
var userActionEl=$("#user #action");
var userImgEl=$("#user img");
var userLookEl=$("#user #look");
var userLookingEl=$("#user #looking");


function removeOtherSelected(){
	$("#img-thumbnails img").each(function(index){ $(this).removeClass('current')});
}

function selectProduct(img){
	removeOtherSelected();


	var product = products[img.attr('product-id')];
	var notificationId = img.attr('notification-id');

	if(notificationId!=undefined){
		var notification = notifications[notificationId];
		userNameEl.html(notification.person.name);
		userImgEl.attr('src',notification.person.avatar);
		userActionEl.html(notification.action.message);
		userLookEl.html(notification.person.look);
		userLookingEl.html(notification.person.looking);
	}
	product.new = false;
	img.removeClass('unread');
	img.removeClass('fadeIn');
	img.addClass('current');
	productImg.attr('src',img.attr('src')) ;
	zoomImg.css('background-image','url('+img.attr('src')+')') ;

	nameEl.html(img.attr('alt'));
	priceEl.html('$'+product.price);
	pinsEl.html(product.pins);
	nameEl.html(product.name);
	likesEl.html(product.likes);
	brandEl.html(product.brand.name);
	purchasedEl.html(product.purchased);
	materialEl.html(product.material);
}