/**
 * Created by Goo on 20.09.2016.
 */

var rotateSlider = document.getElementById('rotate');
var rotateResult = document.getElementById('result-rotate');
var stepSlider = document.getElementById('step');
var stepResult = document.getElementById('result-step');
var radius = document.getElementById('radius');
var chapy = document.getElementById('character')
var start=0;
var myY=680;
var myX=350;
var newY;
var newX;
var myDegree;

noUiSlider.create(rotateSlider, {
    start: 0,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 360
    }
});

noUiSlider.create(stepSlider, {
    start: 0,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

rotateSlider.noUiSlider.on('update', function( values, handle ){
    chapy.style.transition="0s";
    radius.style.transition="0s"
    rotateResult.innerHTML = values[handle];
    myDegree=values[handle];
    chapy.style.transform="rotate("+ values[handle] + "deg)"
});

stepSlider.noUiSlider.on('update', function( values, handle ){

    chapy.style.transition="0s";
    radius.style.transition="0s"
    start=values[handle]
    stepResult.innerHTML = values[handle];
    radius.style.top="-" + values[handle] + "px";
    radius.style.height="" + values[handle] + "px"
});

function goToPoint(){
    newY=Math.cos(myDegree*(Math.PI/180))*start;
    newX=Math.sin(myDegree*(Math.PI/180))*start;

    if(scanFrontSide(myY-newY, myX+newX)){                            //In scan.js
        chapy.style.transition="1s";
        radius.style.transition="1s";
        chapy.style.top= myY - newY + "px";
        chapy.style.left= myX + newX + "px";
        myY=myY - newY;
        myX=myX + newX;
        radius.style.top="0px";
        radius.style.height="0px";
    }
    else{
        alert("if You move, robot destroed")
    }
}
