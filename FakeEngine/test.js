import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw.js";
import { SparkX } from "../SparkX/SparkX.js";


SparkX.FramesPerSecond = 60
SparkX.Settings.ReduceScreenTearing = false

let rotation = 0;

SparkX.RenderStart(function(){
    document.getElementById("Screen").style.background = "pink"

})

SparkX.RenderLoop(function(){
    
    Draw.square(Vector2.Zero(), new Vector2(1000, 1000), rotation)
    Draw.line(Vector2.Zero(), new Vector2(0, 400))
    Draw.line(Vector2.Zero(), new Vector2(0, -400))
    Draw.line(Vector2.Zero(), new Vector2(400, 0))
    Draw.line(Vector2.Zero(), new Vector2(-400, 0))
    
    Draw.line(new Vector2(-400, -400), new Vector2(-400, 400))
    Draw.line(new Vector2(-400, -400), new Vector2(400, -400))
    Draw.line(new Vector2(400, 400), new Vector2(-400, 400))
    Draw.line(new Vector2(400, 400), new Vector2(400, -400))

    Draw.circle(new Vector2(0, 0), 100)

    
    if (Input.Keyboard.GetKeyState('a')){
        SparkX.ConstSettings.Cam.Position.x += 1 * SparkX.ConstSettings.DeltaTime;    
    }if (Input.Keyboard.GetKeyState('d')){
        SparkX.ConstSettings.Cam.Position.x -= 1 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('w')){
        SparkX.ConstSettings.Cam.Position.y += 1 * SparkX.ConstSettings.DeltaTime;
    }if (Input.Keyboard.GetKeyState('s')){
        SparkX.ConstSettings.Cam.Position.y -= 1 * SparkX.ConstSettings.DeltaTime;
    } 
    console.log(SparkX.FramesPerSecond);
    rotation += 0.05
})