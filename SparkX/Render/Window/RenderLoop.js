import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { AspectRatioWindow } from "./AspectRatio.js";

let canvas = SparkX.Canvas;
let lastUpdate = Date.now();
let StartRan = false;

let frame = 1;

//RenderLoop
setInterval(() => { 
    
    if (SparkX.Settings.ReduceScreenTearing == true){
        if ((frame / 10) == 1){
            SparkX.ClearCanvas()
            frame = 0;
        } else {
            frame++
        }
    } else {
        SparkX.ClearCanvas()
    }

    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (StartRan == false){
        StartRan = true;
        
        AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;
        
        SparkX.RenderStarts.forEach(element => {element()});
    }

    SparkX.RenderLoops.forEach(element => {element()})

    var currentUpdate = Date.now();
    SparkX.ConstSettings.DeltaTime = currentUpdate - lastUpdate;
    lastUpdate = currentUpdate;
    
}, 1000 / SparkX.FramesPerSecond );
 
