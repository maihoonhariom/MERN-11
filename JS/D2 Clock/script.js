var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");


function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60 ) * 360 )+90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360 );

    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30);

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(setDate,1000);