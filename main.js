canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

pigeon_width = 100;
pigeon_height = 90;
background_image = "sky_canvas.jpg";
pigeon_image = "pigeon.png";

pigeon_x = 100;
pigeon_y = 150;

function add()
{
 background_imgTag = new Image();
 background_imgTag.onload = uploadbackground;
 background_imgTag.src = background_image;

 pigeon_imgTag = new Image();
 pigeon_imgTag.onload = uploadpigeon;
 pigeon_imgTag.src = pigeon_image;
}

function uploadbackground()
{
 ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadpigeon()
{
 ctx.drawImage(pigeon_imgTag, pigeon_x, pigeon_y, pigeon_width, pigeon_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '40')
    {
        down();
        console.log("down");
    }

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '39')
    {
        down();
        console.log("down");
    }
}