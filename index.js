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
// var greetUser = uName.textContent = 'Elton'
displayTime.textContent = timeNow

function getUserName(){
    var text
    var visitorName = prompt("Please enter your name:")
    if (visitorName == null || visitorName ==""){
        text = "Unknown"
    }else{
        text = visitorName
    }
    return text
}

function showTime(){
    if(hh < 12 && 0 < mm <= 59){
        greet.textContent = 'Good Morning, ' + getUserName()
        document.getElementById('contents').style.backgroundImage = 'url("images/bg1.jpg")'
    }else if(hh < 18 && 0 < mm <= 59){
        greet.textContent = 'Good Afternoon, ' + getUserName()
        document.getElementById('contents').style.backgroundImage = 'url("images/afternoon.jpg")'
        document.getElementById('contents').style.color = 'black'
        
    }else if(hh >= 18 && 0 < mm <= 59){
        greet.textContent = 'Good Evening, ' + getUserName()
        document.getElementById('contents').style.backgroundImage = 'url("images/night.jpg")'
        document.getElementById('contents').style.color = 'white'
    }
}

showTime()

function AssignFocus() {
    var enterFocus = prompt("Enter your focus:")
    document.getElementById("writeFocus").innerHTML = enterFocus
}

const btnFocus = document.getElementById("giveFocus")
btnFocus.addEventListener("click",AssignFocus)

// JS FOR DISPLAY QOUTES

var qouteList = ['If I had nine hours to chop down a tree, I’d spend the first six sharpening my axe.','Intelligence is the ability to adapt to change.','The only way to achieve the impossible is to believe it is possible.','No one is perfect - that’s why pencils have erasers.']

var prevIndex

function randomQoute(){
    for (var i = Math.floor(Math.random()* qouteList.length); i != prevIndex;){
        prevIndex = i
    }
    document.getElementById('selectedQoute').innerHTML = qouteList[prevIndex]
    console.log(prevIndex)
}

const btnChangeQoute = document.getElementById('changeQoute')
btnChangeQoute.addEventListener("click",randomQoute)
randomQoute()

function addNewQoute(){
    var personalQoute = prompt("Enter your qoute:")
    qouteList.push(personalQoute)
    console.log(qouteList)
}

var btnaddQoute = document.getElementById("addNewQoute")
btnaddQoute.addEventListener("click",addNewQoute)