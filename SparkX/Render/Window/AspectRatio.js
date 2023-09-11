import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

export let AspectRatioWindow = {
    Ratio : Number,

    UpdateRatio : function(){
        console.log("Hello")
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        
        let newRes = new Vector2(innerWidth, innerHeight)
        newRes = Vector2.Divide(newRes, Vector2.Fill(AspectRatioWindow.Ratio / 2))
        console.log(AspectRatioWindow.Ratio)

        SparkX.Resolution = newRes;
        console.log(w)
        console.log(h)
    },
    DetermineAspectRatio : function(){
        AspectRatioWindow.Ratio = ( SparkX.Settings.DefualtRes.x / SparkX.Settings.DefualtRes.y )
        window.addEventListener("resize", AspectRatioWindow.UpdateRatio);
    }
}
