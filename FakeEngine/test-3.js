import { Input } from "../SparkX/Input/Input.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { PointLight } from "../SparkX/Render/Light/Light.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Cursor = false;
SparkX.Settings.Grid = true;

let player = new Rect(new Vector2(0, 0.5), Vector2.Fill(1));
let playerPositionToBe = new Vector2(0, 0.5)
let customCurosr = new Circle(Vector2.Zero(), 0.1)

let ground = new Rect(new Vector2(0, -0.5), new Vector2(100, 1), 0, 'green')
let camOffset = new Vector2(0, 2)
let playerSpeed = 20
let light = new PointLight(new Vector2(0, 10))
light.Brightness = 100
Mouse.OnButton1Down(()=>{
    //new Circle(Mouse.Position)
    SparkX.Camera.Position.MoveTo(Mouse.Position, 1)
})

SparkX.RenderLoop(()=>{
    //SparkX.Camera.Position = Vector2.Lerp(SparkX.ConstSettings.Cam.Position, Vector2.Add(camOffset, player.Position), 0.1)
    player.Position = Vector2.Lerp(player.Position, playerPositionToBe, 0.5)
    if (Input.Keyboard.GetKeyState('d')){
        playerPositionToBe.x += playerSpeed * SparkX.DeltaTime
    } if (Input.Keyboard.GetKeyState('a')){
        playerPositionToBe.x -= playerSpeed * SparkX.DeltaTime
    }

    customCurosr.Position = Vector2.Lerp(customCurosr.Position, Mouse.Position, 1)
})
