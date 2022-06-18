var canvas = new fabric.Canvas("myCanvas");
var song = document.getElementById("myAudio");
var image;

function loadImage()
{
  fabric.Image.fromURL("BirthdayImage.jpg", function(img) {
    image = img;

    img.scaleToWidth(700);
    img.scaleToHeight(510);
    img.set({
      top: 0,
      left: 0
    });

    canvas.add(image);
  })
}

function playSound(){
	song.play();
}
