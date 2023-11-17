import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.ReduceScreenTearing = false
SparkX.Settings.Fidelity = 10
SparkX.Settings.Grid = true
SparkX.Settings.TimeScale = 1
SparkX.FramesPerSecond = 60
let rotation = 0;

SparkX.RenderStart(() => {
    
    document.getElementById("Screen").style.background = "pink"

    Input.Mouse.OnScrollWheelUp(() => {console.log("Hello")})
    Input.Keyboard.OnKeyDown('f', () => {SparkX.Settings.ReduceScreenTearing = !SparkX.Settings.ReduceScreenTearing})
    Input.Keyboard.OnKeyDown('q', () => {SparkX.ConstSettings.Cam.Zoom += 0.1})
    Input.Keyboard.OnKeyDown('e', () => {SparkX.ConstSettings.Cam.Zoom -= 0.1})
})

SparkX.RenderLoop(() => {
    
    Draw.square( Vector2.Zero(), new Vector2(500, 500), rotation )
    Draw.circle( Vector2.Zero(), 200, rotation)

    Draw.square( new Vector2(12.23, 0), new Vector2(500, 500), 0)

    //Draw.square(new Vector2(100, 1000), new Vector2(1000, 1000), rotation)
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
        SparkX.ConstSettings.Cam.Position.x -= 1 * SparkX.ConstSettings.DeltaTime;    
    }if (Input.Keyboard.GetKeyState('d')){
        SparkX.ConstSettings.Cam.Position.x += 1 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('w')){
        SparkX.ConstSettings.Cam.Position.y += 1 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('s')){
        SparkX.ConstSettings.Cam.Position.y -= 1 * SparkX.ConstSettings.DeltaTime;
    } 
    rotation += 1

    
})