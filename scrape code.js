// https://www.amazon.com/Best-Sellers-MP3-Downloads-Hard-Rock-Metal/zgbs/dmusic/195343011

// //load in console

// var jq = document.createElement('script');
// jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(jq);


var aids = [];
 $("div.a-section").children("span.zg-bdg-text").each( function() { 
    var input = $(this).html();
    input = input.substring(1); 
    aids.push(parseInt(input));     
});

var images = [];
$("div.a-section").children("img").each(function() {
            images.push($(this).attr("src") );
});
console.log(images);

var names = [];
$("a.a-link-normal").children("span").children("div").each(function(){
     names.push($(this).text());
})

var artists = [];
$("div._p13n-zg-list-grid-desktop_truncationStyles_p13n-sc-css-line-clamp-1__1Fn1y").each(function(){
     artists.push($(this).text());
})

var prices = [];
$("span.a-size-base").children("span").each(function(){
    var input = $(this).text();
    input = input.substring(1); 
     prices.push(parseInt(input));
})

var albums = [];

$(".a-column").each(function( index ) {
  
var obj = jQuery.parseJSON( '{ "name": "'+names[index]+'", "artist": "'+artists[index]+'", "price": '+prices[index]+',"image": "'+images[index]+'", "aid": '+aids[index]+' }');

albums.push(obj);


});

console.log(albums);




