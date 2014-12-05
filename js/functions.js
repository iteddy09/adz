var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

var containerScroll = $("#container #img-thumbnails");
var imgContainer = $("#img-thumbnails");
var lastId;


function loadProduct(product,notificationId){
	var productNew="", notificationHtml="";
	if(product.new) productNew="class='fadeIn unread'";
	if(notificationId!=undefined) notificationHtml="notification-id='"+notificationId+"'";

	var img= $("<img src='"+product.image+"' alt='"+product.name+"' product-id='"+product.id+"' "+productNew+" "+notificationHtml+" />")

	img.appendTo('#img-thumbnails');
}

function loadProducts(){
	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< products.length;i++){
		loadProduct(products[i]);
	}
}

function loadNewProducts(){
	//marks first 3 products as new
	for(var i =0;i<3;i++)
		products[i].new = true;




}

function loadBrands(){
	brands.forEach(function(brand,key){
		var brand = $('<div class="brand" brand-id="'+key+'">'+brand.name+'</div>');
		brand.appendTo("#allBrands")
	});
}


function loadNotifications(){
	$("#img-thumbnails").html('');


	notifications.forEach(function(notification,key){
		loadProduct(notification.product,key);
	});
}

function loadMyFavoriteBrands(){
	me.favorite_brands.forEach(function(brand,key){
		var brand = $('<div class="brand" brand-id="'+key+'">'+brand.name+'</div>');
		brand.appendTo("#myFavoriteBrands")
	});
}

function showFirstPage(){
	loadProducts();
	hideAllPages();

	$("#user").hide();
	$("#product").show();

	selectProduct($("#img-thumbnails img").first());
}

function showPeoplePage(){

	hideAllPages();
	notificationsPage=true;

	$("#user").show();
	$("#product").show();
}

function getList(){
	return "<div align='left'>Marius Oloeagnu <br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan</div>";
}
function getLongList(){
	return "<div align='left'>Marius Oloeagnu <br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan<br/>click for more..</div>";
}

function hideAllTabs(){
	$("#my-style-content").hide();
	$("#my-sizes-content").hide();
	$("#my-favorites-content").hide();

	

}

function hideAllPages(){
	console.log('pages hidden')
	$("#product").hide();

	$("#myAccountSettings").hide();

	notificationsPage=false;

}

