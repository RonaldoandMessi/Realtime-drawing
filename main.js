nosex = 0;
nosey = 0;

rightwristx = 0;
leftwristx = 0;

difference = 0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,130);
    video = createCapture(VIDEO);
    video.size(550,500);

    Posenet = ml5.poseNet(video,modelLoaded);
    Posenet.on('pose',gotPose);
}

function draw() {
    background("white");

    document.getElementById("squareSize").innerHTML = "Width and height of a square = " + difference + " px";

    fill("steelblue");
    stroke("goldenrod");
    strokeWeight(10);
    strokeJoin(BEVEL);
    square(nosex,nosey,difference);
}

function modelLoaded(){
    console.log("!Model Loaded!");
}

function gotPose(result){
    if (result.length > 0) {
        console.log(result);

        nosex = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;

        console.log("NoseX is = " + nosex + " and NoseY is = " + nosey);

        rightwristx = result[0].pose.rightWrist.x;
        leftwristx = result[0].pose.leftWrist.x;
        console.log("RightWristX is = " + rightwristx);
        console.log("LeftWristX is = " + leftwristx);

        difference = Math.floor(leftwristx - rightwristx);
    }
}