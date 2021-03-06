var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

var containerScroll = $("#container #img-thumbnails");
var imgContainer = $("#img-thumbnails");
var lastId;


function loadListOfPeople(){
	

	for(var i =0;i< people.length;i++){
		var person = people[i];

		var toAdd = $("<div class='person' onClick='showProfile("+i+")'><img src='"+person.avatar+"' width='30' height='30' style='vertical-align:middle'> <span class='name'>"+person.name+"</span></div>")

		toAdd.appendTo("#listOfPeople");
	}
}

function loadProduct(product,notificationId){
	var productNew="", notificationHtml="";
	if(product.new) productNew="class='fadeIn unread'";
	if(notificationId!=undefined) notificationHtml="notification-id='"+notificationId+"'";

	var img= $("<img src='"+product.image+"' alt='"+product.name+"' product-id='"+product.id+"' "+productNew+" "+notificationHtml+" />")

	img.appendTo('#img-thumbnails');
}

function loadProducts(){
	$("#product #cartDetails").hide();
	$("#product #bottom").show();

	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< products.length;i++){
		loadProduct(products[i]);
	}
}

function loadCartProducts(){
	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< cart.length;i++){
		loadProduct(cart[i]);
	}
}

function loadNewProducts(max){
	//marks first 3 products as new
	for(var i =0;i<max;i++)
		products[i].new = true;
}

function loadPurchases(user){
	$("#product #cartDetails").hide();
	$("#product #bottom").show();

	$("#user").hide();
	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< user.purchased.length;i++){
		loadProduct( user.purchased[i] );
	}


}
function loadPins(user){
	$("#product #cartDetails").hide();
	$("#product #bottom").show();
	$("#user").hide();
	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< user.pinned.length;i++){
		loadProduct( user.pinned[i] );
	}
}
function loadLikes(user){
	$("#product #cartDetails").hide();
	$("#product #bottom").show();
	$("#user").hide();
	$("#img-thumbnails").html(''); //remove all products

	for(var i =0;i< user.liked.length;i++){
		loadProduct( user.liked[i] );
	}
}
function loadFavoriteBrands(user,editable){
	$("#myFavoriteBrands").html('');
	$("#userFavoriteBrands").html('');

	edit ='';
	if(editable==undefined) edit='<i class="fa fa-minus sign" action="minus"></i>';

	user.favorite_brands.forEach(function(brand,key){

		var brand = $('<div class="brand" brand-id="'+key+'"><img src="img/brands/'+brand.imageName+'.png">'+edit+'</div>');
		brand.appendTo("#myFavoriteBrands");
		brand.appendTo("#userFavoriteBrands");
	});
}

function loadBrands(){
	$("#allBrands").html('');
	brands.forEach(function(brand,key){
		var brand = $('<div class="brand" brand-id="'+key+'"><img src="img/brands/'+brand.imageName+'.png"><i class="fa fa-plus sign" action="plus"></i></div>');
		brand.appendTo("#allBrands")
	});
}


function loadNotifications(){

	$("#product #cartDetails").hide();
	$("#product #bottom").show();
	$("#img-thumbnails").html('');


	notifications.forEach(function(notification,key){
		loadProduct(notification.product,key);
	});
}



function showFirstPage(){
	loadProducts();
	hideAllPages();
	hideTopNavigation();

	$("#user").hide();
	$("#product").show();

	selectProduct($("#img-thumbnails img").first());
}

function showPeoplePage(){

	hideAllPages();
	hideTopNavigation();
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
	$("#user-favorites-content").hide();
	$("#product").hide();
	$("#product").addClass('clear');
	

}


function buyProduct(){
	console.log(currentProduct);

	cart.push(currentProduct);

	$("#shopping-cart #number").html(cart.length);

	$("#shopping-cart").css('opacity',1);

	setTimeout(function(){$("#shopping-cart").css('opacity',0)},1300)
}

function hideAllPages(){
	console.log('pages hidden')
	$("#product").hide();

	$("#myAccountSettings").hide();
	$("#topNavigation").hide();

	notificationsPage=false;

}

function showAdvancedSearch(){
	$("#advanced-search").attr('class','fa fa-caret-up');
	isOpenAdvancedSearch=true;
	$("#advancedSearch").show();
}

function hideAdvancedSearch(){
	$("#advanced-search").attr('class','fa fa-caret-down');
	isOpenAdvancedSearch=false;
	$("#advancedSearch").hide();
}

function toggleAdvancedSearch(){
	//$("#advanced-search").attr('class','fa fa-caret-down');
	if(isOpenAdvancedSearch){
		hideAdvancedSearch();
	}else{
		showAdvancedSearch();
	}
	
	$("#search-container #searchInput").focus();
}


function clearNewProducts(){
	products.forEach(function(product,key){
		product.new = false;
	});
}

function hideTopNavigation(){
	$("#topNavigation").hide();
	$("#product").addClass('clear');
}
function showTopNavigation(){
	$("#topNavigation").show();
	$("#product").removeClass('clear');
}

function showUserProfile(userIndex){
	hideAllPages();


	showProfileUser = people[userIndex];
	$(".userName").html(showProfileUser.name);
	$("#userAvatar").attr('src',showProfileUser.avatar);

	$("#userProfile #userPinsCount").html(showProfileUser.pinned.length);
	$("#userProfile #userLikesCount").html(showProfileUser.liked.length);
	$("#userProfile #userFavoritesCount").html(showProfileUser.favorite_brands.length);
	$("#userProfile #userPurchasesCount").html(showProfileUser.purchased.length);

	showTopNavigation();
	$("#myProfile").hide();
	$("#userProfile").show();
	$("#myAccountSettings").show();

	$("#userPinsTab").click();

}

function updateTotalCartPrice(){
	var total = 0;

 	cart.forEach(function(product,key){
		total+= product.price;
	});

	$("#cartDetails #totalText").html(total+'$');
}