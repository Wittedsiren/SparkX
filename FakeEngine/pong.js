import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let pingpongball = new Circle(Vector2.Zero(), 1, 0, 'white')
let posToBe = new Vector2(0, 0);
let velocity = new Vector2(10, 0);

let paddle1 = new Rect(new Vector2(30, 0), new Vector2(2, 10), 0, 'white')
let paddle2 = new Rect(new Vector2(-30, 0), new Vector2(2, 10), 0, 'white')

let paddle1ToBe = new Vector2(30, 0);
let paddle2ToBe = new Vector2(-30, 0);

let paddleSpeeds = 15

let bg = new Rect(Vector2.Zero(), new Vector2(100, 100), 0, 'black')
bg.SetZIndex(0)

let top = new Rect(new Vector2(0, 22), new Vector2(100, 2), 0, 'gray')
let bottom = new Rect(new Vector2(0, -22), new Vector2(100, 2), 0, 'gray')

let cam = SparkX.Camera;
let camDest = new Vector2(cam.Position.x, cam.Position.y);
let camOffset = new Vector2(0, 0);

function isColliding(cir = Circle, rect = Rect){
    //Since its pong there is no need for a perfect circle to rectangle collision :)
    const { Scale } = rect, { Radius } = cir;
    if (cir.Position.y - Radius  <= rect.Position.y + Scale.y/2 && cir.Position.y + Radius >= rect.Position.y - Scale.y/2){
        if (cir.Position.x + Radius >= rect.Position.x - Scale.x/2 && cir.Position.x - Radius <= rect.Position.x + Scale.x/2){
            return true;
        } else if (cir.Position.x - Radius <= rect.Position.x + Scale.x/2 && cir.Position.x + Radius >= rect.Position.x - Scale.x/2){
            return true
        }
    }

    // if (cir.Position.x + Radius >= rect.Position.x - Scale.x/2 && cir.Position.x - Radius <= rect.Position.x + Scale.x/2){

    // }

    return false
}

let paddle1Prev, paddle2Prev;

SparkX.RenderStart(()=>{
    SparkX.Settings.Fidelity = 3;
    
})

SparkX.RenderLoop(()=>{
    paddle1Prev = paddle1.Position; paddle2Prev = paddle2.Position;

    if (Keyboard.GetKeyState('i')){
        paddle1ToBe.y += paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 8);
    }
    if (Keyboard.GetKeyState('k')){
        paddle1ToBe.y -= paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 8);
    }

    if (Keyboard.GetKeyState('w')){
        paddle2ToBe.y += paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 8);
    }
    if (Keyboard.GetKeyState('s')){
        paddle2ToBe.y -= paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 8);
    }

    posToBe = Vector2.Add(posToBe, Vector2.Multiply(velocity, SparkX.DeltaTime))
    pingpongball.Position = Vector2.Lerp(pingpongball.Position, posToBe, 0.5)
    velocity.x += 0.01 * ( velocity.x / Math.abs(velocity.x))

    paddle1.Position = Vector2.Lerp(paddle1.Position, paddle1ToBe, 0.5)
    paddle2.Position = Vector2.Lerp(paddle2.Position, paddle2ToBe, 0.5)

    let paddle1V = Vector2.Sub(paddle1.Position, paddle1Prev)
    let paddle2V = Vector2.Sub(paddle2.Position, paddle2Prev)

    if (isColliding(pingpongball, paddle1) && velocity.x >= 0) {velocity.x *= -1; velocity.y += paddle1V.y * 10; camOffset = new Vector2(1, paddle1.Position.y / 10);}
    if (isColliding(pingpongball, paddle2) && velocity.x <= 0) {velocity.x *= -1; velocity.y += paddle2V.y * 10; camOffset = new Vector2(-1, paddle2.Position.y / 10);}
    if (isColliding (pingpongball, top) && velocity.y >= 0) { velocity.y *= -1; camOffset = new Vector2(0, 3)}
    if (isColliding (pingpongball, bottom) && velocity.y <= 0) { velocity.y *= -1; camOffset = new Vector2(0, -3)}
    
    cam.Position = Vector2.Lerp(cam.Position, Vector2.Add(Vector2.Add(camDest, camOffset), Vector2.Divide(pingpongball.Position, 10)), 0.05)})

