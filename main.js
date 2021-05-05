canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

roverWidth = 100;
roverHeight = 90;

background_image = "black-asphalt-texture-background-top-view_144130-1.jpg";

rover_image = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}





window.addEventListener("keydown", my_keydown);


function my_keydown(e) { keyPressed = e.keyCode; console.log(keyPressed);
     if(keyPressed == '38') 
     { up();
     console.log("up"); } 
     if(keyPressed == '40') 
     { down(); console.log("down"); }
      if(keyPressed == '37') 
      { left(); console.log("left"); } 
      if(keyPressed == '39')
       { right(); console.log("right"); } }

       function up() {
           if (roverY >= 0) {
            roverY = roverY - 10;
            console.log("When up arrow is pressed =" + roverX + " - "+ roverY);
            uploadBackground();
            uploadrover();
           }

       }

       function down() {
           if (roverY <= 600) {
               roverY = roverY + 10;
               console.log("When down arrow is pressed =" + roverX + " - " + roverY);
               uploadBackground();
               uploadrover();
           }
       }

       function right() {
           if (roverX >= 0) {
               roverX = roverX + 10;
               console.log("When right arrow is pressed =" + roverX + " + " + roverY);
               uploadBackground();
               uploadrover();
           }
       }

       function left() {
           if (roverX <= 800) {
               roverX = roverX - 10;
               console.log("When left arrow is pressed =" + roverX + " + " + roverY);
               uploadBackground();
               uploadrover();
           }
       }