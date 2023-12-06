import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Draw } from "../Draw/Draw.js";
import { renderBuffer } from "../Stacks/RenderBuffer.js";
import { AspectRatioWindow } from "./AspectRatio.js";

let canvas = SparkX.Canvas;
let lastUpdate = Date.now();
let StartRan = false;

let frame = 1;

//RenderLoop
//Change to animation frame thing

function render(){
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

    //Actually render the Buffer
    
    renderBuffer.forEach(obj => {
        Draw.render(obj)
    });

    if (StartRan == false){
        
        StartRan = true;
        
        //get refresh Rate
        //SparkX.GetRefreshRate().then(rr => SparkX.FramesPerSecond = Math.round(rr));

        AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;

        SparkX.renderStarts.forEach(start => {start()});
    }

    if (SparkX.Settings.Grid == true){
        let z = SparkX.ConstSettings.Cam.Zoom;
        let res = 100
        
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = 0.2;
        Draw.line(new Vector2(0, -res), new Vector2(0, res), 'white')
        Draw.line(new Vector2(-res, 0), new Vector2(res, 0), 'white')
        let boxSize = 1;
        let lines = res / boxSize
        Draw.circle(Vector2.Zero(), 1, 0, 'white')
        for (let index = 0; index < lines; index++) {
            ctx.globalAlpha = 0.2;
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

    SparkX.renderLoops.forEach(element => {
        element.renderFunction();
        if (element.exitFunction.toString() != '()=>{}') {
            if (element.exitFunction() == true){
                let index = SparkX.renderLoops.indexOf(element);
                if (index > -1) {
                    SparkX.renderLoops.splice(index, 1); 
                } else {
                    console.warn('Could not find this function in the Render Loop. Contact the library devloper if this problem consists');
                }
            }
        }
    })

    var currentUpdate = Date.now();
    SparkX.DeltaTime = (currentUpdate - lastUpdate) / 1000;
    lastUpdate = currentUpdate;
    //document.getElementById("PosDisplay").innerText = `${SparkX.ConstSettings.Cam.Position.x}, ${SparkX.ConstSettings.Cam.Position.y}`
    
}

setInterval(() => { 
    //render()
}, 1000 / SparkX.FramesPerSecond );

function renderLoop(){
    setTimeout(function(){
        render()
        renderLoop();
        console.log('Frame');
    }, 1000 / SparkX.FramesPerSecond / SparkX.Settings.TimeScale)
}

renderLoop()