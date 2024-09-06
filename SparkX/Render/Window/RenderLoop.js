import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
// import { Draw } from "../Draw/Draw.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";
import { AspectRatioWindow } from "./AspectRatio.js";
import { renderFrame } from "../Buffers/FrameBuffer.js";



let lastUpdate = Date.now();
let StartRan = false;

let frame = 1;
let prevCanvas = null;

//RenderLoop
//Change to animation frame thing

async function render(){
    if (prevCanvas != SparkX.Canvas && prevCanvas != null) SparkX.ClearCanvas(prevCanvas)
    prevCanvas = SparkX.Canvas
    let canvas = SparkX.Canvas;
    if (!SparkX.Settings.Cursor) {canvas.style.cursor = 'none' }
    
    if (SparkX.Settings.ReduceScreenTearing){
        if ((frame / 10) == 1){
            SparkX.ClearCanvas(SparkX.Canvas)
            frame = 0;
        } else {
            frame++
        }
    } else {
        SparkX.ClearCanvas(SparkX.Canvas)
    }

    let rf = new renderFrame(renderBuffer.buffer);
    rf.renderToScreen();

    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0)';
    ctx.fillRect(0, 0, SparkX.Resolution.x, SparkX.Resolution.y);

    if (StartRan == false){
        
        StartRan = true;
        
        //get refresh Rate
        //SparkX.GetRefreshRate().then(rr => SparkX.FramesPerSecond = Math.round(rr));

        //AspectRatioWindow.DetermineAspectRatio();

        // canvas.width = SparkX.ClientScreenRes.x;
        // canvas.height = SparkX.ClientScreenRes.y;

        SparkX.renderStarts.forEach(start => {start()});

        //add logo
        
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
    
    //Actually render the Buffer
    
   
}

let buffer = 0
let setBuffer = 10

function renderLoop(){
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

export function Init(){
    let {x, y} = SparkX.Resolution;
    let img = new Image();
    img.style.maxHeight = SparkX.Resolution.y;
    img.style.maxWidth = SparkX.Resolution.x;

    img.src = '../Spark Made With.png'
    // img.style.transform = 'translate(50%, 50%)'
    img.style.position = 'absolute'
    console.log(img.width)
    img.style.top = `${x/2-img.height/2}px`
    img.style.left = `${y/2-img.width/2}px`
    SparkX.Canvas.parentElement.appendChild(img)
    
    let o = 1;
    function LowerO (){
        setTimeout(function(){
            if (o >= 0){
                o -= 0.01;
                img.style.opacity = o
                LowerO()
            } else {
                o = 0;
                return
            }
        }, 1)
    }
    
    setTimeout(function(){
        LowerO()
    }, 500)

    setTimeout(function(){
        SparkX.Canvas.parentElement.removeChild(img)
        if (SparkX.Settings.Rendering) requestAnimationFrame(renderLoop)    
    }, 1000)   
}

// Init();
//requestAnimationFrame(renderLoop)    
