import { Vector2 } from "./Math/Vector2.js"

let cam = {
    Position : Vector2.Zero(),
    Rotation : 0,
    Zoom : 1
}

export let SparkX = {
    Version : "0.2.40",
    Canvas : document.getElementById("Screen"),
    Resolution : new Vector2(document.getElementById("Screen").width, document.getElementById("Screen").height),
    ClientScreenRes : new Vector2(document.getElementById("Screen").width, document.getElementById("Screen").height),
    ConstSettings : {
        AspectRatio : Number,
        AspectZoom : Vector2.Fill(1),
        Cam : cam,
    },
    Settings : {
        Rendering : false,
        ReduceScreenTearing : false,
        Fidelity : 1,
        Grid : true,
        TimeScale : 1,
        PixelsPerPoint : 25,
        DefaultRenderColor : 'blue',
        UseGPU : false,
        Cursor : false,
        Optimization : {
            MathAccuracy : 0.001,
            Frames : {
                FramePerfection : true,
                PerfectionBufferSize : 10,
            }
        },
        Graphing : {
            
        },
        Lighting : {
            Fidelity : 1,
        }
    },
    InputSettings : {
        IgnoreCaps : false,
    },
    
    DeltaTime : 0,
    
    FramesPerSecond : 60,
    Information : {
        TriangleCount : 0,
        VerticeCount : 0,
    },
    
    // MoniterRes : new Vector2(screen.width, screen.height),
    // WindowRes : new Vector2(document.inne),
    
    ClearCanvas : async function(){
        SparkX.Canvas.getContext('2d').clearRect(0, 0, SparkX.ClientScreenRes.x, SparkX.ClientScreenRes.y)
    },
    renderStarts : [],
    renderLoops : [],
    RenderStart : function(RenderFunction = Function){
        SparkX.renderStarts.push(RenderFunction);
    },
    RenderLoop : function(RenderFunction = Function, ExitFunction = ()=>{}){
        SparkX.renderLoops.push({
            'renderFunction' : RenderFunction,
            'exitFunction' : ExitFunction,
            'id' : (((1+Math.random())*0x10000)|0).toString(16).substring(1),
        });
    },
    GetRefreshRate : function(){
        return new Promise(resolve =>
            requestAnimationFrame(t1 =>
            requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))))
    },
    
}

console.log(`
░██████╗██████╗░░█████╗░██████╗░██╗░░██╗██╗░░██╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝╚██╗██╔╝
╚█████╗░██████╔╝███████║██████╔╝█████═╝░░╚███╔╝░
░╚═══██╗██╔═══╝░██╔══██║██╔══██╗██╔═██╗░░██╔██╗░
██████╔╝██║░░░░░██║░░██║██║░░██║██║░╚██╗██╔╝╚██╗
╚═════╝░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝`);
console.log(`All Files Loaded. Running Veriosn: ${SparkX.Version}`);
//console.log(`Desinged and Programmed by Nathan Irwin`);
