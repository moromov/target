var count = prompt("Количесво выстрелов:") - 0;
var isRandom = prompt("Стрелять случайно?") == "yes";

function recoil(){
    var recoil = isRandom ? prompt('Диапазон'): recoil = 0;
    
}

shotToTarget(count, isRandom);

function shotToPoint(x,y) {
    return (x === 0 && y === 0) ? 10:0;
}

function shotToCirle(x,y) {
    return (Math.sqrt(x**2 + y ** 2) <= 1) ? 2 : 0;
}

function shotToRectangle(x,y){
    return (Math.abs(x) <= 1 && Math.abs(y) <= 1) ? 1:0;
}

function shotToStar(x,y){
    return (Math.abs(y)) <= 2 / (Math.abs(x) + 1) - 1 && Math.max(Math.abs(y),Math.abs(x)) <= 1 ? 4:0
}

function shotToRomb(x,y){
    return (Math.abs(x) + Math.abs(y) <= 1) ? 3:0;
}

function shot(x,y){
    return shotToPoint(x,y) || 
    shotToStar(x,y) ||
    shotToRomb(x,y) ||
    shotToCirle(x,y) ||
    shotToRectangle(x,y);
}

function rand(min,len){
    return Math.random() * len + min
}

function shotToTarget(count, isRandom){
    var points = 0;

    for (var i = 0; i<count; i++){
        var x = isRandom ? rand(-2,4):prompt('Введи x')-0;
        var y = isRandom ? rand(-2,4):prompt('Введи y') -0;
        points += shot(x,y);
    }
    return points;
}

console.log(shotToTarget(count,isRandom));var count = prompt("Количесво выстрелов:") - 0;
var isRandom = prompt("Стрелять случайно?") == "yes";

function recoil(){
    var recoil = isRandom ? prompt('Диапазон'): recoil = 0;
    
}

shotToTarget(count, isRandom);

function shotToPoint(x,y) {
    return (x === 0 && y === 0) ? 10:0;
}

function shotToCirle(x,y) {
    return (Math.sqrt(x**2 + y ** 2) <= 1) ? 2 : 0;
}

function shotToRectangle(x,y){
    return (Math.abs(x) <= 1 && Math.abs(y) <= 1) ? 1:0;
}

function shotToStar(x,y){
    return (Math.abs(y)) <= 2 / (Math.abs(x) + 1) - 1 && Math.max(Math.abs(y),Math.abs(x)) <= 1 ? 4:0
}

function shotToRomb(x,y){
    return (Math.abs(x) + Math.abs(y) <= 1) ? 3:0;
}

function shot(x,y){
    return shotToPoint(x,y) || 
    shotToStar(x,y) ||
    shotToRomb(x,y) ||
    shotToCirle(x,y) ||
    shotToRectangle(x,y);
}

function rand(min,len){
    return Math.random() * len + min
}

function shotToTarget(count, isRandom){
    var points = 0;

    for (var i = 0; i<count; i++){
        var x = isRandom ? rand(-2,4):prompt('Введи x')-0;
        var y = isRandom ? rand(-2,4):prompt('Введи y') -0;
        points += shot(x,y);
    }
    return points;
}

console.log(shotToTarget(count,isRandom));
