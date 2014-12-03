$(function(){

	$("#nav-menu li:nth-child(2)").click(function(){
		$('#img-thumbnails').stop().animate({ scrollTop: 0 },300);
		selectProduct($('#img-thumbnails img').first())
	})


	$("#nav-menu #myAccount").click(function(){
		hideAllPages();
		$("#myAccountSettings").show();
	})
	$("#nav-menu #people").click(function(){
		hideAllPages();
		 
	})

	$("#sizesTab").click(function(){
		hideAllTabs();
		$("#my-sizes-content").show();
	})
	$("#favoritesTab").click(function(){
		hideAllTabs();
		$("#my-favorites-content").show();
	})

	$("#styleTab").click(function(){
		hideAllTabs();
		$("#my-style-content").show();
	})


	$("#container #nav-menu ul> li:last-child").mouseenter(function(){ $("#moreList").css('opacity',1); })
	$("#container #nav-menu ul> li:last-child").mouseleave(function(){ $("#moreList").css('opacity',0); })


	$("#searchButton").click(function(){
		$("#search-container").toggle();
		
		$("#search-container #hide").unbind().click(function() {$("#search-container").hide()});
	});


	$("#product #mid #big-image").click(function(event) {
		$("#container #product #zoom-container").css('opacity',1);
		$("#container #product #left #product-details").show();
		$("#container #product #left #product-details").css('opacity',1);

		$("#user").css('margin-top','50px');
		$("#product-details #colors").css('margin-top','50px');

	});
	$("#product #mid").mouseleave(function(event) {
		$("#container #product #zoom-container").css('opacity',0)
		$("#container #product #left #product-details").css('opacity',0);
		$("#container #product #left #product-details").hide();

		$("#user").css('margin-top','130px');
		$("#product-details #colors").css('margin-top','130px');
	});


	$("#shopping-cart").mouseenter(function(event) {

		$(this).css('opacity',1)
	});
	$("#shopping-cart").mouseleave(function(event) {

		$(this).css('opacity',0)
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

	$('#img-thumbnails img').on('mouseenter',function(){
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

  	// console.log($(curId));
  	if($(curId).context){
  		selectProduct($(curId));
  	}

  });

	$("body").on(mousewheelevt,function(event) {
		var before = containerScroll.scrollTop();
		containerScroll.scrollTop(before-event.originalEvent.wheelDelta);
	});




	$("#listOfPeopleBg").click(function(){
		$(this).hide();
		$("#listOfPeople").hide();
	});

	$("#container #img-thumbnails,#listOfPeople,#listOfPeopleBg,#my-sizes-content").on(mousewheelevt,function(e){
		e.stopPropagation();
	});

	$("#bottom #likes,#bottom #pins, #bottom #purchased, #bottom .count").click(function(){

		$("#listOfPeople").show();
		$("#listOfPeopleBg").show();

	})


})