import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Line } from "../SparkX/Render/Draw/Line.js";
import { SparkX } from "../SparkX/SparkX.js";
import { Buffer } from "../SparkX/Render/Stacks/RenderBuffer.js"
import { MathG } from "../SparkX/Math/MathG.js";

SparkX.Settings.Grid = false;

let l = new Line(new Vector2(0.1 ,0), new Vector2(10, -10), 'green')
SparkX.RenderStart(() => {
    
    document.getElementById("Screen").style.background = "salmon"
    
})

SparkX.RenderLoop(() => {
    
    //Draw.line(new Vector2(0.1 ,0), new Vector2(10, 10), 'yellow')
})