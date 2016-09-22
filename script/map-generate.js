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
        figure[i].style.width=getRandomSize(200,50) + 'px';
        figure[i].style.height=getRandomSize(200,50) + 'px';
        figure[i].style.transform="rotate("+ getRandomSize(360,0) + "deg)";
        figure[i].style.background='red';
        figure[i].style.position='absolute';
        figure[i].style.top=getRandomSize(600,10) + 'px';
        figure[i].style.left=getRandomSize(700,10) + 'px';
        map.appendChild(figure[i]);
    }
}


function getRandomSize(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getQuantituOfFigure(min, max)
{
    if(min<0 || max>10)
    {
        alert('Uncorrect number, enter min > 0 and max <10');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


