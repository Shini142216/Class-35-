var ball;
var database;
var ballposition

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(0,0,10,10);
    ball.shapeColor = "red";
    var ballref=database.ref("Ball/position")
    ballref.on("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/position").set({
        x:ballposition.x+x,y:ballposition.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
ballposition=data.val();
console.log(ballposition.x)
ball.x=ballposition.x;
ball.y=ballposition.y;
}
