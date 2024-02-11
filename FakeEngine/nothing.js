import { Vector2 } from "../SparkX/Math/Vector2.js";
import { renderBuffer } from "../SparkX/Render/Buffers/RenderBuffer.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let walls = [
    new Rect(new Vector2(35, 0), new Vector2(10, 100), 0, 'white'),
    new Rect(new Vector2(-35, 0), new Vector2(10, 100), 0, 'white'),
    new Rect(new Vector2(0, 25), new Vector2(100, 10), 0, 'white'),
    new Rect(new Vector2(0, -25), new Vector2(100, 10), 0, 'white'),
]
let bg = new Rect(Vector2.Zero(), Vector2.Fill(100), 0, 'black')
bg.SetZIndex(0)

let ball = {
    velocity : new Vector2(0.5, 0.5),
    ball : new Circle(new Vector2(0, 0), 1, 0, 'white')
}



SparkX.Settings.Fidelity = 10

let camToBe = new Vector2(0, 0);

function isColliding(cir, rect){
    const { Scale } = rect, { Radius } = cir;
    if (cir.Position.y - Radius  <= rect.Position.y + Scale.y/2 && cir.Position.y + Radius >= rect.Position.y - Scale.y/2){
        if (cir.Position.x + Radius >= rect.Position.x - Scale.x/2 && cir.Position.x - Radius <= rect.Position.x + Scale.x/2){
            return true;
        } else if (cir.Position.x - Radius <= rect.Position.x + Scale.x/2 && cir.Position.x + Radius >= rect.Position.x - Scale.x/2){
            return true
        }
    }
}
let t = true;
function onHit(){
    if (t){
        t = false;
        walls.forEach(wall => wall.Color = 'black')
        ball.ball.Color = 'black'
        bg.Color = 'white'
    } else {
        t = true;
        walls.forEach(wall => wall.Color = 'white')
        ball.ball.Color = 'white'
        bg.Color = 'black'
    }
    ball.ball.Radius -= .01
    walls.forEach(wall => wall.Scale = Vector2.Add(wall.Scale, 1 * ball.ball.Radius))
}

SparkX.RenderLoop(()=>{
    
    
        if (isColliding(ball.ball, walls[0]) && ball.velocity.x >= 0) {ball.velocity.x *= -1; camToBe = new Vector2(1, 0); new Audio('../click-button-140881.mp3').play(); onHit()}
        if (isColliding(ball.ball, walls[2]) && ball.velocity.y >= 0) {ball.velocity.y *= -1; camToBe = new Vector2(0, 1); new Audio('../click-button-140881.mp3').play(); onHit()}
        if (isColliding(ball.ball, walls[1]) && ball.velocity.x <= 0) {ball.velocity.x *= -1; camToBe = new Vector2(-1, 0); new Audio('../click-button-140881.mp3').play(); onHit()}
        if (isColliding(ball.ball, walls[3]) && ball.velocity.y <= 0) {ball.velocity.y *= -1; camToBe = new Vector2(0, -1); new Audio('../click-button-140881.mp3').play(); onHit()}


    // if (Vector2.IsEqualTo(prevV, ball.velocity)){
    //     ball.ball.Color = 'white';
    //     walls.forEach(wall => wall.Scale = Vector2.Add(wall.Scale, 0.01))
    // }

        let vInc = new Vector2(0.001, 0.001)

        ball.ball.Position = Vector2.Lerp(ball.ball.Position, Vector2.Add(ball.ball.Position, ball.velocity), 0.5)
        ball.velocity = Vector2.Add(ball.velocity, Vector2.Multiply(vInc, Vector2.Divide(ball.velocity, new Vector2(Math.abs(ball.velocity.x), Math.abs(ball.velocity.y)))))
       
    
    SparkX.Camera.Position = Vector2.Lerp(SparkX.Camera.Position, camToBe, 0.05);
    
    console.log(renderBuffer.buffer.length);
})