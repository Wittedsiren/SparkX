import { Input } from "../SparkX/Input/Input.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect, drawObject } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Fidelity = 2

// let c = new Circle(Vector2.Zero(), 5, 0, 'red', .5)
// let leftSide = new Rect(new Vector2(-14, 0), new Vector2(2, 20), 0, 'green')
// let rightSide = new Rect(new Vector2(14, 0), new Vector2(2, 20), 0, 'green')
// let base = new Rect(new Vector2(0, -10), new Vector2(30, 2))
let cursor = new Circle(Vector2.Zero(), 1, 0, 'yellow')
let newCirlce = new Circle(Vector2.Zero())
let pause = false;
SparkX.Settings.PixelsPerPoint = 100
let PositionToBe = new Vector2(10, 10)
let plot = 100;
let points = 1
SparkX.Settings.Cursor = true;

function placePoint(pos){
  new Circle(Vector2.Floor(pos))
}
// SparkX.Settings.Optimization.MathAccuracy = 0.1
// console.log(Math.round(Math.abs(1 / (SparkX.Settings.Optimization.MathAccuracy * 100))));

function drawGraph( a ){
  SparkX.RenderLoop(()=>{
    let prevPointX = 0;
    let prevPointY = a(0);
    for (let index = 0; index < plot * points; index++) {
      
      Draw.line(new Vector2(prevPointX, prevPointY), new Vector2((index + 1) / points, a((index + 1) / points)), 'red');
      // Draw.circle(new Vector2(prevPointX, prevPointY) , 0.1)
      prevPointX = (index + 1) / points;
      prevPointY = a((index + 1) / points)
    }
    // Draw.circle(new Vector2(prevPointX, prevPointY) , 0.1)

    

    prevPointX = 0;
    prevPointY = a(0);
    for (let index = 0; index < plot * points; index++) {
      
      Draw.line(new Vector2(prevPointX, prevPointY), new Vector2((-index - 1) / points, a((-index - 1) / points)), 'red');
      // Draw.circle(new Vector2(prevPointX, prevPointY) , 0.1)
      prevPointX = (-index - 1) / points;
      prevPointY = a((-index - 1) / points)
    }
    // Draw.circle(new Vector2(prevPointX, prevPointY) , 0.1)
  })
}

let cosder = MathG.Derivative(x => Math.pow(Math.E ,x));

SparkX.RenderStart((()=>{
    
    //newCirlce.Position.MoveTo(new Vector2(1, 1), 100)
    SparkX.Settings.Grid = true 
    //drawGraph( (x)=>{ return ( Math.pow(x, 3) )  } )
    drawGraph( (x)=>{ return ( Math.sin(x) )  } )
    drawGraph( (x)=>{ return ( Math.pow(Math.E, x) )  } )
    document.getElementById("Screen").style.background = "salmon"
    Input.Keyboard.OnKeyDown(' ', ()=>{ pause = !pause })
    Input.Keyboard.OnKeyDown('r', ()=>{points++})
    Input.Keyboard.OnKeyDown('f', ()=>{points--})
    Input.Keyboard.OnKeyDown('t', ()=>{SparkX.Settings.PixelsPerPoint++})
    Input.Keyboard.OnKeyDown('g', ()=>{SparkX.Settings.PixelsPerPoint--})
    //Input.Keyboard.OnKeyDown('d', ()=>{PositionToBe.x ++; c.Position.MoveTo(PositionToBe, 0.1)})
    Input.Keyboard.OnKeyDown('d', ()=>{SparkX.ConstSettings.Cam.Position.x+=1})
    Input.Keyboard.OnKeyDown('a', ()=>{SparkX.ConstSettings.Cam.Position.x-=1})
    Input.Keyboard.OnKeyDown('s', ()=>{SparkX.ConstSettings.Cam.Position.y-=1})
    Input.Keyboard.OnKeyDown('w', ()=>{SparkX.ConstSettings.Cam.Position.y+=1})
    Input.Keyboard.OnKeyDown(' ', ()=>{newCirlce.Position.MoveTo(Input.Mouse.Position, 0.1)})
    Input.Keyboard.OnKeyDown('h', ()=>{SparkX.ConstSettings.Cam.Position.MoveTo(new Vector2(SparkX.ConstSettings.Cam.Position.x, SparkX.ConstSettings.Cam.Position.y + 1), 1)})
    Input.Keyboard.OnKeyDown('b', ()=>{SparkX.ConstSettings.Cam.Position.MoveTo(new Vector2(SparkX.ConstSettings.Cam.Position.x, SparkX.ConstSettings.Cam.Position.y - 1), 1)})
    console.log(cosder(1));
    //c.AddBasicMovementWASD();
    // newCirlce.Parent = cursor.Position
}))

let timeElapsed = 0;
let lerpDuration = 3;
let startValue= 0;
let endValue= 10;
let valueToLerp;



SparkX.RenderLoop(()=>{
    //console.log(Input.Mouse.Position);
    //SparkX.ConstSettings.Cam.Position = new Vector2(c.Position.x, c.Position.y - 10)
    //cursor.Position.MoveTo(Input.Mouse.Position, 0.1)
    cursor.Position.y = ((Math.abs(Input.Mouse.Position.x) > plot) ) ? Input.Mouse.Position.y : Math.pow(Math.E, Input.Mouse.Position.x)
    // if (Vector2.Magnitude(c.Position, Vector2.Floor(Input.Mouse.Position)) <= cursor.Radius){
    //   console.log('Hey');
    //   c.Radius = 6
    // } else {
    //   c.Radius = 1.1
    // }

    // if (timeElapsed < lerpDuration)
    // {
      
    //   valueToLerp = MathG.Lerp(startValue, endValue, timeElapsed / lerpDuration);
    //   timeElapsed += SparkX.DeltaTime;
    // }
    // console.log(valueToLerp);
    // c.Position.x = valueToLerp
    document.getElementById('PosDisplay').innerText = "Derivitive of circle pos is: " + cosder(cursor.Position.x);
    
})
