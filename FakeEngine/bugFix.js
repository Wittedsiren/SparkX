import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { SparkX } from "../SparkX/SparkX.js";

let start = Date.now();
let text = ""
SparkX.RenderLoop(()=>{
    // let sP = Math.floor((Date.now() - start)/ 100)/10;
    
    
    
    // for (let index = 0; sP % 0.3 == 0; index++) {
        
        Draw.text(text + "T", Mouse.Position);
        
    // }
})

SparkX.Settings.Cursor = false;
SparkX.Resolution = new Vector2(1000, 1000)