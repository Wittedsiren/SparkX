import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect, drawObject } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let pingpongball = new Circle(Vector2.Zero(), 1)
pingpongball.Color = 'white';
let posToBe = new Vector2(0, 0);
let velocity = new Vector2(10, 0);

let paddle1 = new Rect(new Vector2(30, 0), new Vector2(2, 10))
let paddle2 = new Rect(new Vector2(-30, 0), new Vector2(2, 10))

let paddle1ToBe = new Vector2(30, 0);
let paddle2ToBe = new Vector2(-30, 0);

let paddleSpeeds = 15

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

    return false
}

let paddle1Prev, paddle2Prev;

SparkX.RenderLoop(()=>{
    paddle1Prev = paddle1.Position; paddle2Prev = paddle2.Position;

    if (Keyboard.GetKeyState('i')){
        paddle1ToBe.y += paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 10);
    }
    if (Keyboard.GetKeyState('k')){
        paddle1ToBe.y -= paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 10);
    }

    if (Keyboard.GetKeyState('w')){
        paddle2ToBe.y += paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 10);
    }
    if (Keyboard.GetKeyState('s')){
        paddle2ToBe.y -= paddleSpeeds * SparkX.DeltaTime * Math.abs(velocity.x / 10);
    }

    posToBe = Vector2.Add(posToBe, Vector2.Multiply(velocity, SparkX.DeltaTime))
    pingpongball.Position = Vector2.Lerp(pingpongball.Position, posToBe, 0.5)
    velocity.x *= 1.001

    paddle1.Position = Vector2.Lerp(paddle1.Position, paddle1ToBe, 0.5)
    paddle2.Position = Vector2.Lerp(paddle2.Position, paddle2ToBe, 0.5)

    let paddle1V = Vector2.Sub(paddle1.Position, paddle1Prev)
    let paddle2V = Vector2.Sub(paddle2.Position, paddle2Prev)

    if (isColliding(pingpongball, paddle1) && velocity.x >= 0) {velocity.x *= -1; velocity.y = paddle1V.y * 2}
    if (isColliding(pingpongball, paddle2) && velocity.x <= 0) {velocity.x *= -1; velocity.y = paddle2V.y * 2}
    
})

