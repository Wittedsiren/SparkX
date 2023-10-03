import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw.js";
import { SparkX } from "../SparkX/SparkX.js";


SparkX.RenderLoop(function(){
    
    Draw.line(Vector2.Zero(), new Vector2(0, 400))
    Draw.line(Vector2.Zero(), new Vector2(0, -400))
    Draw.line(Vector2.Zero(), new Vector2(400, 0))
    Draw.line(Vector2.Zero(), new Vector2(-400, 0))
    
    Draw.line(new Vector2(-400, -400), new Vector2(-400, 400))
    Draw.line(new Vector2(-400, -400), new Vector2(400, -400))
    Draw.line(new Vector2(400, 400), new Vector2(-400, 400))
    Draw.line(new Vector2(400, 400), new Vector2(400, -400))

    

    if (Input.Keyboard.GetKeyState('a')){
        SparkX.ConstSettings.Cam.Position.x += 1 * SparkX.ConstSettings.DeltaTime;
    } else if (Input.Keyboard.GetKeyState('d')){
        SparkX.ConstSettings.Cam.Position.x -= 1 * SparkX.ConstSettings.DeltaTime;
    } else if (Input.Keyboard.GetKeyState('w')){
        SparkX.ConstSettings.Cam.Position.y += 1 * SparkX.ConstSettings.DeltaTime;
    } else if (Input.Keyboard.GetKeyState('s')){
        SparkX.ConstSettings.Cam.Position.y -= 1 * SparkX.ConstSettings.DeltaTime;
    }
})