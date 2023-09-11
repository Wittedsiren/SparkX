import { Vector2 } from "./Math/Vector2.js"
import { AspectRatioWindow } from "./Render/Window/AspectRatio.js";

export let SparkX = {
    Settings : {
        DeltaTime : Number,
        Rendering : true,
        DefualtRes : new Vector2(1920, 1080),
    },
    
    FramesPerSecond : 60,
    Resolution : new Vector2(1920, 1080),
    Canvas : document.getElementById("Screen"),
    
    ClearCanvas : async function(){
        SparkX.Canvas.getContext('2d').clearRect(0, 0, SparkX.Resolution.x, SparkX.Resolution.y)
    },
    RenderStart : [],
    RenderLoop : [],
}