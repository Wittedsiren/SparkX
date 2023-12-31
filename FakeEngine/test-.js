import { Input } from "../SparkX/Input/Input.js";
import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { PointLight } from "../SparkX/Render/Light/Light.js";
import { SparkX } from "../SparkX/SparkX.js";

//let player = new Circle(new Vector2(0, 1), 1)
let playerPostionToBe = new Vector2(0 ,1)
let camToBe = new Vector2(0, 0)
// let obstacal = new Rect(new Vector2(0, 0), new Vector2(10, 10))
let obstacal2 = new Rect(new Vector2(0, 0), new Vector2(10, 10), 0, 'yellow', 0.5)
let cursor = new Rect(Vector2.Zero(), new Vector2(1, 1))
let obsOri = Vector2.Zero()
let posForLightToBe = new Circle(Vector2.Zero());
SparkX.Settings.Grid = true
SparkX.Settings.Cursor = false  
SparkX.Settings.PixelsPerPoint = 25
let placeType = 'rect'
let clickedPos = Vector2.Zero();
let clicked = false
SparkX.FramesPerSecond = 60
Input.Mouse.OnButton1Down(()=>{
  clicked = !clicked
  clickedPos = Vector2.Floor(Mouse.Position)
  if (!clicked && placeType == 'rect'){
    let newBox = new Rect(obstacal2.Position, Vector2.Divide(obstacal2.Scale, 2))
    newBox.Scale.MoveTo(obstacal2.Scale, 0.1)
 
    
  } else if (!clicked && placeType == 'cir'){
    let newCir = new Circle(obstacal2.Position, obstacal2.Scale.x)
  }
    //obstacal.Position.MoveTo((obstacal2.Position), 1);
    // console.log('CalledPOS');
    //obstacal.Scale.MoveTo(obstacal2.Scale, 1)
    // console.log('CalledSCALE');

    
})


posForLightToBe.AddBasicMovementArrow()
posForLightToBe.Opacity = 0
Keyboard.OnKeyDown('q', ()=>{ placeType = 'rect' })
Keyboard.OnKeyDown('e', ()=>{ placeType = 'cir' })
cursor.Opacity = 0.5
cursor.Color = 'red'
//obstacal.Parent = cursor

SparkX.Settings.DefaultRenderColor = 'green'


let light = new PointLight(Vector2.Zero())
light.Details = false;
light.Brightness = 2
SparkX.Settings.Lighting.Fidelity = 1
SparkX.RenderLoop(()=>{  

    for (let i = 0; i < 9; i++){
        if (Keyboard.GetKeyState((i + 1).toString())){
            console.log('log');
            SparkX.FramesPerSecond = (i + 1) * 10
        }
    }

    SparkX.Canvas.style.backgroundColor = 'salmon'

    if (Input.Keyboard.GetKeyState('d')){
        camToBe.x += 10 *SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState('a')){
        camToBe.x -= 10 *SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState('w')){
        camToBe.y += 10 *SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState('s')){
        camToBe.y -= 10 *SparkX.DeltaTime
    
    } if (Keyboard.GetKeyState('g')){
        obstacal.Scale.MoveTo(new Vector2(10, 10), 1)
    } if (Keyboard.GetKeyState('h')){
        obstacal.Scale.MoveTo(new Vector2(1, 1), 1)
    }
    if (Keyboard.GetKeyState('j')){
        light.Brightness ++
    }
    if (Keyboard.GetKeyState('k')){
      light.Brightness --
  }
  if (Keyboard.GetKeyState('u')){
    SparkX.Settings.Lighting.Fidelity += 0.1
    console.log(SparkX.Settings.Lighting.Fidelity);
}
if (Keyboard.GetKeyState('i')){
  SparkX.Settings.Lighting.Fidelity -= 0.1
}

    
  
    
    cursor.Position = Vector2.Lerp(cursor.Position, Vector2.Floor(Mouse.Position), 0.5)//Vector2.Floor(Mouse.Position)
    SparkX.ConstSettings.Cam.Position = Vector2.Lerp(SparkX.ConstSettings.Cam.Position, camToBe, 0.3)
    
    SparkX.Settings.Fidelity = 1
    
    
    light.Position = Vector2.Lerp(light.Position, posForLightToBe.Position, 0.1)
    document.getElementById('PosDisplay').innerText = 'Target Frame rate is: ' + SparkX.FramesPerSecond + ". But actualy rate is " + Math.floor(1 / SparkX.DeltaTime)

    if (! clicked){
      obstacal2.Scale = (Vector2.Lerp(obstacal2.Scale, Vector2.Zero(), 0.5))
      obstacal2.Position = Vector2.Lerp(obstacal2.Position, Mouse.Position, 0.5)
    } else {
      obstacal2.Position = Vector2.Add(clickedPos, Vector2.Divide(obstacal2.Scale, 2)) // Vector2.Add(clickedPos, Vector2.Divide(obstacal2.Scale, 2)) 
      obstacal2.Scale = Vector2.Sub(Vector2.Floor(Mouse.Position), clickedPos) //Vector2.Sub(Vector2.Floor(Mouse.Position), clickedPos) 
    }
})


