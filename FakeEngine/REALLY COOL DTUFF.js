import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { MathG } from "../SparkX/Math/MathG.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { renderBuffer } from "../SparkX/Render/Buffers/RenderBuffer.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect, drawObject } from "../SparkX/Render/Draw/DrawObjects.js";
import { mat } from "../SparkX/Render/Draw/mat.js";
import { PointLight } from "../SparkX/Render/Light/Light.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Cursor = true;


let vec = new Vector2(10, 17);
// let cir = new Circle(vec, 0.25, 0, 'red', 1)
let vec2 = new Vector2(10, 10);
// let cir2 = new Circle(vec2, 0.25, 0, 'yellow')

let rect = new Rect(new Vector2(10, 10), Vector2.Fill(5))


SparkX.Settings.Fidelity = 3
SparkX.Settings.PixelsPerPoint = 25
SparkX.FramesPerSecond = 90
SparkX.Settings.Grid = false;
rect.Opacity = 1;
let pos = new Vector2(4,4)
new Circle(Vector2.Zero()).Color = 'Black'
    // let partA = new Rect(new Vector2(-9, 4), new Vector2(1, 10))
    // let partAA = new Rect(new Vector2(-8, 9), new Vector2(3, 1))
    // let partAB = new Rect(new Vector2(-8, -0.5), new Vector2(3, 1))
    // partA.Color = 'black'
    // partAA.Color = 'black'
    // partAB.Color = 'black'
    // let partB = new Rect(new Vector2(1, 4), new Vector2(1, 10))
    // let partBA = new Rect(new Vector2(0, 9), new Vector2(3, 1))
    // let partBB = new Rect(new Vector2(0, -0.5), new Vector2(3, 1))
    // partBA.Color = 'blacks'
    // partBB.Color = 'black'
    // partB.Color = 'black'
    
let angle = 0;
SparkX.RenderLoop(()=>{
    Draw.text('î', new Vector2(11,0))
    Draw.text('ĵ', new Vector2(0,11))
    // Draw.text(`${Math.floor(rect.Position.x)}, ${Math.floor(rect.Position.y)}`, rect.Position)
    // Draw.text(mat[0][0], new Vector2(-7, 6))
    // Draw.text(mat[1][0], new Vector2(-7, 1))
    // Draw.text(mat[1][1], new Vector2(-2, 1))
    // Draw.text(mat[0][1], new Vector2(-2, 6))
    
            let res = 100
    
            let color = (document.getElementById("Screen").style.background == '' || document.getElementById("Screen").style.background == 'white') ? 'gray' : 'white'
            let ctx = SparkX.Canvas.getContext('2d');
            
            // Draw.line(new Vector2(0, -res), new Vector2(0, res), color)
            // Draw.line(new Vector2(-res, 0), new Vector2(res, 0), color)
            let boxSize = 1;
            let lines = res / boxSize
            Draw.circle(Vector2.Zero(), .5, 0, color)
        for (let index = 0; index < lines; index++) {
            
            Draw.line(new Vector2(-res, res), new Vector2(res, res), color)
            Draw.line(new Vector2(-res, -res), new Vector2(res, -res), color)
            Draw.line(new Vector2(res, -res), new Vector2(res, res), color)
            Draw.line(new Vector2(-res, -res), new Vector2(-res, res), color)
    
            Draw.line(new Vector2(-res, boxSize * index), new Vector2(res, boxSize * index ), color)
            Draw.line(new Vector2(-res, -boxSize * index), new Vector2(res, -boxSize * index ), color)
    
            Draw.line(new Vector2(boxSize * index, -res), new Vector2(boxSize * index, res), color)
            Draw.line(new Vector2(-boxSize * index, -res), new Vector2(-boxSize * index, res), color)
                
        }Draw.vector(new Vector2(0,10));
        Draw.vector(new Vector2(10,0))
    // let influenceRadius = 10;
    // let reso = 100;
    // let start = -reso / 2
    // Draw.circle_unfilled(Mouse.Position, influenceRadius)
    // let prev = null
    // for (let y = 0; y < reso; y++) {
    //     for (let x = 0; x < reso; x++) {
    //         let pos = new Vector2(start + x, start + y);
    //         if (Vector2.Magnitude(pos, Mouse.Position) <= influenceRadius * 5){
    //             if (Vector2.Magnitude(pos, Mouse.Position) <= influenceRadius){
    //                 pos = Vector2.Lerp(pos, Mouse.Position, 1 - Vector2.Magnitude(new Vector2(start + x, start + y), Mouse.Position)/influenceRadius)                    
    //             }
    //             Draw.line(pos, prev, 'grey');
    //             if (Vector2.Magnitude(Mouse.Position, new Vector2(start + x, start + y).Sub(new Vector2(0, 1))) > influenceRadius){
    //                 Draw.line(pos, new Vector2(start + x, start + y).Sub(new Vector2(0, 1)), 'grey');
    //             } else { 
    //                 let pointB = Vector2.Lerp(new Vector2(start + x, start + y).Sub(new Vector2(0, 1)), Mouse.Position, 1 - Vector2.Magnitude(new Vector2(start + x, start + y).Sub(new Vector2(0, 1)), Mouse.Position)/influenceRadius)
    //                 Draw.line(pos, pointB, 'grey');
    //             }
    //         }
    //         prev = pos
    //     }
    // }
    // Draw.text(Math.floor(1 / SparkX.DeltaTime)) 
    
    // vec2.LerpFromThis(Mouse.Position.Floor(),0.5)
    // Draw.vector(vec, true);
    // Draw.vector(vec2, true, vec);
    // Draw.vector(vec.Add(vec2),true)
    // SparkX.Camera.Position.LerpFromThis(Vector2.Divide(Mouse.Position, 10), 0.5)
    rect.Position.LerpFromThis(pos, 0.6);
    // rect.Position.LerpFromThis(Mouse.Position, 0.5)
    // mat[1][0] += .1 * SparkX.DeltaTime;
    
    if (on){
        angle += 1 * SparkX.DeltaTime
        mat[0] = [Math.cos(angle),-Math.sin(angle)], 
        mat[1] = [Math.sin(angle),Math.cos(angle)+1]
        rect.Rotation = angle*100
    }
    // mat[0][1] = Math.sin(angle) - 0.6
    // mat[1][0] = Math.sin(angle) - 0.6
                                                 
})
 //Mat length is the 'demension'
 //Mat[0]length is 
 let on = false;
Keyboard.OnKeyDown('w', ()=>{ pos.y += 1 })
Keyboard.OnKeyDown('s', ()=>{ pos.y -= 1 })
Keyboard.OnKeyDown('d', ()=>{ pos.x += 1 })
Keyboard.OnKeyDown('a', ()=>{ pos.x -= 1 })
Keyboard.OnKeyDown(' ', ()=>{ on = ~on })
Mouse.OnButton1Down(()=>{
    
    // vec.MoveTo(Mouse.Position, 0.3)
    // vec.MoveTo(Mouse.Position, 0.5);
    SparkX.Camera.Position.MoveTo(Mouse.Position, 1)
    
})
