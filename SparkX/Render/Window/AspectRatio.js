import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

export let AspectRatios = {
    
}

export let AspectRatioWindow = {
    Ratio : Number,

    Update : function(){
        SparkX.Resolution = new Vector2(SparkX.Canvas.clientWidth, SparkX.Canvas.clientHeight)
    },

    DetermineAspectRatio : function(){
        AspectRatioWindow.Ratio = SparkX.ClientScreenRes.x / SparkX.ClientScreenRes.y;
        SparkX.ConstSettings.AspectRatio = AspectRatioWindow.Ratio
        window.addEventListener("resize", AspectRatioWindow.Update);
    }
}
