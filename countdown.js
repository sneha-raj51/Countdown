const endDate = new Date("29 Sep , 2024 20:00:00").getTime();
const startDate = new Date().getTime();

 let x= setInterval(function updateTimer(){
const currentDate = new Date().getTime();
const distanceCover = currentDate-startDate;
const distancePending = endDate-currentDate;

//calculate days , hours , minutes , seconds
// 1 day = 24*60*60*1000ms
const oneDayInMillis = (24*60*60*1000);
const oneHourInMillis = (60*60*1000);
const oneMinuteInMillis = (60*1000);
const oneSecondInMillis = (1000);

const days= Math.floor(distancePending / (oneDayInMillis));
const hrs =  Math.floor(distancePending %(oneDayInMillis) / (oneHourInMillis));
const min = Math.floor(distancePending %(oneHourInMillis) / (oneMinuteInMillis));
const sec = Math.floor(distancePending %(oneMinuteInMillis) / (oneSecondInMillis));

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hrs;
document.getElementById("minutes").innerHTML=min;
document.getElementById("seconds").innerHTML=sec;

// calculate width % for progress bar
const totalDistance = endDate-startDate;
const percentageDistance = (distanceCover/totalDistance ) * 100;
document.getElementById("progress-bar").style.width = percentageDistance +"%";

if(distancePending<0){
    clearInterval();
    document.getElementById("countdown").innerHTML="EXPIRED";
    document.getElementById("progress-bar").style.width="100%";

}
}

, 1000);