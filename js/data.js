var brands= [
	{name:'Bershka', imageName:'bershka'}, //0
	{name:'Pull&Bear', imageName:'pull&bear'}, //1
	{name:'ZARA', imageName:'zara'}, //2
	{name:'Abercrombie', imageName:'abercrombie'}, //3
	{name:'Armani', imageName:'armani'}, //4
	{name:'Nike', imageName:'nike'}, //5
	{name:'Converse', imageName:'converse'}, //6
	{name:'Benetton', imageName:'benetton'}, //7
	{name:'Diesel', imageName:'diesel'}, //8
	{name:'Gap', imageName:'gap'}, //9
	{name:'Gucci', imageName:'gucci'}, //10
	{name:'Lacoste', imageName:'lacoste'}, //11
	{name:'Levis', imageName:'levis'}, //12
	{name:'Louis Voiuton', imageName:'louis_voiuton'}, //13
	{name:'Ralph Lauren', imageName:'ralph_lauren'}, //14
	{name:'Timerland', imageName:'timberland'}, //15
	{name:'Tommy Hilfiger', imageName:'tommy'} //16
];

var cart=[];

var currentProduct ;
var notificationsPage = false;
var isOpenAdvancedSearch = false;

var products = [
	{'id':0,'name':'Rochie ','brand':brands[6], 'material': 'wool' ,'price': 535.99, 'purchased':65243, 'likes':428, 'pins':325 , 'image':'img/products/Zara-ruffle-dress-012.png','new':false},
	{'id':1,'name':'Tricou','brand':brands[11], 'material': 'cotton' ,'price': 36.99, 'purchased':747, 'likes':45, 'pins':531 , 'image':'img/products/lacoste.png','new':false},
	{'id':2,'name':'Tricou ','brand':brands[1], 'material': 'wool' ,'price': 66.99, 'purchased':532, 'likes':21, 'pins':315 , 'image':'img/products/pull&bear.png','new':false},
	{'id':3,'name':'Bluza','brand':brands[2], 'material': 'cotton' ,'price': 136.99, 'purchased':643, 'likes':426, 'pins':321 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/4043/269/802/2/w/560/4043269802_2_1_1.jpg?ts=1413534241511','new':false},
	{'id':4,'name':'Rochie ','brand':brands[5], 'material': 'synthetic' ,'price': 82.99, 'purchased':12, 'likes':4235, 'pins':373 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/0787/224/800/2/w/560/0787224800_2_1_1.jpg?ts=1415354801372','new':false},
	{'id':5,'name':'Tricou ','brand':brands[3], 'material': 'silk' ,'price': 336.99, 'purchased':754, 'likes':654, 'pins':125 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/5646/901/807/2/w/560/5646901807_2_1_1.jpg?ts=1415986197063','new':false},
	{'id':6,'name':'Bluza','brand':brands[2], 'material': 'cotton' ,'price': 136.99, 'purchased':643, 'likes':426, 'pins':321 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/4043/269/802/2/w/560/4043269802_2_1_1.jpg?ts=1413534241511','new':false},
	{'id':7,'name':'Rochie','brand':brands[2], 'material': 'silk' ,'price': 836.99, 'purchased':75, 'likes':484, 'pins':643 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/8159/862/800/2/w/560/8159862800_2_2_1.jpg?ts=1412359897726','new':false},
	{'id':8,'name':'Rochie','brand':brands[2], 'material': 'silk' ,'price': 836.99, 'purchased':75, 'likes':484, 'pins':643 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/8159/862/800/2/w/560/8159862800_2_2_1.jpg?ts=1412359897726','new':false},
	{'id':9,'name':'Rochie ','brand':brands[0], 'material': 'wool' ,'price': 535.99, 'purchased':65243, 'likes':428, 'pins':325 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/1434/243/600/2/w/560/1434243600_2_1_1.jpg?ts=1415365043961','new':false},
	{'id':10,'name':'Rochie ','brand':brands[0], 'material': 'wool' ,'price': 535.99, 'purchased':65243, 'likes':428, 'pins':325 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/1434/243/600/2/w/560/1434243600_2_1_1.jpg?ts=1415365043961','new':false},
	{'id':11,'name':'Rochie ','brand':brands[0], 'material': 'wool' ,'price': 535.99, 'purchased':65243, 'likes':428, 'pins':325 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/1434/243/600/2/w/560/1434243600_2_1_1.jpg?ts=1415365043961','new':false},
	{'id':12,'name':'Rochie ','brand':brands[0], 'material': 'wool' ,'price': 535.99, 'purchased':65243, 'likes':428, 'pins':325 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/1434/243/600/2/w/560/1434243600_2_1_1.jpg?ts=1415365043961','new':false},
	{'id':13,'name':'Tricou ','brand':brands[3], 'material': 'silk' ,'price': 336.99, 'purchased':754, 'likes':654, 'pins':125 , 'image':'http://static.zara.net/photos//2014/I/0/1/p/5646/901/807/2/w/560/5646901807_2_1_1.jpg?ts=1415986197063'}
];




var people = [
	{	id:0,
		name:'Alexandru Stefan',
		avatar:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c27.0.160.160/p160x160/1013277_452272794893818_1300799417_n.jpg?oh=6333349ecaf3af8cf881693c83114cd7&oe=551DAC29&__gda__=1425883984_1fce4720f51fecc4ca0d391ec9b0716c',
		look:389,
		looking:213,
		favorite_brands: [brands[2],brands[3],brands[5]],
		purchased: [products[0],products[1],products[2]],
		pinned:[products[2],products[3],products[4]],
		liked:[products[2],products[4],products[7]],
		 
	},
	{	id:1,
		name:'Cosmin Mihale',
		avatar:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/10177408_856010991078210_4403224250261846668_n.jpg?oh=6a09ad07c283d210eb0518433f4e8aea&oe=55028BA0&__gda__=1425830684_25544cf4b76f2f06e443a6b4873ebb72',
		look:643,
		looking:125,
		favorite_brands: [brands[5],brands[1],brands[7]],
		purchased: [products[0],products[1],products[2]],
		pinned:[products[2],products[3],products[4]],
		liked:[products[2],products[4],products[7]],
 
	},
	{	id:2,
		name:'Nitu Mihai',
		avatar:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c127.57.707.707/s160x160/1174747_541653462556060_938666850_n.jpg?oh=708077f7a33fe2a8207c97f73b09108b&oe=550C048E&__gda__=1428136195_f9784150907c18e2a55975b86069c72d',
		look:125,
		looking:12,
		favorite_brands: [brands[0],brands[7],brands[2]],
		purchased: [products[3],products[4],products[5]],
		pinned:[products[1],products[5],products[6]],
		liked:[products[2],products[4],products[7]]
	},
	{	id:3,
		name:'Maria Nicola',
		avatar:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/10405293_715059208549771_6430906741403988580_n.jpg?oh=2d779d2d5ac10de8a8a28e7c127c642f&oe=5501CC5E&__gda__=1426499042_e1f5649e2f450f66d295b84e674e83bc',
		look:236,
		looking:52,
		favorite_brands: [brands[2],brands[6],brands[5]],
		purchased: [products[0],products[1],products[2]],
		pinned:[products[2],products[3],products[4]],
		liked:[products[2],products[4],products[7]]
	},
	{	id:4,
		name:'Sorin Frasineanu ',
		avatar:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.160.160/p160x160/10268641_754773831220725_3697893903283257660_n.jpg?oh=184b9f1b6b90902e735019091201ab7b&oe=55038E24&__gda__=1427712564_3207e8be6edccae636ee95c8ca15ed12',
		look:301,
		looking:13,
		favorite_brands: [brands[0],brands[8],brands[2]],
		purchased: [products[0],products[1],products[2]],
		pinned:[products[2],products[3],products[4]],
		liked:[products[2],products[4],products[7]]
	}
];

var actions=[
	{name:'Pin',message:'<i class="fa fa-thumb-tack"></i> pinned</span> this product.'},
	{name:'Like',message:'<i class="fa fa-thumbs-o-up"></i> liked</span> this product.'},
	{name:'Purchase',message:'<img src="img/shopping-bag.png" alt="" style="border-radius:0" width="15"> purchased</span> this product.'},
	{name:'Upload',message:'<img src="img/shopping-bag.png" alt="" style="border-radius:0" width="15"> uploaded</span> this photo.'}
];

var notifications = [
	{person: people[0], action: actions[0], product: products[3]},
	{person: people[1], action: actions[1], product: products[0]},
	{person: people[2], action: actions[2], product: products[1]},
	{person: people[3], action: actions[1], product: products[3]},
	{person: people[2], action: actions[2], product: products[4]},
	{person: people[0], action: actions[2], product: products[5]},
	{person: people[3], action: actions[1], product: products[6]},
	{person: people[4], action: actions[0], product: products[8]},
	{person: people[2], action: actions[1], product: products[7]},
	{person: people[0], action: actions[2], product: products[0]},
	{person: people[3], action: actions[0], product: products[1]},
	{person: people[3], action: actions[1], product: products[6]},
	{person: people[4], action: actions[1], product: products[3]},
	{person: people[3], action: actions[2], product: products[5]}
];

var me = people[0];
var showProfileUser ;