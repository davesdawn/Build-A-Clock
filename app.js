

function displayTime() {
    let dateTime = new Date();
    let period = document.getElementById('period');
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    if(hours >= 12){
        period.innerHTML = 'PM';
        
    }else{
        period.innerHTML ='AM'
    }
    if(hours > 12) {
        hours = hours - 12;
    }
    

    
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('hours').innerHTML = hours;
    //console.log(hours);

}

setInterval(displayTime, 1000)
