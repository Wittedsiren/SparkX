import { Input } from "./Input/Input.js"
import { Keyboard } from "./Input/InputFiles/Keyboard.js"
import { Mouse } from "./Input/InputFiles/Mouse.js"
import { Vector2 } from "./Math/Vector2.js"

let cam = {
    Position : Vector2.Zero(),
    Rotation : 0,
    Zoom : 1
}

export let SparkX = {
    Version : "0.2.40",
    ConstSettings : {
        DeltaTime : Number,
        AspectRatio : Number,
        AspectZoom : Vector2.Fill(1),
        Cam : cam
    },
    Settings : {
        Rendering : false,
        ReduceScreenTearing : false,
        Fidelity : 1,
        Grid : true,
        TimeScale : 1,
        PixelsPerPoints : 25,
        DefaultRenderColor : 'blue',
    },
    
    FramesPerSecond : 60,
    Canvas : document.getElementById("Screen"),
    Resolution : new Vector2(document.getElementById("Screen").width, document.getElementById("Screen").height),
    ClientScreenRes : new Vector2(document.getElementById("Screen").width, document.getElementById("Screen").height),
    
    ClearCanvas : async function(){
        SparkX.Canvas.getContext('2d').clearRect(0, 0, SparkX.ClientScreenRes.x, SparkX.ClientScreenRes.y)
    },
    RenderStarts : [],
    RenderLoops : [],
    RenderStart : function(RenderFunction = Function){
        SparkX.RenderStarts.push(RenderFunction);
    },
    RenderLoop : function(RenderFunction = Function){
        SparkX.RenderLoops.push(RenderFunction);
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
