import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Fidelity = 10

let c = new Rect(Vector2.Zero(), Vector2.Fill(10), 5)
let cirvcle = new Circle(Vector2.Zero(), 5, 0, 'green');
let pause = false;

SparkX.RenderStart(()=>{
    SparkX.Settings.Grid = true
    document.getElementById("Screen").style.background = "salmon"

    Input.Keyboard.OnKeyDown(' ', ()=>{ pause = !pause })
    Input.Keyboard.OnKeyDown('w', ()=>{c.Position.y++})
})

SparkX.RenderLoop(()=>{
    if (!pause) c.Rotation++
    console.log(c.Position.y);
}, ()=>{
    if (pause){ return true }
})