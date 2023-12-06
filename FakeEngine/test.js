import { Input } from "../SparkX/Input/Input.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Fidelity = 10

let c = new Circle(Vector2.Zero(), 5, 0, 'red', .5)
//let circle = new Circle(Vector2.Zero(), 5, 0, 'white', .5);
// let ded = new Circle(Vector2.Zero(), 5)
// let ded1 = new Circle(Vector2.Zero(), 5)
// let ded2 = new Circle(Vector2.Zero(), 5)
let leftSide = new Rect(new Vector2(-14, 0), new Vector2(2, 20), 0, 'green')
let rightSide = new Rect(new Vector2(14, 0), new Vector2(2, 20), 0, 'green')
let base = new Rect(new Vector2(0, -10), new Vector2(30, 2))

let pause = false;

let PositionToBe = new Vector2(10, 10)

SparkX.RenderStart((()=>{
    SparkX.Settings.Grid = true 
    
    document.getElementById("Screen").style.background = "salmon"
    Input.Keyboard.OnKeyDown(' ', ()=>{ pause = !pause })
    Input.Keyboard.OnKeyDown('r', ()=>{SparkX.FramesPerSecond = 10})
    Input.Keyboard.OnKeyDown('f', ()=>{SparkX.FramesPerSecond = 60})
    Input.Keyboard.OnKeyDown('q', ()=>{SparkX.Settings.TimeScale -= 0.1})
    //Input.Keyboard.OnKeyDown('d', ()=>{PositionToBe.x ++; c.Position.MoveTo(PositionToBe, 0.1)})
    Input.Keyboard.OnKeyDown('d', ()=>{SparkX.ConstSettings.Cam.Position.x++})
    Input.Keyboard.OnKeyDown('a', ()=>{SparkX.ConstSettings.Cam.Position.x--})
    Input.Keyboard.OnKeyDown('s', ()=>{SparkX.ConstSettings.Cam.Position.y--})
    Input.Keyboard.OnKeyDown('w', ()=>{SparkX.ConstSettings.Cam.Position.y++})
    
    //c.AddBasicMovementWASD();
    
    
    
    
}))

let timeElapsed = 0;
let lerpDuration = 3;
let startValue= 0;
let endValue= 10;
let valueToLerp;

SparkX.RenderLoop(()=>{
    console.log(PositionToBe);
    //SparkX.ConstSettings.Cam.Position = new Vector2(c.Position.x, c.Position.y - 10)
    c.Position.y -= 0.1
    if (Vector2.Magnitude(c.Position, base.Position) < 10){
      console.log('Hey');
    }

    // if (timeElapsed < lerpDuration)
    // {
      
    //   valueToLerp = MathG.Lerp(startValue, endValue, timeElapsed / lerpDuration);
    //   timeElapsed += SparkX.DeltaTime;
    // }
    // console.log(valueToLerp);
    // c.Position.x = valueToLerp
})
