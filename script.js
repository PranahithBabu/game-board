let hdisplay = document.getElementById("hin")
let gdisplay = document.getElementById("gin")

let hscore = 0
let gscore = 0

function h1btn() {
    hscore+=1
    hdisplay.textContent = hscore
}

function h2btn() {
    hscore+=2
    hdisplay.textContent = hscore
}

function h3btn() {
    hscore+=3
    hdisplay.textContent = hscore
}

function g1btn() {
    gscore+=1
    gdisplay.textContent = gscore
}

function g2btn() {
    gscore+=2
    gdisplay.textContent = gscore
}

function g3btn() {
    gscore+=3
    gdisplay.textContent = gscore
}

function hresetbtn() {
    if(hscore!==0){
        hscore = 0
        hdisplay.textContent = hscore
    }else{
        alert("Home score is already reset")
    }
}

function gresetbtn() {
    if(gscore!==0){
        gscore = 0
        gdisplay.textContent = gscore
    }else{
        alert("Guest score is already reset")
    }
}

function resetbtn() {
    if(hscore===0 && gscore===0){
        alert("Game is already reset")
    }else if(hscore===0){
        gresetbtn();
    }else if(gscore===0){
        hresetbtn();
    }else{
        hresetbtn();
        gresetbtn();
    }
}