/*fix the background color random changing with hover function on the #startSimulationtag*/

//setup
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var fps = 30;

function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

function fast(){
    window.setInterval(animate, 1000/fps);     
}

var colorC= Math.random();

function ranColor() {
        var num = Math.floor(Math.random() * Math.pow(2,24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }
    
//background-color random change
bgColor = function(){
    $("body").css('background-color', ranColor());  
};

function reset() {
            
}

//start simulation button
$(document).ready(function(){
    $("#startSimulation").click(function(){
        $("#startSimulation").fadeTo("slow", 0);
        $("#canvas").fadeTo("slow", 1);
        $("#control").fadeTo("slow", 1);
        $("#control2").fadeTo("slow", 1);
        $("#control3").fadeTo("slow", 1);
        $("#control4").fadeTo("slow", 1);
        $("#control5").fadeTo("slow", 1);
        
    });    
});

function gravity(){
    ball2.ay= 10000/fps;
    
    ball3.ay= 10000/fps;
    
    ball4.ay= 10000/fps;
    
    ball5.ay= 10000/fps;
    
    ball6.ay= 10000/fps;
    
    ball7.ay= 10000/fps;
    
    ball2.vx = 0;
    ball2.vy = 0;
       
    ball3.vx = 0;
    ball3.vy = 0;
       
    ball4.vx = 0;
    ball4.vy = 0;
       
    ball5.vx = 0;
    ball5.vy = 0;
       
    ball6.vx = 0;
    ball6.vy = 0;
       
    ball7.vx = 0;
    ball7.vy = 0;
}

function pause(){
    ball2.ay= 0;
    
    ball3.ay= 0;
    
    ball4.ay= 0;
    
    ball5.ay= 0;
    
    ball6.ay= 0;
    
    ball7.ay= 0;
    
    ball2.vx = 0;
    ball2.vy = 0;
       
    ball3.vx = 0;
    ball3.vy = 0;
       
    ball4.vx = 0;
    ball4.vy = 0;
       
    ball5.vx = 0;
    ball5.vy = 0;
       
    ball6.vx = 0;
    ball6.vy = 0;
       
    ball7.vx = 0;
    ball7.vy = 0;
}
function play(){
        ball2.vx = randNum( 300, canvas.width - 600);
        ball2.vy = randNum( 300, canvas.height - 600 );
        
        ball3.vx = randNum( 300, canvas.width - 600);
        ball3.vy = randNum( 300, canvas.height - 600 );
        
        ball4.vx = randNum( 300, canvas.width - 600);
        ball4.vy = randNum( 300, canvas.height - 600 );
        
        ball5.vx = randNum( 300, canvas.width - 600);
        ball5.vy = randNum( 300, canvas.height - 600 );
        
        ball6.vx = randNum( 300, canvas.width - 600);
        ball6.vy = randNum( 300, canvas.height - 600 );
        
        ball7.vx = randNum( 300, canvas.width - 600);
        ball7.vy = randNum( 300, canvas.height - 600 );    
    ball2.ay= 0;
    
    ball3.ay= 0;
    
    ball4.ay= 0;
    
    ball5.ay= 0;
    
    ball6.ay= 0;
    
    ball7.ay= 0;
}

function changeColor(){
     $(document).ready(function(){
        $("#control5").click(function(){
            $("body").css("background-color", bgColor());
        });
    });  
}

//change background-color every second
setInterval(function(){
    $("body").css('background-color', ranColor());
}, 10*1000)


function Balls(vx, vy, ax, ay, radius, colorC){
    this.x = randNum( 30, canvas.width - 30 ),
    this.y = randNum( 30, canvas.height - 30 ),
    this.vx = vx,
    this.vy = vy,
    this.ax = ax,
    this.ay = ay,
    this.radius = radius,
    this.color = colorC;
    this.paint = function(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
    };
    this.Intersects = function(shape){
            
    };
    this.move = function(){
        this.vx += this.ax/fps;
        this.vy += this.ay/fps;
        this.x += this.vx/fps;
        this.y += this.vy/fps;
        
                if ((this.x - this.radius) < 0 ) {
            this.x = this.radius;
            this.vx = -this.vx;
            this.color = ranColor();
        }
        if ((this.x + this.radius) > canvas.width ) {
            this.x = canvas.width - this.radius;
            this.vx = -this.vx;
            this.color = ranColor();
        }
        if ((this.y - this.radius) < 0) {
            this.y = this.radius;
            this.vy = -this.vy;
            this.color = ranColor();
        }
        if ((this.y + this.radius) > canvas.height ) {
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;
        }
        
    };
}

 if (colorC >= 1){
    this.color = 'purple';    
}

var ball2 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'red'); 
var ball3 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'green');
var ball4 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'purple');
var ball5 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'brown');
var ball6 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'blue');
var ball7 = new Balls(randNum( 300, canvas.width - 600 ), randNum( 300, canvas.height - 600 ), 0, 0, 20, 'magenta');


function ballDraw(){
    context.clearRect( 0, 0, canvas.width, canvas.height );
    ball2.paint();
    ball3.paint();
    ball4.paint();
    ball5.paint();
    ball6.paint();
    ball7.paint();
}
function ballMove(){
    ball2.move();
    ball3.move();
    ball4.move();
    ball5.move();
    ball6.move();
    ball7.move();
}
function animate(){
    ballDraw();
    ballMove();
    if(ball2.Intersects(ball3)){
            this.vx = -this.vx; 
    } if (ball3.Intersects(ball2)){
        this.vx = -this.vx;    
    }
}
window.setInterval(animate, 1000/fps);

//fast forward and rewind functions :D
$(document).ready(function(){
    $('#control').click(function(){
         fast();
    });
    $('#control2').click(function(){
        pause();
    });
    $('#control3').click(function(){
        play();    
    });
    $('#control4').click(function(){
        gravity();  
    });
    $('canvas').click(function(){
        canvas.width = 600;
        canvas.height = 600;
    });
    changeColor(); 
});

window.onkeydown = function(e){
    e = e || window.event;
    var code = e.keyCode;
    if ( code === 37 ) {
    left:37;
    canvas.width += -20;
} else if ( code === 38 ) {
    up:38;
    canvas.height += -20;
} else if ( code === 39 ) {
    right:39
    canvas.width += 20;
} else if ( code === 40 ) {
    down:40
    canvas.height += 20;
}
};
window.onkeyup = function(e){
    e = e || window.event;
    var code = e.keyCode;
    if ( code === 37 ) {
    left:37;
    canvas.width += -10;
} else if ( code === 38 ) {
    up:38;
    canvas.height += -10;
} else if ( code === 39 ) {
    right:39
    canvas.width += 10;
} else if ( code === 40 ) {
    down:40
    canvas.height += 10;
}
};


