import { Input } from "../SparkX/Input/Input.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let player = new Circle(new Vector2(0, 1), 1)
let playerPostionToBe = new Vector2(0 ,1)
let obstacal = new Rect(new Vector2(10, 10), new Vector2(10, 10))

SparkX.Settings.Grid = true
SparkX.Settings.Cursor = true
SparkX.Settings.PixelsPerPoint = 50

SparkX.RenderLoop(()=>{          

    SparkX.Canvas.style.backgroundColor = 'salmon'

    if (Input.Keyboard.GetKeyState('d')){
        playerPostionToBe.x += 10 * SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState('a')){
        playerPostionToBe.x -= 10 * SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState(' ')){
        playerPostionToBe.y += 70 * SparkX.DeltaTime
    }

    playerPostionToBe.y -= 9.81 * SparkX.DeltaTime

    player.Position = Vector2.Lerp(player.Position, playerPostionToBe, 1)
})