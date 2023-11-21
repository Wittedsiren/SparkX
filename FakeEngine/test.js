import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Line } from "../SparkX/Render/Draw/Line.js";
import { SparkX } from "../SparkX/SparkX.js";
import { Buffer } from "../SparkX/Render/Stacks/RenderBuffer.js"
import { MathG } from "../SparkX/Math/MathG.js";

SparkX.Settings.ReduceScreenTearing = false
SparkX.Settings.Fidelity = 10
SparkX.Settings.Grid = true
SparkX.Settings.TimeScale = 1
SparkX.Settings.PixelsPerPoints = 25

let rotation = 0;
let line = new Line(Vector2.Zero(), Vector2.Fill(50))

function shoot(){
    let radius = 1
    SparkX.RenderLoop(() => {
        Draw.circle(Vector2.Zero(), radius, 0, 'darkblue')
        radius++
    })
}

SparkX.RenderStart(() => {
    
    document.getElementById("Screen").style.background = "salmon"

    Input.Mouse.OnScrollWheelUp(() => {console.log("Hello")})
    //Input.Keyboard.OnKeyDown('f', () => {SparkX.Settings.ReduceScreenTearing = !SparkX.Settings.ReduceScreenTearing})
    Input.Keyboard.OnKeyDown('q', () => {SparkX.Settings.PixelsPerPoints += 1})
    Input.Keyboard.OnKeyDown('e', () => {SparkX.Settings.PixelsPerPoints -= 1})
    Input.Keyboard.OnKeyDown('f', () => {rotation += 1})
    Input.Keyboard.OnKeyDown('g', () => {rotation -= 1})
    
})

let position = new Vector2(0, 0)

let shot = false
let positionToBe = Vector2.Zero()
SparkX.RenderLoop(() => {
    let deltaTime = SparkX.ConstSettings.DeltaTime;
    //console.log(Buffer[0]);
    

    Draw.line(Vector2.Zero(), new Vector2(position.x, 0))

    
    Draw.circle( new Vector2(0, 0), 1 )
    Draw.line( Vector2.Add(MathG.RotateAroundPos(new Vector2(5 , -5), Vector2.Zero(), rotation), positionToBe), 
    Vector2.Add(MathG.RotateAroundPos(new Vector2(-5, -5), Vector2.Zero(), rotation), positionToBe), 'green')
    Draw.line( Vector2.Add(MathG.RotateAroundPos(new Vector2(5, -5), Vector2.Zero(), rotation), positionToBe),
    Vector2.Add(MathG.RotateAroundPos(new Vector2(0, 5), Vector2.Zero(), rotation), positionToBe), 'green')
    Draw.line( Vector2.Add(MathG.RotateAroundPos(new Vector2(-5, -5), Vector2.Zero(), rotation), positionToBe),
    Vector2.Add(MathG.RotateAroundPos(new Vector2(0, 5), Vector2.Zero(), rotation), positionToBe), 'green')
    //Draw.line(Vector2.Zero(), new Vector2())
    // Draw.square( Vector2.Zero(), new Vector2(500, 500), rotation )
    // Draw.circle( Vector2.Zero(), 200, rotation)

    // Draw.square( new Vector2(12.23, 0), new Vector2(500, 500), 0)

    if (Input.Keyboard.GetKeyState(' ')){ shoot() }


    Draw.rect(new Vector2(0, 0), new Vector2(10, 10), rotation)
    // Draw.square(Vector2.Zero(), new Vector2(900, 900), -rotation)
    // Draw.square(Vector2.Zero(), new Vector2(800, 800), rotation)
    // Draw.square(Vector2.Zero(), new Vector2(700, 700), -rotation)
    // Draw.square(Vector2.Zero(), new Vector2(600, 600), rotation)
    // Draw.square(Vector2.Zero(), new Vector2(500, 500), -rotation)


    
    // Draw.square(Vector2.Fill(1000), new Vector2(1000, 1000), rotation)
    // Draw.line(Vector2.Zero(), new Vector2(0, 400))
    // Draw.line(Vector2.Zero(), new Vector2(0, -400))
    // Draw.line(Vector2.Zero(), new Vector2(400, 0))
    // Draw.line(Vector2.Zero(), new Vector2(-400, 0))
    
    // Draw.line(new Vector2(-400, -400), new Vector2(-400, 400))
    // Draw.line(new Vector2(-400, -400), new Vector2(400, -400))
    // Draw.line(new Vector2(400, 400), new Vector2(-400, 400))
    // Draw.line(new Vector2(400, 400), new Vector2(400, -400))

    //Draw.circle(new Vector2(0, 10000), 200, 0)

    if (Input.Keyboard.GetKeyState('a')){
        positionToBe.x -= 0.01 * SparkX.ConstSettings.DeltaTime;    
    }if (Input.Keyboard.GetKeyState('d')){
        positionToBe.x += 0.01 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('w')){
        positionToBe.y += 0.01 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('s')){
        positionToBe.y -= 0.01 * SparkX.ConstSettings.DeltaTime;
    }     
    // if (Input.Keyboard.GetKeyState('a')){
    //     SparkX.ConstSettings.Cam.Position.x -= 0.1 * SparkX.ConstSettings.DeltaTime / SparkX.ConstSettings.Cam.Zoom;    
    // }if (Input.Keyboard.GetKeyState('d')){
    //     SparkX.ConstSettings.Cam.Position.x += 0.1 * SparkX.ConstSettings.DeltaTime / SparkX.ConstSettings.Cam.Zoom;
    // }if (Input.Keyboard.GetKeyState('w')){
    //     SparkX.ConstSettings.Cam.Position.y += 0.1 * SparkX.ConstSettings.DeltaTime / SparkX.ConstSettings.Cam.Zoom;
    // }if (Input.Keyboard.GetKeyState('s')){
    //     SparkX.ConstSettings.Cam.Position.y -= 0.1 * SparkX.ConstSettings.DeltaTime / SparkX.ConstSettings.Cam.Zoom;
    // } 
    position.x += 1 * deltaTime
    positionToBe.x = Input.Mouse.X
    positionToBe.y = Input.Mouse.Y
    
})