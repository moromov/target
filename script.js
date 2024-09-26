var count = prompt("Количесво выстрелов:") - 0;
var isRandom = prompt("Стрелять случайно?") == "y";

shotToTarget(count, isRandom);

function rand(min,max){
    return Math.random() * (max - min) + min
}

function rand2(){
    var o = Math.floor(Math.random() * (0.005- (-0.005)) + 0.005);
    return o;
}

function shotToTarget(count,isRandom){
    var points = 0;
    for(var i = 0; i < count; i++){
        var x = isRandom?rand(-1,1):prompt("x:")
        var y = isRandom?rand(-1,1):prompt("y:")
        points += shot(x,y);
        console.log("Промежуточная сумма очков: ", points);
    }
console.log("Конечная сумма очков: ", points);
return points;
}

function shotToPoint(x,y){
    if (x + rand2() == 0 && y + rand(2) + 0 == 0){
        return 6;
    }
    else{
        return 0;
    }
}

function shotToStar(x,y){
    if((Math.abs(y + rand2())) <= 2 / (Math.abs(x + rand2()) + 1) - 1 && Math.max(Math.abs(y + rand2()),Math.abs(x + rand2())) <= 1){
        return 1;
    }else{
        return 0;
    }
}


function shotToRhomb(x,y){
    if (Math.abs(x + rand2()) + Math.abs(y + rand2())<=1){
        return 1;
    }
    else{
        return 0;
    }
}

function shotToCircle(x,y){
    if (Math.sqrt((x + rand2())**2 + (y + rand2())**2)<= 1){
        return 1;
    }
    else{
        return 0;
    }
}

function shotToSquare(x,y){
    if ((x + rand2())<=1 && (x + rand2())>=-1 && (y + rand2())>=-1 && (y + rand2())<=1){
        return 1;
    }
    else{
        return 0;
    }
}

function shot(x,y){
    console.log(x,y);
    var checkTarget = 0;
    checkTarget = shotToSquare(x,y) + shotToCircle(x,y) + shotToRhomb(x,y) + shotToStar(x,y) + shotToPoint(x,y);
    return checkTarget;
}

function foolTest(count){
    if (count == 0) {
        console.log("Выстрелов не будет");
        return 1
    }else{
        return 0
    }
}
