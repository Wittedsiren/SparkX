import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let rect = new Rect(Vector2.Zero(), new Vector2(100, 100))
let index = 0;
SparkX.RenderLoop(()=>{
    if (index%2 == 0){
        rect.Color = 'black'
    } else {
        rect.Color = 'white'
    }
    index+=3;
})