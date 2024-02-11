import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";


new Circle(new Vector2(10, 10)).Opacity = 0.5
let rec = new Rect(new Vector2(-2, -2), new Vector2(1, 1))
let camToBe = Vector2.Zero()

let placedParts = [];

SparkX.RenderLoop(()=>{
    rec.Position =  Vector2.Lerp(rec.Position, Mouse.Position, 0.5)
    camToBe.LerpFromThis(Mouse.Position, 0.05)
    SparkX.Camera.Position = camToBe;

    if (Keyboard.GetKeyState('a')){
        
    }
    placedParts.forEach(part =>{
        part.Position.LerpFromThis(Mouse.Position, 0.05)

    })
})

Mouse.OnButton1Down(()=>{
    let a = new Rect(rec.Position, Vector2.Zero());
    placedParts.push(a);
    a.Scale.MoveTo(Vector2.Fill(2), 0.1)
})