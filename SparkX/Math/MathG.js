import { Draw } from "../Render/Draw/Draw.js";
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
    },

    IsWithinTriangle : function(pos1 = Vector2, pos2 = Vector2, pos3 = Vector2, point = Vector2){
        let w1 = ((pos1.x * (pos3.y - pos1.y)) + ((point.y - pos1.y)*(pos3.x - pos1.x)) - (point.x * (pos3.y - pos1.y))) /
                (((pos2.y - pos1.y)*(pos3.x - pos1.x)) - ((pos2.x - pos1.x)*(pos3.y - pos1.y)));
        let w2 = (point.y - pos1.y - (w1 * (pos2.y - pos1.y)))/
                (pos3.y - pos1.y);
        
        return (w1 >= 0 && w2 >= 0 && (w1 + w2) <= 1);
    }
}