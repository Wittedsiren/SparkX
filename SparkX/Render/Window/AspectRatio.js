import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

export let AspectRatios = {
    
}

export let AspectRatioWindow = {
    Ratio : Number,

    Update : function(){
        // SparkX.Resolution = new Vector2(SparkX.Canvas.clientWidth, SparkX.Canvas.clientHeight)
        // //document.getElementById("html").style += `aspect-ratio: ${SparkX.ClientScreenRes.x / SparkX.ClientScreenRes.y}`
        // let ratio = Vector2.Divide(SparkX.ClientScreenRes, SparkX.Resolution)
        // let refined_ratio = Vector2.Divide(ratio, 1)
        // SparkX.ConstSettings.AspectZoom = refined_ratio;
    },

    DetermineAspectRatio : function(){
        // document.body.style = `aspect-ratio: ${ SparkX.Resolution.x / SparkX.Resolution.y }`
        // AspectRatioWindow.Ratio = SparkX.ClientScreenRes.x / SparkX.ClientScreenRes.y;
        // SparkX.ConstSettings.AspectRatio = AspectRatioWindow.Ratio
        // AspectRatioWindow.Update()
        // window.addEventListener("resize", AspectRatioWindow.Update);
    }
}
