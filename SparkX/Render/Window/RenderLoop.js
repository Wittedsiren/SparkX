import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Draw } from "../Draw/Draw.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";
import { AspectRatioWindow } from "./AspectRatio.js";
import { renderFrame } from "../Buffers/FrameBuffer.js";


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

    let rf = new renderFrame(renderBuffer.buffer);
    rf.renderToScreen();

    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (StartRan == false){
        
        StartRan = true;
        
        //get refresh Rate
        //SparkX.GetRefreshRate().then(rr => SparkX.FramesPerSecond = Math.round(rr));

        //AspectRatioWindow.DetermineAspectRatio();

        canvas.width = SparkX.ClientScreenRes.x;
        canvas.height = SparkX.ClientScreenRes.y;

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

function displayWaterMark(){
    let img = new Image();
    img.style.maxHeight = SparkX.ClientScreenRes.y;
    img.style.maxWidth = SparkX.ClientScreenRes.x;
    img.style.top = '50%';
    img.style.left = '50%';
    img.src = '../../../Spark Made With.png';
    img.style.transform = 'translate(-50%, -50%)'
    img.style.position = 'absolute'
    document.body.appendChild(img)
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
        document.body.removeChild(img)
        if (SparkX.Settings.Rendering) requestAnimationFrame(renderLoop)    
    }, 1000)   
}

displayWaterMark();
//requestAnimationFrame(renderLoop)    
