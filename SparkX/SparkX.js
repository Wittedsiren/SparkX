import { Vector2 } from "./Math/Vector2.js"
import { AspectRatioWindow } from "./Render/Window/AspectRatio.js";

export let SparkX = {
    ConstSettings : {
        DeltaTime : Number,
        AspectRatio : Number,
        AspectZoom : Vector2.Fill(1),
    },
    Settings : {
        Rendering : true,
    },
    
    FramesPerSecond : 10,
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
    
}