var currentTime = new Date()
var timeNow = currentTime.getHours() + ":" + currentTime.getMinutes()

var displayTime = document.getElementById('currentTime')
var greet = document.getElementById('greeting')
displayTime.textContent = timeNow

if(timeNow > 12){
    greet.textContent = 'Good Morning'
}else if(timeNow == 12){
    greet.textContent = 'Have your Lunch'
}else if(timeNow > 12 || timeNow < 18 ){
    greet.textContent = 'Good Afternoon'
}else if(timeNow < 18){
    greet.textContent = 'Good Evening'
}
