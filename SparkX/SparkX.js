import { Vector2 } from "./Math/Vector2.js"

export let SparkX = {
    FramesPerSecond : 60,
    Resolution : new Vector2(1920, 1080),
    Canvas : document.getElementById("Screen"),
    Settings : {
        DeltaTime : Number,
        Rendering : true,
    },
    
    ClearCanvas : async function(){
        SparkX.Canvas.getContext('2d').clearRect(0, 0, SparkX.Resolution.x, SparkX.Resolution.y)
    },
    RenderStart : [],
    RenderLoop : [],
}

let canvas = SparkX.Canvas;
canvas.width = SparkX.Resolution.x;
canvas.height = SparkX.Resolution.y;

let lastUpdate = Date.now();
let StartRan = false;

let PrevFPS = 60;
//RenderLoop
setInterval(() => { 
    if (SparkX.Rendering == true){
        if (StartRan == false){
            StartRan = true;
            SparkX.RenderStart.forEach(element => {
                
            });
        }
    
        canvas.width = SparkX.Resolution.x;
        canvas.height = SparkX.Resolution.y;
    
        SparkX.ClearCanvas()
        // Objects style
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
     
        var currentUpdate = Date.now();
        Time.DeltaTime = currentUpdate - lastUpdate;
        lastUpdate = currentUpdate;
    } else {
        //PrevFPS = (SparkX.FramesPerSecond == 1) ? PrevFPS : SparkX.FramesPerSecond;

    }
 }, 1000 / SparkX.FramesPerSecond );
 