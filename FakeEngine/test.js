import { Input } from "../SparkX/Input/Input.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { SparkX } from "../SparkX/SparkX.js";
import { Line, Circle } from "../SparkX/Render/Draw/DrawObjects.js";

SparkX.Settings.Grid = true;
SparkX.Settings.Fidelity = 10
SparkX.Settings.PixelsPerPoint = 25
let startPos = Vector2.Zero()
let l = new Line(startPos, new Vector2(10, -10), 'green')
let l2 = new Line(startPos, new Vector2(10, 10), 'green')
let l3 = new Line(startPos, new Vector2(-10, -10), 'green')
let l4 = new Line(startPos, new Vector2(-10, 10), 'green')
let l5 = new Line(new Vector2(-10, 10), new Vector2(-10, -10), 'green')
let l6 = new Line(new Vector2(10, 10), new Vector2(10, -10), 'green')
let l7 = new Line(new Vector2(10, 10), new Vector2(-10, 10), 'green')
let l8 = new Line(new Vector2(10, -10), new Vector2(-10, -10), 'green')
let c = new Circle(Vector2.Zero(), 5)
let counter = 1;
function zoomIn(){
    SparkX.RenderLoop(()=>{
        if (SparkX.Settings.PixelsPerPoint < 50) SparkX.Settings.PixelsPerPoint++
    }, ()=>{
        if (SparkX.Settings.PixelsPerPoint == 50) {return true}
    })
}

function zoomOut(){
    SparkX.RenderLoop(()=>{
        if (SparkX.Settings.PixelsPerPoint > 25) SparkX.Settings.PixelsPerPoint--
    }, ()=>{
        if (SparkX.Settings.PixelsPerPoint == 25) {return true}
    })
}

SparkX.RenderStart(() => {
    
    document.getElementById("Screen").style.background = "salmon"
    Input.Keyboard.OnKeyDown('d', ()=> {c.Position.x++})
    Input.Keyboard.OnKeyDown('a', ()=> {c.Position.x--})
    Input.Keyboard.OnKeyDown('w', ()=> {c.Position.y++})
    Input.Keyboard.OnKeyDown('s', ()=> {c.Position.y--})
  

    Input.Keyboard.OnKeyDown('q', ()=> {zoomOut()})
    Input.Keyboard.OnKeyDown('e', ()=> {zoomIn()})
    Input.Keyboard.OnKeyDown('ArrowLeft', ()=> {SparkX.ConstSettings.Cam.Position.x--})
    Input.Keyboard.OnKeyDown('ArrowRight', ()=> {SparkX.ConstSettings.Cam.Position.x++})
    Input.Keyboard.OnKeyDown('ArrowUp', ()=> {SparkX.ConstSettings.Cam.Position.y++})
    Input.Keyboard.OnKeyDown('ArrowDown', ()=> {SparkX.ConstSettings.Cam.Position.y--})
    Input.Keyboard.OnKeyDown('i', ()=> {SparkX.Settings.PixelsPerPoint = 25})
    Input.Keyboard.OnKeyDown('o', ()=> {SparkX.Settings.PixelsPerPoint = 10})
    Input.Keyboard.OnKeyDown('p', ()=> {counter++})
    Input.Keyboard.OnKeyDown('t', ()=> {c.Rotation += 90})
})

SparkX.RenderLoop(() => {
    // console.log(SparkX.ClientScreenRes);
    //Draw.line(new Vector2(0.1 ,0), new Vector2(10, 10), 'yellow')
    document.getElementById('PosDisplay').innerText = SparkX.ConstSettings.Cam.Position.x + ', ' + SparkX.ConstSettings.Cam.Position.y;
    console.log("Update");
    SparkX.ConstSettings.Cam.Rotation = c.Rotation
    //Draw.circle(new Vector2(5, 0), 5)
})
