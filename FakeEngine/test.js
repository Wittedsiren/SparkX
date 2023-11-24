import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Line } from "../SparkX/Render/Draw/Line.js";
import { SparkX } from "../SparkX/SparkX.js";
import { Buffer } from "../SparkX/Render/Stacks/RenderBuffer.js"
import { MathG } from "../SparkX/Math/MathG.js";

SparkX.Settings.Grid = true;
SparkX.Settings.PixelsPerPoints = 25
let startPos = Vector2.Zero()
let l = new Line(startPos, new Vector2(10, -10), 'green')
let l2 = new Line(startPos, new Vector2(10, 10), 'green')
let l3 = new Line(startPos, new Vector2(-10, -10), 'green')
let l4 = new Line(startPos, new Vector2(-10, 10), 'green')
let l5 = new Line(new Vector2(-10, 10), new Vector2(-10, -10), 'green')
let l6 = new Line(new Vector2(10, 10), new Vector2(10, -10), 'green')
let l7 = new Line(new Vector2(10, 10), new Vector2(-10, 10), 'green')
let l8 = new Line(new Vector2(10, -10), new Vector2(-10, -10), 'green')
let c = new circle

function zoomIn(){
    SparkX.RenderLoop(()=>{
       SparkX.Settings.PixelsPerPoints += Math.sin(1 - SparkX.FramesPerSecond) * 2
    })
}

function zoomOut(){
    SparkX.RenderLoop(()=>{
        
    })
}

SparkX.RenderStart(() => {
    
    document.getElementById("Screen").style.background = "salmon"
    Input.Keyboard.OnKeyDown('d', ()=> {l.Position_A.x++})
    Input.Keyboard.OnKeyDown('a', ()=> {l.Position_A.x--})
    Input.Keyboard.OnKeyDown('w', ()=> {l.Position_A.y++})
    Input.Keyboard.OnKeyDown('s', ()=> {l.Position_A.y--})
    Input.Keyboard.OnKeyDown('q', ()=> {zoomOut()})
    Input.Keyboard.OnKeyDown('e', ()=> {zoomIn()})
    Input.Keyboard.OnKeyDown('ArrowLeft', ()=> {SparkX.ConstSettings.Cam.Position.x--})
    Input.Keyboard.OnKeyDown('ArrowRight', ()=> {SparkX.ConstSettings.Cam.Position.x++})
    Input.Keyboard.OnKeyDown('ArrowUp', ()=> {SparkX.ConstSettings.Cam.Position.y++})
    Input.Keyboard.OnKeyDown('ArrowDown', ()=> {SparkX.ConstSettings.Cam.Position.y--})
    Input.Keyboard.OnKeyDown('i', ()=> {SparkX.Settings.PixelsPerPoints = 25})
    Input.Keyboard.OnKeyDown('o', ()=> {SparkX.Settings.PixelsPerPoints = 10})
    Input.Keyboard.OnKeyDown('p', ()=> {SparkX.Settings.PixelsPerPoints = -25})
})

SparkX.RenderLoop(() => {
    // console.log(SparkX.ClientScreenRes);
    //Draw.line(new Vector2(0.1 ,0), new Vector2(10, 10), 'yellow')
    document.getElementById('PosDisplay').innerText = SparkX.ConstSettings.Cam.Position.x + ', ' + SparkX.ConstSettings.Cam.Position.y;

    Draw.circle(new Vector2(5, 0), 5)
})