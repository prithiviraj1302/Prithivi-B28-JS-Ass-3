function clock()


{
    let secdots = document.getElementById('secdots');
let mindots = document.getElementById('mindots');
let hrdots = document.getElementById('hrdots');

var date=new Date();
var hours=date.getHours() % 12
var ampm=date.getHours() >=12 ? 'PM' : 'AM';
hours = hours === 0 ? 12 : hours;

var minutes = date.getMinutes();
var seconds = date.getSeconds();

var secondsdots = '';
for(var i = 1; i < 61; i++){
    var rotation = i * 6;
    if(i === seconds){
        secondsdots += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
    }
    else{
        secondsdots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
    }
}

var minutesdots = '';
for(var i = 1; i < 61; i++){
    var rotation = i * 6;
    if(i === minutes){
        minutesdots += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
    }
    else{
        minutesdots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
    }
}

var hoursdots = '';
for(var i = 1; i < 13; i++){
    var rotation = i * 30;
    if(i === hours){
        hoursdots += '<div class="dot active"style="transform: rotate('+rotation+'deg)"></div>';
    }
    else{
        hoursdots += '<div class="dot"style="transform: rotate('+rotation+'deg)"></div>';
    }
}

secdots.innerHTML = secondsdots + '<b>' + ampm + '</b>' + '<h2>'+ zero(seconds) + '<br><span>Seconds</span></h2>';
mindots.innerHTML = minutesdots +  '<h2>'+ zero(minutes) + '<br><span>Minutes</span></h2>';
hrdots.innerHTML = hoursdots +  '<h2>'+ zero(hours) + '<br><span>Hours</span></h2>';
}

function zero(number){
    if (number < 10){
        return '0' + number;
    }
    return number;
}
setInterval(clock,1000);