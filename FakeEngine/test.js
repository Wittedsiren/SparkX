import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Fidelity = 10

let c = new Circle(Vector2.Zero(), 5, 0, 'red', .5)
let circle = new Circle(Vector2.Zero(), 5, 0, 'white', .5);
let ded = new Circle(Vector2.Zero(), 5)
let ded1 = new Circle(Vector2.Zero(), 5)
let ded2 = new Circle(Vector2.Zero(), 5)
let pause = false;

SparkX.RenderStart(()=>{
    SparkX.Settings.Grid = true 
    document.getElementById("Screen").style.background = "salmon"

    Input.Keyboard.OnKeyDown(' ', ()=>{ pause = !pause })
    Input.Keyboard.OnKeyDown('r', ()=>{circle.Rotation ++})

    circle.AddBasicMovementArrow();
    c.AddBasicMovementWASD();
    ded.AddBasicMovementArrow();

    circle.Parent = c.Position
    ded.Parent = circle.Position
    ded1.Parent = ded.Position
})

SparkX.RenderLoop(()=>{
})