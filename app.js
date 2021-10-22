const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor")
const range =document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

ctx.lineWidth = 2.5
ctx.strokeStyle = "black";

ctx.fillStyle = "black";
canvas.width = 700;
canvas.height = 700;

let painting = false;
let filling = false;


function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}
function onMousemove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,600,700);
    }
}
if (canvas){
    canvas.addEventListener("mousemove", onMousemove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("click", handleCanvasClick)
}
function changeColor(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
Array.from(colors).forEach(color =>{
    color.addEventListener("click", changeColor);
})

function handeRangeChange(e){
    width = e.target.value;
    ctx.lineWidth = width;
}
function handleModeClick(e){
    if (filling === true){
        filling = false;
        mode.innerText = "Fill"
    }else{
        filling = true;
        mode.innerText = "Paint"
    }
}
if(range){
    range.addEventListener("input", handeRangeChange)
}
if(mode){
    mode.addEventListener("click", handleModeClick)
}