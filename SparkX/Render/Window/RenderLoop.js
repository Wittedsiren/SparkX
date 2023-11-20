import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Draw } from "../Draw.js";
import { AspectRatioWindow } from "./AspectRatio.js";

let canvas = SparkX.Canvas;
let lastUpdate = Date.now();
let StartRan = false;

let frame = 1;

//RenderLoop
//Change to animation frame thing
setInterval(() => { 


    if (SparkX.Settings.ReduceScreenTearing){
        if ((frame / 1000) == 1){
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
        
        //get refresh Rate
        SparkX.GetRefreshRate().then(rr => SparkX.FramesPerSecond = Math.round(rr));

        AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;
        
        SparkX.RenderStarts.forEach(element => {element()});
    }

    if (SparkX.Settings.Grid == true){
        let res = 1000

        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = 0.2;
        Draw.line(new Vector2(0, -res), new Vector2(0, res), 'white')
        Draw.line(new Vector2(-res, 0), new Vector2(res, 0), 'white')
        let boxSize = 50;
        let lines = res / boxSize
        Draw.circle(Vector2.Zero(), 25, 0, 'white')
        for (let index = 0; index < lines; index++) {
            Draw.line(new Vector2(-res, res), new Vector2(res, res), 'white')
            Draw.line(new Vector2(-res, -res), new Vector2(res, -res), 'white')
            Draw.line(new Vector2(res, -res), new Vector2(res, res), 'white')
            Draw.line(new Vector2(-res, -res), new Vector2(-res, res), 'white')

            Draw.line(new Vector2(-res, boxSize * index), new Vector2(res, boxSize * index ), 'white')
            Draw.line(new Vector2(-res, -boxSize * index), new Vector2(res, -boxSize * index ), 'white')

            Draw.line(new Vector2(boxSize * index, -res), new Vector2(boxSize * index, res), 'white')
            Draw.line(new Vector2(-boxSize * index, -res), new Vector2(-boxSize * index, res), 'white')
            
        }
        
        ctx.globalAlpha = 1;
    }

    SparkX.RenderLoops.forEach(element => {element()})

    var currentUpdate = Date.now();
    SparkX.ConstSettings.DeltaTime = currentUpdate - lastUpdate;
    lastUpdate = currentUpdate;
    document.getElementById("PosDisplay").innerText = `${SparkX.ConstSettings.Cam.Position.x}, ${SparkX.ConstSettings.Cam.Position.y}`
    
}, 1000 / SparkX.FramesPerSecond );
