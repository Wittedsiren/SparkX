import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { AspectRatioWindow } from "./AspectRatio.js";

let canvas = SparkX.Canvas;
let lastUpdate = Date.now();
let StartRan = false;

//RenderLoop
setInterval(() => { 
    if (StartRan == false){
        StartRan = true;

        
        AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;
        canvas.style.width = SparkX.Resolution.x;

        canvas.style.height = SparkX.Resolution.y;
        SparkX.RenderStarts.forEach(element => {
            
        });
        
    }

    canvas.style.width = SparkX.Resolution.x;

    canvas.style.height = SparkX.Resolution.y;

    SparkX.ClearCanvas()
    // Objects style
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
 
    SparkX.RenderLoops.forEach(element => {
        element();
    })


    var currentUpdate = Date.now();
    SparkX.ConstSettings.DeltaTime = currentUpdate - lastUpdate;
    lastUpdate = currentUpdate;
    
 }, 1000 / SparkX.FramesPerSecond );
 
