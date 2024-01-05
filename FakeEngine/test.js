import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { renderBuffer } from "../SparkX/Render/Buffers/RenderBuffer.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let circle = new Circle(new Vector2(15, 10), 5)
let circle2 = new Circle(new Vector2(5, 10), 5)
let rect = new Rect(new Vector2(10, 10), new Vector2(10, 10))
SparkX.Settings.Cursor = true;


circle.AddBasicMovementArrow()
//circle.Color = 'red'
// circle.UnFill();
SparkX.Settings.Fidelity = 3

SparkX.RenderLoop(()=>{
    //document.getElementById('PosDisplay').innerText = SparkX.Information.TriangleCount;
    circle.Position = Vector2.Lerp(circle.Position, Mouse.Position, 1)
})

Mouse.OnButton1Down(()=>{
    circle2.Position.MoveTo(Mouse.Position, 1)
    
})
