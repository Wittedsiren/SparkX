import { Input } from "../SparkX/Input/Input.js";
import { MathG } from "../SparkX/Math/MathG.js";
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



SparkX.RenderStart((()=>{
    SparkX.Settings.Grid = true 
    
    document.getElementById("Screen").style.background = "salmon"
    Input.Keyboard.OnKeyDown(' ', ()=>{ pause = !pause })
    Input.Keyboard.OnKeyDown('r', ()=>{SparkX.FramesPerSecond = 10})
    Input.Keyboard.OnKeyDown('f', ()=>{SparkX.FramesPerSecond = 60})
    Input.Keyboard.OnKeyDown('q', ()=>{SparkX.Settings.TimeScale -= 0.1})

    circle.AddBasicMovementArrow();
    c.AddBasicMovementWASD();
    ded.AddBasicMovementArrow();

    circle.Parent = c
    ded.Parent = circle
    ded1.Parent = ded
    
}))

let timeElapsed = 0;
let lerpDuration = 3;
let startValue= 0;
let endValue= 10;
let valueToLerp;

SparkX.RenderLoop(()=>{
    SparkX.ConstSettings.Cam.Position = new Vector2(c.Position.x, c.Position.y - 10)
    c.Position.y -= 0.1

    if (timeElapsed < lerpDuration)
    {
      valueToLerp = MathG.Lerp(startValue, endValue, timeElapsed / lerpDuration);
      timeElapsed += SparkX.ConstSettings.DeltaTime;
    }
    console.log(valueToLerp);
})