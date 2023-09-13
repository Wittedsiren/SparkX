import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

export let AspectRatios = {
    
}

export let AspectRatioWindow = {
    Ratio : Number,

    Update : function(){
        SparkX.Resolution = new Vector2(document.body.clientWidth, document.body.clientHeight)
        let r = Vector2.Divide(SparkX.ClientScreenRes, SparkX.Resolution)
        let x = Vector2.Divide(r, 1)
        SparkX.ConstSettings.AspectZoom = x;
        console.log(x)
    },

    DetermineAspectRatio : function(){
        AspectRatioWindow.Ratio = SparkX.ClientScreenRes.x / SparkX.ClientScreenRes.y;
        SparkX.ConstSettings.AspectRatio = AspectRatioWindow.Ratio
        window.addEventListener("resize", AspectRatioWindow.Update);
    }
}
