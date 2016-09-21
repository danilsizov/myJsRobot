/**
 * Created by Goo on 20.09.2016.
 */

function generateMyMap(){
    var quantityOfFigure = getQuantituOfFigure(min, max);
    var figure=[];
    for(var i = 0; i<=quantityOfFigure;i++)
    {
        figure[i]=document.createElement('div');
        figure[i].style.width='200px';
        figure[i].style.height='100px';
        figure[i].style.background='gray';
        figure[i].style.position='relative';
        figure[i].style.top=(Math.floor(Math.random() * (700 - 100 + 1)) + 100) + 'px';
        figure[i].style.left=(Math.floor(Math.random() * (700 - 100 + 1)) + 100) + 'px';
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


