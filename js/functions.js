var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

var containerScroll = $("#container #img-thumbnails");
var imgContainer = $("#img-thumbnails");
var lastId;

function loadProducts(){
	for(var i =0;i< products.length;i++){
		var product = products[i];
		var productNew="";
		if(product.new) productNew="class='unread'";
		var img= $("<img src='"+product.image+"' alt='"+product.name+"' product-id='"+i+"' "+productNew+" />")

		img.appendTo('#img-thumbnails');
	}
}

function getList(){
	return "<div align='left'>Marius Oloeagnu <br/> Ionut Gheorghe<br/> Gigiel Popescu<br/> Fane Ionescu<br/> Ilie Lucan</div>";
}

function hideAllTabs(){
	$("#my-style-content").hide();
	$("#my-sizes-content").hide();
	$("#my-favorites-content").hide();
}

function hideAllPages(){
	$("#product").hide();
 
	$("#myAccountSettings").hide();

}