import { Input } from "../SparkX/Input/Input.js";
import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let player = new Circle(new Vector2(0, 1), 1)
let playerPostionToBe = new Vector2(0 ,1)
let camToBe = new Vector2(0, 0)
let obstacal = new Rect(new Vector2(0, 0), new Vector2(10, 10))
let obstacal2 = new Rect(new Vector2(0, 0), new Vector2(10, 10), 0, 'red', 0.5)
let cursor = new Rect(Vector2.Zero(), new Vector2(1, 1))


SparkX.Settings.Grid = true
SparkX.Settings.Cursor = false  
SparkX.Settings.PixelsPerPoint = 25

Input.Mouse.OnButton1Down(()=>{
    obstacal.Position.MoveTo((obstacal2.Position), 1);
    obstacal.Scale.MoveTo(obstacal2.Scale, 1)
    console.log('hey');
})

cursor.Opacity = 0.5
cursor.Color = 'red'
obstacal.Parent = cursor

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
    } if (Input.Keyboard.GetKeyState(' ')){
        playerPostionToBe.y += 70 * SparkX.DeltaTime
    } if (Keyboard.GetKeyState('g')){
        obstacal.Scale.MoveTo(new Vector2(10, 10), 1)
    } if (Keyboard.GetKeyState('h')){
        obstacal.Scale.MoveTo(new Vector2(1, 1), 1)
    }

    obstacal2.Position = (Vector2.Divide(Mouse.Position, 2))
    cursor.Position = Vector2.Lerp((cursor.Position),  Mouse.Position, 0.7)
    SparkX.ConstSettings.Cam.Position = Vector2.Lerp(SparkX.ConstSettings.Cam.Position, camToBe, 0.3)
    player.Position = Vector2.Lerp(player.Position, playerPostionToBe, 1)
    
    obstacal2.Scale = (Vector2.Lerp(obstacal2.Scale, Mouse.Position, 0.9))

    document.getElementById('PosDisplay').innerText = 'Target Frame rate is: ' + SparkX.FramesPerSecond + ". But actualy rate is " + Math.floor(1 / SparkX.DeltaTime)
})

