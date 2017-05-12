
// step 1
var socket = io.connect();
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
var img = new Image();
//var centerX = canvas.width / 2;
//var centerY = canvas.height / 2;


// step 2
socket.on('image', function (data) {

  //console.log("data"+data);
/*
if(

  $("#view­box").children().length==0){
// step 3
$("#view­box").prepend('<img src=' + data.buffera + ' />');
}else{
// step 4
$("#view­box").find('img').attr('src', data.buffera);
}
*/


if(

  $("#view­box").children().length==0){
// step 3
$("#view­box").prepend('<img src= data:image/png;base64,' + data.buffera + ' />');
}else{
// step 4
$("#view­box").find('img').attr('src', 'data:image/png;base64,' + data.buffera);
}


/*
if(

  $("#view­box").children().length==0){
// step 3
$("#view­box").prepend('<img src=' + data.image_location + ' />');
}else{
// step 4
$("#view­box").find('img').attr('src', data.image_location);
}
*/



/*console.log(""+data.image_location);

 img.src = data.image_location;
 context.drawImage(img, canvas.width,  canvas.height);
img.onload = function () {

            context.drawImage(img, canvas.width,  canvas.height);

        };
*/


//console.log(JSON.stringify(data) +'');

/*
console.log(JSON.stringify(data.buffer_out) +'');

	var uint8Arr = new Uint8Array(data.buffer_out);
    var str = String.fromCharCode.apply(null, uint8Arr);
    var base64String = btoa(str);

    img.src = 'data:image/png;base64,' + base64String;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);


  img.onload = function () {
    context.drawImage(this, 0, 0, canvas.width, canvas.height);
  };
  img.src = 'data:image/png;base64,' + base64String;
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
*/



/*
  var uint8Arr = new Uint8Array(data.buffer);

  console.log( 'buffer: '+data.buffer);

  var str = String.fromCharCode.apply(null, uint8Arr);
  var base64String = btoa(str);

  img.onload = function () {
    context.drawImage(this, 0, 0, canvas.width, canvas.height);
  };

  img.src = 'data:image/png;base64,' + base64String;
  */

/*
if(

	$("#view_box").children().length==0){

// step 3
$("#view_box").prepend('<source src="'+data.image_location+'" type="video/webm" >');

}else{

// step 4
$("#view_box").find('source').attr('src', data.image_location);

}//else*/

});
