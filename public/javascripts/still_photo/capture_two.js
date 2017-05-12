

(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.
  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming2 = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video2 = null;
  var canvas2 = null;
  var photo2 = null;
  var startbutton2 = null;

  function startup() {
    video2 = document.getElementById('video2');
    canvas2 = document.getElementById('canvas2');
    photo2 = document.getElementById('photo2');
    startbutton2 = document.getElementById('startbutton2');

    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video2.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video2.src = vendorURL.createObjectURL(stream);
        }
        video2.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video2.addEventListener('canplay', function(ev){
      if (!streaming2) {
        height = video2.videoHeight / (video2.videoWidth/width);

        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.

        if (isNaN(height)) {
          height = width / (4/3);
        }

        video2.setAttribute('width', width);
        video2.setAttribute('height', height);
        canvas2.setAttribute('width', width);
        canvas2.setAttribute('height', height);
        streaming2 = true;
      }
    }, false);

    startbutton2.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context2 = canvas2.getContext('2d');
    context2.fillStyle = "#AAA";
    context2.fillRect(0, 0, canvas2.width, canvas2.height);

    var data2= canvas2.toDataURL('image/png');
    photo2.setAttribute('src', data2);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context2 = canvas2.getContext('2d');
    if (width && height) {

      canvas2.width = width;
      canvas2.height = height;
      context2.drawImage(video, 0, 0, width, height);

      var data2 = canvas2.toDataURL('image/png');
      photo2.setAttribute('src', data2);
      var socket2 = io.connect();

      socket2.emit("took_photo_two", {'took_photo_two':data2});
    } else {
      clearphoto();
    }//else


  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
