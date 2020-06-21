
var typeWriterCalled = false
var i = 0
var txt = 'Olá, seja bem vindx!' /* The text */
var speed = 150 /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (!typeWriterCalled){
        if (i < txt.length) {
            console.log(i)
            document.getElementById("text").innerHTML += txt.charAt(i)
            i++
            setTimeout(typeWriter, speed)
        } else {
            typeWriterCalled = true
        }
    }
}