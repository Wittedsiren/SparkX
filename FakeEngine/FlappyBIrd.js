import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

let bird = new Circle(new Vector2(0, 0), 7);
let birdPosToBe = new Vector2(bird.Position.x, bird.Position.y);
let birdSpeed = 0.1

let gravity = 9.81

let camOffset = new Vector2(10, 0);

let obstacles = [
    new Rect(new Vector2(80, -60), new Vector2(15, 100)),
    new Rect(new Vector2(140, 70), new Vector2(15, 100)),
    new Rect(new Vector2(200, -60), new Vector2(15, 100)),
    new Rect(new Vector2(40, 70), new Vector2(15, 100))

]

Keyboard.OnKeyDown(' ', ()=>{
    console.log('Hey');
    birdPosToBe.y += -birdPosToBe.y + 200;
})

SparkX.RenderStart(()=>{
    SparkX.Camera.Zoom = 0.5
})

SparkX.RenderLoop(()=>{
    let resetThreshold = 100
    obstacles.forEach(o=>{
        o.Position.x -= 20 * SparkX.DeltaTime;
        console.log(bird.Position.x - o.Position.x);
        if (Math.abs(o.Position.x - bird.Position.x) > resetThreshold){
            o.Position.x = 90
        }
    });
    
    birdPosToBe.y -= ( gravity * SparkX.DeltaTime) * 50;
    bird.Position = Vector2.Lerp(bird.Position, birdPosToBe, 0.01)

    SparkX.Camera.Position = Vector2.Lerp(SparkX.Camera.Position, Vector2.Add(bird.Position, camOffset), 0.01)
})
