function add() {
    background_imgTag = new Image(); //definining a variable with a new image 
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image 
    
    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src  = rover_image; // load image
    
}
 function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
 }
function uploaddrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
        {
            up();
            console.log("up")
        }
    if(keyPressed == '40')
        {
            up();
            console.log("down")
        }
    if(keyPressed == '37')
        {
            up();
            console.log("left")
        }
    if(keyPressed == '39')
        {
            up();
            console.log("right")
        }
}

function up() 
{
    if(rover_y >=0)
        {
            rover_y -= 10;
            console.log("When up arrow is pressed = " + rover_x + "-" +rover_y);
            uploadBackground();
            uploadwater();
            uploaddrover();
        }
}

function down() 
{
    if(rover_y <=500)
        {
            rover_y -= 10;
            console.log("When up arrow is pressed, x = " + rover_x + "| y = "+rover_y);
            uploadBackground();
            uploadwater();
            uploaddrover();
        }
}

function left() 
{
    if(rover_y >= 0)
        {
            rover_y -= 10;
            console.log("When up arrow is pressed x = " + rover_x + " | y = " +rover_y);
            uploadBackground();
            uploadwater();
            uploaddrover();
        }
}

function right() 
{
    if(rover_y <=700)
        {
            rover_y -= 10;
            console.log("When up arrow is pressed x = " + rover_x + "| y = " +rover_y);
            uploadBackground();
            uploadwater();
            uploaddrover();
        }
}



