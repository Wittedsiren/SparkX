import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

export let AspectRatios = {
    
}

export let AspectRatioWindow = {
    Ratio : Number,

    Update : function(){
        console.log("SparkX Res updated")
        // SparkX.Resolution = new Vector2(SparkX.Canvas.width * SparkX.ConstSettings.AspectRatio, SparkX.Canvas.height * SparkX.ConstSettings.AspectRatio)
        console.log(SparkX.Canvas.clientHeight)
        console.log(SparkX.Resolution)
    },

    DetermineAspectRatio : function(){
        AspectRatioWindow.Ratio = SparkX.ClientScreenRes.x / SparkX.ClientScreenRes.y;
        SparkX.ConstSettings.AspectRatio = AspectRatioWindow.Ratio
        window.addEventListener("resize", AspectRatioWindow.Update);
    }
}
