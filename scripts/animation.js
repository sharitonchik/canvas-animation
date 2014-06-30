/**
 * Created by sergey on 4/9/14.
 */

var width = 100,
    height = 100,
    marginStart = 500,
    frames = 4,
    currentFrame = 0,

    canvas = document.getElementById('walk');

var context = canvas.getContext('2d');
var image = new Image();

image.src = '/images/sprite.png';
canvas.style.margin = "auto " + marginStart + 'px';
var draw = function () {
    context.clearRect(0, 0, width, height);
    context.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

    if (currentFrame == frames) {
        currentFrame = 0;
    } else {
        currentFrame++;
    }
    marginStart -= 15;
    if(marginStart < -20){
        marginStart = window.screen.width;
    }
    canvas.style.margin = "auto " + marginStart + 'px';

    console.log('marginStart', canvas.style.margin);
};

setInterval(draw, 75);


