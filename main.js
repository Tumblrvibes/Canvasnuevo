canvas=document.getElementById("pizarron");
contexto=canvas.getContext("2d");

var posicionX, posicionY;

color="black";0
width_line=2;

var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("pizarron").width=new_width;
    document.getElementById("pizarron").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);


function my_touchstart(e){
    console.log("Estas usando el touch")
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width_line=document.getElementById("ancho").value;

    posicionX=e.touches[0].clientX-canvas.offsetLeft;
    posicionY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("Estas moviendo el touch")

    posicionX_actual=e.touches[0].clientX-canvas.offsetLeft;
    posicionY_actual=e.touches[0].clientY-canvas.offsetTop;

        contexto.beginPath();
        contexto.strokeStyle=color;
        contexto.lineWidth=width_line;
        contexto.moveTo(posicionX,posicionY);
        contexto.lineTo(posicionX_actual,posicionY_actual);
        contexto.stroke();


    console.log("Ultima Posicion del touch x y");
    console.log("X= "+posicionX+"Y= "+posicionY);

    console.log("Actual Posicion del touch x y");
    console.log("X= "+posicionX_actual+"Y= "+posicionY_actual);

    posicionX=posicionX_actual;
    posicionY=posicionY_actual;
}


function borrar(){
    contexto.clearRect(0,0, contexto.canvas.width,contexto.canvas.height);
}
11