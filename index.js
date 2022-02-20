var currentTime = new Date()
var hh = currentTime.getHours()
var mm = currentTime.getMinutes()
if(mm < 10){
    mm = '0'+mm
}

var timeNow = hh+ ":" + mm

var displayTime = document.getElementById('currentTime')
var greet = document.getElementById('greeting')
var uName = document.querySelector('#userName')
var greetUser = uName.textContent = 'Elton'
displayTime.textContent = timeNow

if(hh < 12 && 0 < mm <= 59){
    greet.textContent = 'Good Morning, ' + greetUser
    document.getElementById('contents').style.backgroundImage = 'url("images/bg1.jpg")'
}else if(hh < 18 && 0 < mm <= 59){
    greet.textContent = 'Good Afternoon, ' + greetUser
    document.getElementById('contents').style.backgroundImage = 'url("images/afternoon.jpg")'
    document.getElementById('contents').style.color = 'black'
    
}else if(hh >= 18 && 0 < mm <= 59){
    greet.textContent = 'Good Evening, ' + greetUser
    document.getElementById('contents').style.backgroundImage = 'url("images/night.jpg")'
    document.getElementById('contents').style.color = 'white'
}
