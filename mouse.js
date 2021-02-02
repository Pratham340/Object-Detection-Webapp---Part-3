video = "";
status = "";
object=[];
function setup() {
    canvas = createCanvas(640, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("cocossd Loaded");
    status=true;
    objectDetector.detect(video,gotResult);
}

function preload() {
    video = loadImage("Screenshot_20210121-163320-009.png");
}

function draw() {
    image(video, 0, 0, 640, 500);
    if(status != ""){
        for (i=0; i < object.length; i++) {
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("blue");
            percent=floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
    }
}
function gotResult(error,results) {
if(results){
    console.log(results);
    object=results;
}
else{
    console.log(error);
}
}
function home() {
    window.location ="index.html";
}