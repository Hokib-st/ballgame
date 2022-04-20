const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')
var finished = false;

window.onload = () => {
    gameLoop()
 
 }

class Void {

constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
    this.color = "black"
}

}

 class Ball {
     constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.color = "yellow"
        this.speed = 2
     }
 }

 class Square {
     constructor(){
        this.size = ball.size / 2
        this.color = "red"
        this.x = Math.floor(Math.random() * canvas.width / ball.size) * ball.size
        this.y = Math.floor(Math.random() * canvas.height / ball.size) * ball.size
      
     }
 }

 function gameLoop() {
   
    setInterval(show, 1000 / 15)
 }
 
 function show() {
     
     update()
     draw()
 }
 
 function update() {
    if(!finished) canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    eatSquare();
 }

 function isInside(circle_x, circle_y, rad, x, y){  

    if ((x - circle_x) * (x - circle_x) +
        (y - circle_y) * (y - circle_y) <= rad * rad)
        return true;
    else
        return false;
}

 function eatSquare() {

    if(isInside(ball.x, ball.y, ball.size, square.x, square.y)){
       
        square = new Square();
        ball.size + 5 >= canvas.width ? ball.size = canvas.width : ball.size += 5
    }

 }

 function draw() {
    if(!finished){
    createRect(0, 0, canvas.width, canvas.height, "black")
    createRect(square.x, square.y, square.size, square.size, "red")
    createCircle(ball.x, ball.y, ball.size, ball.color)
    

    canvasContext.font = "15px Arial"
    canvasContext.fillStyle = "#ffff"
    canvasContext.fillText("Taille : " + ball.size, 100, 20)
    canvasContext.fillText("Vitesse : " + ball.speed, 10, 20)
    //canvasContext.fillText("X : " + ball.x, 15, 25)
    //canvasContext.fillText("Y : " + ball.y, 100, 25)
    }
    if(ball.size == canvas.width && !finished){
        finished = true;
        canvasContext.fillText("Victoire !", canvas.width / 2 - 45, canvas.height / 2)
         
           setInterval(() => {createCircle(voi.x, voi.y, voi.size, voi.color); voi.size += 25;}, 250)
        

        setTimeout(() => {window.location.reload()}, 5000)
    }

   
    

}

function createRect(x, y, width, height, color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

function createCircle(x, y, size, color) {
canvasContext.beginPath();

canvasContext.arc(x, y, size, 0, 2 * Math.PI);
canvasContext.fillStyle = color;
canvasContext.fill();
canvasContext.stroke();
}

function isXOutside(x) {

    if(x > canvas.width || x.toString().startsWith("-")) return true
    else return false
}

function isYOutside(y) {
    if(y > canvas.height || y.toString().startsWith("-")) return true
    else return false
}

window.addEventListener("keydown", (event) => {
        if(ball.size == canvas.width) return;

        if ((event.keyCode == 81)) {//Q
            if(isXOutside( ball.x - 1 * ball.speed)) return;
            ball.x -= 1 * ball.speed
        } else if ((event.keyCode == 90)) { // Z
            if(isYOutside(ball.y - 1 * ball.speed)) return;
            ball.y -= 1 * ball.speed
        } else if ((event.keyCode == 68)) {//D
            if(isXOutside(ball.x + 1 * ball.speed)) return;
            ball.x += 1 * ball.speed
        } else if ((event.keyCode == 83)) {// S
            if(isYOutside(ball.y + 1 * ball.speed)) return;
            ball.y += 1 * ball.speed
        } else if(event.keyCode == 82){
            window.location.reload()
        } else if(event.keyCode == 27){
            window.alert("Paused")
        } else if(event.keyCode == 40) {
            if(ball.speed >= 2) ball.speed -= 1
        } else if(event.keyCode == 38) {
            if(ball.speed < 10) ball.speed += 1
        }
     

})

const ball = new Ball(canvas.width / 2, canvas.height / 2, 10);
var square = new Square();
var voi = new Void(ball.x, ball.y, 0)