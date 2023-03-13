var hr = 0
var min = 0
var sec = 0
var contar


function zero(num) {
    if (num < 10) {
        return "0" + num
    } else {
        return num
    }
}

function iniciar() {
    clearInterval(contar);
    console.log("iniciou")
    contar = setInterval(function contador() {
        console.log(sec)
        sec++
        if (sec == 60) {
            sec = 0
            min++
            if (min == 60) {
                min = 0
                hr++
            }
        }
        document.getElementById("display").innerText = zero(hr) + ":" + zero(min) + ":" + zero(sec)
    }, 1000)
    document.getElementById("iniciar").style.display = "none"
    document.getElementById("pausar").style.display = "inline-block"
}

function pausar() {
    console.log("pausou")
    clearInterval(contar);
    document.getElementById("pausar").style.display = "none"
    document.getElementById("iniciar").style.display = "inline-block"
}

function resetar() {
    console.log("resetou")
    clearInterval(contar)
    hr = 0
    min = 0
    sec = 0
    document.getElementById("display").innerText = "00:00:00"
    document.getElementById("pausar").style.display = "none"
    document.getElementById("iniciar").style.display = "inline-block"
} 
