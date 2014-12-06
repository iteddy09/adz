// tooltips
$("#bottom .item:nth-child(1) .count").tipsy({gravity: 's',title: getList,html:true,fade:true});
$("#bottom .item:nth-child(2) .count").tipsy({gravity: 's',title: getList,html:true,fade:true});
$("#bottom .item:nth-child(3) .count").tipsy({gravity: 's',title: getList,html:true,fade:true});

$("#bottom #likes").tipsy({gravity: 's',title: getLongList,html:true,fade:true});
$("#bottom #pins").tipsy({gravity: 's',title: getLongList,html:true,fade:true});
$("#bottom #purchased").tipsy({gravity: 's',title: getLongList,html:true,fade:true});

$("#nav-menu li").tipsy({gravity: 'w',fade:true,html:true});
$("#shoppingBagIcon").tipsy({gravity: 'w',fade:true,html:false});