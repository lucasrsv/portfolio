
var typeWriterCalled = false
var i = 0
var txt = 'Olá, seja bem vindo(a)!' /* The text */
var speed = 125 /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (!typeWriterCalled){
        if (i < txt.length) {
            document.getElementById("text").innerHTML += txt.charAt(i)
            i++
            setTimeout(typeWriter, speed)
        } else {
            typeWriterCalled = true
            document.getElementById("headerNavBar").style.display = "block"
            buttonsClick()
        }
    }
}

function welcomeTitle() {
    document.getElementById("text").innerHTML = 'Olá, seja bem vindo(a)!'
    document.getElementById("headerNavBar").style.display = "block"
    buttonsClick()
}

function buttonsClick() {
    var buttons = document.getElementsByClassName("headerLi")
    for (i in buttons) {
        if (i == 0) {
            buttons[i].onclick = function() {
                window.location="#intro"
            }
        } else if (i == 1) {
            buttons[i].onclick = function() {
                window.location="#projectsSection"
            }
        } else if (i == 2) {
            buttons[i].onclick = function() {
                window.location="#skillsSection"
            }
        } else if (i == 3) {
            buttons[i].onclick = function() {
                window.location="#skills"
            }
        }
    }
}
