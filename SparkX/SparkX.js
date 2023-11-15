import { Vector2 } from "./Math/Vector2.js"

let cam = {
    Position : Vector2.Zero(),
    Rotation : 0
}

export let SparkX = {
    ConstSettings : {
        DeltaTime : Number,
        AspectRatio : Number,
        AspectZoom : Vector2.Fill(1),
        Cam : cam
    },
    Settings : {
        Rendering : false,
        ReduceScreenTearing : false
    },
    
    FramesPerSecond : 60,
    Resolution : new Vector2(innerWidth, innerHeight),
    ClientScreenRes : new Vector2(screen.width, screen.height),
    Canvas : document.getElementById("Screen"),
    
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