/**
 * Created by Goo on 20.09.2016.
 */

var figure=[];
var dangerArrey=[];
var nowQuanriryOfFigure=0

function generateMyMap(){
    var quantityOfFigure = getQuantituOfFigure(1, 5);
    var map = document.getElementById('main-map');
    deleteFigure(map);
    generateFigure(quantityOfFigure, map);
    nowQuanriryOfFigure=quantityOfFigure;
}

function deleteFigure(map){
    for(var j = 1; j<=nowQuanriryOfFigure; j++)
    {
        figure[j].style.display="none"
        map.removeChild(figure[j])
    }
}

function generateFigure(quantityOfFigure, map) {
    for(var i = 1; i<=quantityOfFigure;i++)
    {
        figure[i]=document.createElement('div');
        figure[i].id='figure'+i;
        figure[i].style.width=(Math.floor(Math.random() * (400 - 200 + 1)) + 200) + 'px';
        figure[i].style.height=(Math.floor(Math.random() * (400 - 200 + 1)) + 200) + 'px';
        figure[i].style.transform="rotate("+ (Math.floor(Math.random() * (360 - 0 + 1)) + 0) + "deg)";
        figure[i].style.background='red';
        figure[i].style.position='absolute';
        figure[i].style.top=(Math.floor(Math.random() * (600 - 10 + 1)) + 10) + 'px';
        figure[i].style.left=(Math.floor(Math.random() * (700 - 10 + 1)) + 10) + 'px';
        map.appendChild(figure[i]);
    }
}


function getQuantituOfFigure(min, max)
{
    if(min<0 || max>10)
    {
        alert('Uncorrect number, enter min > 0 and max <10');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


