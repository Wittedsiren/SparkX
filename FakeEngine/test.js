import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw.js";
import { SparkX } from "../SparkX/SparkX.js";

console.log("Hello")

SparkX.RenderLoop(function(){
    
    Draw.line(Vector2.Zero(), new Vector2(0, 400))
    Draw.line(Vector2.Zero(), new Vector2(0, -400))
    Draw.line(Vector2.Zero(), new Vector2(400, 0))
    Draw.line(Vector2.Zero(), new Vector2(-400, 0))
    
    Draw.line(new Vector2(-400, -400), new Vector2(-400, 400))
    Draw.line(new Vector2(-400, -400), new Vector2(400, -400))
    Draw.line(new Vector2(400, 400), new Vector2(-400, 400))
    Draw.line(new Vector2(400, 400), new Vector2(400, -400))
    
})