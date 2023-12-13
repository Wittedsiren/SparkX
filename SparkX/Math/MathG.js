import { SparkX } from "../SparkX.js";
import { Vector2 } from "./Vector2.js";

export let MathG = {
    Lerp : function(a, b, t){
        return (1 - t) * a + b * t;
    },
    Rad : function(deg){
        return deg * ( Math.PI / 180 )
    },
    Deg : function(rad){
        return deg * ( 180 / Math.PI )
    },
    RotateAroundPos : function(position = Vector2, rotationPoint = Vector2, rotation = Number){
        rotation = this.Rad(rotation);
        let x = rotationPoint.x + Math.cos(rotation) * (position.x - rotationPoint.x) - Math.sin(rotation) * (position.y - rotationPoint.y)
        let y = rotationPoint.x + Math.sin(rotation) * (position.x - rotationPoint.x) + Math.cos(rotation) * (position.y - rotationPoint.y)
        return new Vector2(x, y)
    },

    Derivative : function( eq = Function ){
        return ( x ) => {
            return ( eq( x + SparkX.Settings.Optimization.MathAccuracy ) - eq( x ) ) / SparkX.Settings.Optimization.MathAccuracy;
        }
    }
}