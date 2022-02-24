var currentTime = new Date()
var hh = currentTime.getHours()
var mm = currentTime.getMinutes()
var ss = currentTime.getSeconds()
if(mm < 10){
    mm = '0'+mm
}

var timeNow = `${hh}:${mm}`

var displayTime = document.getElementById('currentTime')
var greet = document.getElementById('greeting')
var uName = document.querySelector('#userName')
// var greetUser = uName.textContent = 'Elton'
displayTime.textContent = timeNow


function getUserName(){
    var text
    var visitorName = prompt("Please enter your name:")
    // var visitorName = 'Elton'
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
        document.getElementById('contents').style.backgroundColor = 'rgba(255, 255, 255, .6)'
        document.getElementsByTagName('body')[0].style.backgroundImage = 'url("images/bg1.jpg")'
    }else if(hh < 18 && 0 < mm <= 59){
        greet.textContent = 'Good Afternoon, ' + getUserName()
        document.getElementById('contents').style.color = 'black'
        document.getElementById('contents').style.backgroundColor = 'rgba(255, 255, 255, .6)'
        document.getElementsByTagName('body')[0].style.backgroundImage = 'url("images/afternoon.jpg")'
        
    }else if(hh >= 18 && 0 < mm <= 59){
        greet.textContent = 'Good Evening, ' + getUserName()
        document.getElementById('contents').style.backgroundColor = 'rgba(255, 255, 255, .6)'
        document.getElementsByTagName('body')[0].style.backgroundImage = 'url("images/night.jpg")'
        greet.style.color = "white"
    }
}

showTime()

function AssignFocus() {
    var enterFocus = document.getElementById('TBFocus').value
    // document.getElementById("writeFocus").textContent = enterFocus
    if(enterFocus == null || enterFocus == ""){
        alert("Please enter your focus")
    }else{
        document.getElementById("writeFocus").textContent = enterFocus
        toggleFocus()
    }
}

const btnShowFocus = document.getElementById("btnAddFocus")
btnShowFocus.addEventListener("click",AssignFocus)

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
    var personalQoute = document.getElementById('TBqoute').value
    if(personalQoute == null || personalQoute == ""){
        alert('Please enter a qoute')
    }else{
        qouteList.push(personalQoute)
        console.log(qouteList)
        document.getElementById('selectedQoute').textContent = personalQoute
        toggleQoute()
    }
}

var btnaddQoute = document.getElementById("btnAddQoute")
btnaddQoute.addEventListener("click",addNewQoute)


// JS for to do list

function addToDo(){
    var todoItem = document.getElementById('TBtodo').value
    if (todoItem == null || todoItem == ""){
        alert('Please enter somethin to do')
    }else{
        var ul = document.getElementById('todoUL')
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(todoItem))
        ul.appendChild(li)
        toggleTodo()
    }
}

var btnAddToDO = document.getElementById('btnAddTodo')
btnAddToDO.addEventListener("click",addToDo)

// JS for toggles

function toggleFocus(){
    const tglFocus = document.getElementById('toggleFocus')
    if(tglFocus.style.display === 'flex'){
        tglFocus.style.display = 'none'
        document.getElementById('giveFocus').textContent = 'Enter Focus'
        document.getElementById('TBFocus').value = ""
    }else{
        tglFocus.style.display = 'flex'
        document.getElementById('giveFocus').textContent = 'Cancel'
    }
}

const btnFocus = document.getElementById("giveFocus")
btnFocus.addEventListener("click",toggleFocus)

function toggleQoute(){
    const tglQoute = document.getElementById('toggleQoute')
    if(tglQoute.style.display === 'flex'){
        tglQoute.style.display = 'none'
        document.getElementById('addNewQoute').textContent = 'Add new qoute'
        document.getElementById('TBqoute').value = ""
    }else{
        tglQoute.style.display = 'flex'
        document.getElementById('addNewQoute').textContent = 'Cancel'
    }
}

const btnQoute = document.getElementById('addNewQoute')
btnQoute.addEventListener("click",toggleQoute)

function toggleTodo(){
    const tglTodo = document.getElementById('toggleToDo')
    if (tglTodo.style.display === 'flex'){
        tglTodo.style.display = 'none'
        document.getElementById('updateToDo').textContent = 'Add to do'
        document.getElementById('TBtodo').value = ""
    }else{
        tglTodo.style.display = 'flex'
        document.getElementById('updateToDo').textContent = 'Cancel'
    }
}

const btnToDo = document.getElementById('updateToDo')
btnToDo.addEventListener("click",toggleTodo)