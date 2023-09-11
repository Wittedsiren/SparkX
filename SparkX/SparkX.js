import { Vector2 } from "./Math/Vector2.js"

export let SparkX = {
    FramesPerSecond : 60,
    Resolution : new Vector2(1920, 1080),
    Canvas : document.getElementById("Screen"),
    Settings : {
        
    },

    ClearCanvas : async function(){
        SparkX.Canvas.getContext('2d').clearRect(0, 0, SparkX.Resolution.x, SparkX.Resolution.y)
    }
}