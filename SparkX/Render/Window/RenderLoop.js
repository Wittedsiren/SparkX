import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Draw } from "../Draw/Draw.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";
import { AspectRatioWindow } from "./AspectRatio.js";


let canvas = SparkX.Canvas;
let lastUpdate = Date.now();
let StartRan = false;

let frame = 1;

//RenderLoop
//Change to animation frame thing

async function render(){

    if (!SparkX.Settings.Cursor){ SparkX.Canvas.style.cursor = 'none' }

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
    
    renderBuffer.buffer.forEach(obj => {
        try {
            Draw.render(obj)
        } catch (error) {
            
        }
    });
    eval(renderBuffer.comp)

    if (StartRan == false){
        
        StartRan = true;
        
        //get refresh Rate
        //SparkX.GetRefreshRate().then(rr => SparkX.FramesPerSecond = Math.round(rr));

        AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;

        SparkX.renderStarts.forEach(start => {start()});

        //add logo
        
    }

    if (SparkX.Settings.Grid == true){
        let z = SparkX.ConstSettings.Cam.Zoom;
        let res = 100

        let color = (document.getElementById("Screen").style.background == '' || document.getElementById("Screen").style.background == 'white') ? 'gray' : 'white'
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = 0.2;
        Draw.line(new Vector2(0, -res), new Vector2(0, res), color)
        Draw.line(new Vector2(-res, 0), new Vector2(res, 0), color)
        let boxSize = 1;
        let lines = res / boxSize
        Draw.circle(Vector2.Zero(), 1, 0, color)
        for (let index = 0; index < lines; index++) {
            ctx.globalAlpha = 0.2;
            Draw.line(new Vector2(-res, res), new Vector2(res, res), color)
            Draw.line(new Vector2(-res, -res), new Vector2(res, -res), color)
            Draw.line(new Vector2(res, -res), new Vector2(res, res), color)
            Draw.line(new Vector2(-res, -res), new Vector2(-res, res), color)

            Draw.line(new Vector2(-res, boxSize * index), new Vector2(res, boxSize * index ), color)
            Draw.line(new Vector2(-res, -boxSize * index), new Vector2(res, -boxSize * index ), color)

            Draw.line(new Vector2(boxSize * index, -res), new Vector2(boxSize * index, res), color)
            Draw.line(new Vector2(-boxSize * index, -res), new Vector2(-boxSize * index, res), color)
            
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

// setInterval(() => { 
//     //render()
// }, 1000 / SparkX.FramesPerSecond );

let buffer = 0
let setBuffer = 10

async function renderLoop(){
    setTimeout(function(){
        render()
        requestAnimationFrame(renderLoop) 
        if (Math.floor(1 / SparkX.DeltaTime) < SparkX.FramesPerSecond ){
            setBuffer += 1
        } else {
            setBuffer -= 1
        }
        buffer = setBuffer;
    }, (1000 / (SparkX.FramesPerSecond + buffer)) )
}

let img = new Image();

img.style.maxHeight = SparkX.Canvas.clientHeight;
img.style.maxWidth = SparkX.Canvas.clientWidth;

img.src = '../../../Spark Made With.png';
img.style.backgroundSize = "cover"
document.body.appendChild(img)

setTimeout(function(){
    document.body.removeChild(img)
    requestAnimationFrame(renderLoop)    
}, 1000)
