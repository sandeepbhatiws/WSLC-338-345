
function digitalClock(){
    var date = '15 December 2024 04:00 PM';
    var date = new Date(date);
    var currentDate = new Date();

    var difference = date - currentDate;
    var allSeconds = difference/1000;

    // 1 day = 24 hours
    // 1hr = 60 minutes
    // 60 minutes = 3600

    if(difference > 0){
        
        console.log((allSeconds/60) % 60);

        days = Math.floor(allSeconds/3600/24);
        hours = Math.floor((allSeconds/3600) % 24 );
        minutes = Math.floor((allSeconds/60) % 60);
        seconds = Math.floor(allSeconds % 60);
    } else {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    document.querySelector('.days').innerHTML = days+' Days';
    document.querySelector('.hours').innerHTML = hours+' Hours';
    document.querySelector('.minutes').innerHTML = minutes+' Minutes';
    document.querySelector('.seconds').innerHTML = seconds+' Seconds';
}

setInterval(digitalClock,1000);


digitalClock();



// console.log(allSeconds);