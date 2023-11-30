import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let c = new Rect(Vector2.Zero(), Vector2.Fill(10), 5)
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
})