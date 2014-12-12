$(function(){

	$("#nav-menu #myAccount").click(function(){
		hideAllPages();

		loadBrands();
		loadFavoriteBrands(me);


		showTopNavigation();
		$("#topNavigation #userProfile").hide();
		$("#topNavigation #myProfile").show();
		$("#myAccountSettings").show();

		$("#pinsTab").click();

	})


	$("#nav-menu #recentNews").click(function(){

		loadNewProducts(3);
		showFirstPage();



		$(this).find('.count').animate({'opacity':0},300);
		//selectProduct($('#img-thumbnails img').first())

		$('#img-thumbnails').stop().animate({ scrollTop: 0 },300);
	});
	
	$("#nav-menu #people").click(function(){

		loadNotifications();

		selectProduct($("#img-thumbnails img").first());
		loadNewProducts(4);
		
		showPeoplePage();

		$('#img-thumbnails').stop().animate({ scrollTop: 0 },300);
		$(this).find('.count').animate({'opacity':1},300);


	});

	$("#sizesTab").click(function(){
		hideAllTabs();
		$("#my-sizes-content").show();
	})
	$("#favoritesTab").click(function(){
		hideAllTabs();

		//hide userFavoriteBrands

		//show all brands
		
		//show myFavoriteBrands

		$("#my-favorites-content").show();
	});

	$("#userFavoritesTab").click(function(){
		hideAllTabs();

		loadFavoriteBrands(showProfileUser,1);

		//hide all brands show userFavoriteBrands

		$("#user-favorites-content").show();
	});

	$("#purchasesTab").click(function(){
		hideAllTabs();
		clearNewProducts();
		loadPurchases(me);
		$("#product").removeClass('clear');
		$("#product").show();
		selectProduct($("#img-thumbnails img").first());
	});

	$("#userPurchasesTab").click(function(){
		hideAllTabs();
		clearNewProducts();
		loadPurchases(showProfileUser);
		$("#product").removeClass('clear');
		$("#product").show();
		selectProduct($("#img-thumbnails img").first());
	});

	$("#userLikesTab").click(function(){
		hideAllTabs();
		clearNewProducts();
		loadLikes(showProfileUser);
		$("#product").removeClass('clear');
		$("#product").show();
		selectProduct($("#img-thumbnails img").first());
	});

	$("#pinsTab").click(function(){
		hideAllTabs();
		clearNewProducts();
		loadPins(me);
		$("#product").removeClass('clear');

		$("#product").show();
		selectProduct($("#img-thumbnails img").first());
	});
	$("#userPinsTab").click(function(){
		hideAllTabs();
		clearNewProducts();

		loadPins(showProfileUser);

		$("#product").removeClass('clear');

		$("#product").show();
		selectProduct($("#img-thumbnails img").first());
	});



	$("#container #nav-menu ul > li:last-child").mouseenter(function(){ $("#moreList").css('opacity',1); })
	$("#container #nav-menu ul > li:last-child").mouseleave(function(){ $("#moreList").css('opacity',0); })


	$("#search-container").mouseenter(function(){

		$("#search-container").css('opacity',1);
		$("#container #nav-menu ul> li:first-child").css('opacity',0);


		//$("#search-container #searchInput").val('');
		$("#search-container #searchInput").focus();
		

	});
	$("#search-container").mouseleave(function(){ 
		$("#search-container").css('opacity',0); 
		hideAdvancedSearch(); 
		$("#container #nav-menu ul> li:first-child").css('opacity',1);
	})


	$("#advanced-search").click(toggleAdvancedSearch);


	$("#product #mid #big-image").click(function(event) {


		$("#container #product #zoom-container").css('opacity',1);
		$("#container #product #right #product-details").show();
		$("#container #product #right #product-details").css('opacity',1);



	});

	function hideDetails(event) {
		$("#container #product #zoom-container").css('opacity',0)
		$("#container #product #right #product-details").css('opacity',0);
		//$("#container #product #right #product-details").hide();

	}
	$("#product #left").hover(hideDetails)
	$("#product").mouseleave(hideDetails);


	$("#shopping-cart").mouseenter(function(event) {

		$(this).css('opacity',1)
	});
	$("#shopping-cart").mouseleave(function(event) {

		$(this).css('opacity',0)
	});

	$("#shopping-cart").click(function(e){
		if(cart.length>0){

			hideAllPages();

			$("#user").hide();

			$("#product").addClass('clear');

			clearNewProducts();



			loadCartProducts();
			selectProduct($("#img-thumbnails img").first());

			updateTotalCartPrice();

			$("#product #bottom").hide();
			$("#cartDetails").show();
			$("#product").show();
		}
	});

	$("#product img#big-image").mousemove(function(e){
		var width =$(this).width();
		var height=$(this).height();

		procW = e.offsetX*100/width;
		procH = e.offsetY*100/height;

		$("#container #product #zoom-container").css('background-position',procW +"% "+ procH+"%");
	//console.log(e.offsetX,e.offsetY);
})


	$("#search").keyup(function(){
		var token = $(this).val().toLowerCase();
		console.clear();

		if(token.length>0)

			products.forEach(function(product){

				if(product.name.toLowerCase().indexOf(token)>-1) console.log(product.name); 
			})
	});

	$('#img-thumbnails img').live('mouseenter',function(){
		selectProduct($(this));	
	})



	$("#container #img-thumbnails").scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();

   // Get id of current scroll item
   var cur = $(this).find('img').map(function(){
   	if ($(this).offset().top < fromTop)
   		return this;
   });

   var curId=cur[cur.length-1];

   if($(curId).context){
   	selectProduct($(curId));
   }

});

	$("body").on(mousewheelevt,function(event) {
		var before = containerScroll.scrollTop();
		var toModify = event.originalEvent.wheelDelta/8;

		// console.log(toModify,event.originalEvent.wheelDelta)

		containerScroll.scrollTop(before-toModify);
	});


	$("#listOfPeopleBg").click(function(){
		$(this).hide();
		$("#listOfPeople").hide();
	});

	$("#container #img-thumbnails,#search-container,#listOfPeople,#listOfPeopleBg,#my-sizes-content").on(mousewheelevt,function(e){
		e.stopPropagation();
	});

	$("#bottom #likes,#bottom #pins, #bottom #purchased, #bottom .count").click(function(){

		$("#listOfPeople").show();
		$("#listOfPeopleBg").show();

	})

	$(".sign[action='plus']").live('click',function(){ 
		$(this).attr('class','fa fa-minus sign');
		$(this).attr('action','minus');
		$(this).parent().appendTo("#myFavoriteBrands");
	});
	$(".sign[action='minus']").live('click',function(){ 
		$(this).parent().appendTo("#allBrands");
		$(this).attr('class','fa fa-plus sign');
		$(this).attr('action','plus');
	});

	$(".color").live('click',function(){
		$(".color").each(function(k,v){ v.className='color' });

		$(this).addClass('selected');
	})


	$("#topNavigation .tab").click(function(){
		$("#topNavigation .tab").each(function(k,v){ v.className='tab' });

		$(this).addClass('selected');
	});

})