import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

function polynomialInterpolation(pointA = Vector2, pointB = Vector2, degree = Number, t = Number){
    let stretch = (pointB.y - pointA.y) / (Math.pow((pointB.x - pointA.x), degree) + 0.01)
    console.log(stretch)
    if (!stretch){ console.log('Nan')}
    let eq = stretch * Math.pow((pointB.x - pointA.x) * t, degree) + pointA.y;
    for (let i = 0; i < 10; i++) {
        //Draw.circle(polynomialInterpolation(pointA, pointB, degree, i / t), 0.5)
        //new Circle(polynomialInterpolation(pointA, pointB, degree, i / t))
    }
    return new Vector2(pointA.x + (pointB.x - pointA.x) * t, eq);
}

let a = new Vector2(10, 5);
let b = new Vector2(20, 15)

let thing = new Circle(a)
let camToBe = new Vector2(1,1)
new Circle(b)
SparkX.Settings.Cursor = true;
let cursor = new Circle(Vector2.Zero());
let deg = 1;
let player = new Rect(Vector2.Zero())
let playerPositionToBe = Vector2.Zero();
thing.Color = 'red'

let playerSpeed = 100
let polyLerp = true;
//let cir = new Circle(polynomialInterpolation(a, b, 2, 0.5))
console.log();
let angle = 0;
SparkX.RenderLoop(()=>{
    thing.Position.SetAngle(angle, thing.Position.Length())
    // for (let index = 0; index < 10; index++) {
    //     Draw.circle(polynomialInterpolation(thing.Position, b, deg, index / 10), 0.5)
    // }

    // thing.Position = Mouse.Position.Floor().Multiply(2)
    // camToBe = Mouse.Position;
    //SparkX.Camera.Position = polynomialInterpolation(SparkX.Camera.Position, camToBe, 2, 0.1)
    // cursor.Position = polynomialInterpolation(cursor.Position, Mouse.Position, 2, 0.5)
    
    console.log(SparkX.Camera.Position)
    if (Keyboard.GetKeyState('d')){
        playerPositionToBe.x+= 1 * SparkX.DeltaTime * playerSpeed;
    }
    if (Keyboard.GetKeyState('a')){
        playerPositionToBe.x-= 1 * SparkX.DeltaTime * playerSpeed;
    }
    if (Keyboard.GetKeyState('w')){
        playerPositionToBe.y+= 1 * SparkX.DeltaTime * playerSpeed;
    }
    if (Keyboard.GetKeyState('s')){
        playerPositionToBe.y-= 1 * SparkX.DeltaTime * playerSpeed;
    }

    player.Position = Vector2.Lerp(player.Position, playerPositionToBe, 0.5)
    if (polyLerp){
        SparkX.Camera.Position = polynomialInterpolation(SparkX.Camera.Position, player.Position, 1, 0.3 )
        player.Color = 'orange'
    } else {
        SparkX.Camera.Position = Vector2.Lerp(SparkX.Camera.Position, player.Position, 0.3 )
        player.Color = 'blue'
    }
    if (Keyboard.GetKeyState('i')){
        angle++;
    }
})

Keyboard.OnKeyDown('q', ()=>{
    polyLerp = !polyLerp;
})

Mouse.OnButton1Down(()=>{
    if (SparkX.Canvas == document.getElementById('screen')){
        SparkX.Canvas = document.getElementById('Screen')
    }else{
        SparkX.Canvas = document.getElementById('screen')
    }
})

