function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(370, 400);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 230, 150, 220, 200);
    fill(255,0,0)
    rect(0,0,650,20)
    rect(0,460,650,20)
    rect(0,0,20,650)
    rect(620,0,20,650)
    fill(0,255,0)
    circle(20,20,60)
    circle(20,460,60)
    circle(620,460,60)
    circle(620,20,60)
}

 function take_snapshot()
 {
    save('awesome.png');
 }

 function apply_filter()
 {
     alert("Do you want to change the filter color??")
     tint_color = document.getElementById("color_name").value;
 }

