import { SparkX } from "../../SparkX.js";
import { AspectRatioWindow } from "./AspectRatio.js";


let canvas = SparkX.Canvas;
canvas.width = SparkX.Resolution.x;
canvas.height = SparkX.Resolution.y;

let lastUpdate = Date.now();
let StartRan = false;

let PrevFPS = 60;
//RenderLoop
setInterval(() => { 
    if (StartRan == false){
        StartRan = true;

        AspectRatioWindow.DetermineAspectRatio();

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
    ctx.fillRect(0, 0, canvas.width, canvas.height)
 
    var currentUpdate = Date.now();
    SparkX.Settings.DeltaTime = currentUpdate - lastUpdate;
    lastUpdate = currentUpdate;
 }, 1000 / SparkX.FramesPerSecond );
 
