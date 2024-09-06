import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Vector3 } from "../SparkX/Math/Vector3.js";
import { Vector4 } from "../SparkX/Math/Vector4.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { mat } from "../SparkX/Render/Draw/mat.js";
import { SparkX } from "../SparkX/SparkX.js";


SparkX.Settings.PixelsPerPoint = 50;
let collapseMatrix = [ [1,0,0], 
                       [0,1,0] ]
let angle = 0;

let pos = Vector2.Fill(2);   

let zFar = 1000;
let zNear = 0.01;
// let aspect = SparkX.Resolution.x / SparkX.Resolution.y;
let fov = 80*(Math.PI/180);
let zm = zFar - zNear;
let zp = zFar + zNear;
let cubePos = new Vector4(1,1,1,1);
let position = new Vector3(0,0,0)
SparkX.RenderLoop(()=>{
    Draw.circle(new Vector2(1,1))
    // let proMat = [
    //     [ 1 / (aspect*Math.tan(fov/2)), 0, 0, 0],
    //     [0, 1/ Math.tan(fov/2), 0, 0],
    //     [0, 0, -zp/zm, -2*zFar*zNear/zm],
    //     [0, 0, -1, 0]
    // ]
    // console.log(aspect)
    // cubePos = cubePos.MatriceTransform(proMat);
    // let re = new Vector3(cubePos.x, cubePos.y, cubePos.z);
    // re = re.CollapseInto2D(collapseMatrix);
    // Draw.circle(re, 1)

    SparkX.Camera.Position.LerpFromThis(pos, 0.5)
    angle+=40 * Math.PI/180 *SparkX.DeltaTime;

    let roMat = [
        [Math.cos(angle), 0, Math.sin(angle)],
        [0, 1, 0],
        [-Math.sin(angle),0, Math.cos(angle)]
    ]

    let a = new Vector3(1,1,1)
    let b = new Vector3(1,-1,1)
    let c = new Vector3(-1,1,1)
    let d = new Vector3(-1,-1,1)
    let e = new Vector3(1,1,-1)
    let f = new Vector3(1,-1,-1)
    let g = new Vector3(-1,1,-1)
    let h = new Vector3(-1,-1,-1)


    // a.z += Math.sin(angle);
    // b.z += Math.sin(angle);
    // c.z += Math.sin(angle);
    // d.z += Math.sin(angle);
    // f.z += Math.sin(angle);
    // g.z += Math.sin(angle);
    // h.z += Math.sin(angle);
    // e.z += Math.sin(angle);
    a=a.MatriceTransform(roMat);
    b=b.MatriceTransform(roMat);
    c=c.MatriceTransform(roMat);
    d=d.MatriceTransform(roMat);
    e=e.MatriceTransform(roMat);
    f=f.MatriceTransform(roMat);
    g=g.MatriceTransform(roMat);
    h=h.MatriceTransform(roMat);

    console.log(a)
    a=a.Add(position)
    b=b.Add(position)
    c=c.Add(position)
    d=d.Add(position)
    e=e.Add(position)
    f=f.Add(position)
    g=g.Add(position)
    h=h.Add(position)
    

    a=a.CollapseInto2D(collapseMatrix)
    b=b.CollapseInto2D(collapseMatrix)
    c=c.CollapseInto2D(collapseMatrix)
    d=d.CollapseInto2D(collapseMatrix)
    e=e.CollapseInto2D(collapseMatrix)
    f=f.CollapseInto2D(collapseMatrix)
    g=g.CollapseInto2D(collapseMatrix)
    h=h.CollapseInto2D(collapseMatrix)

    Draw.circle(a, 0.1)
    Draw.circle(b, 0.1)
    Draw.circle(c, 0.1)
    Draw.circle(d, 0.1)
    Draw.circle(e, 0.1)
    Draw.circle(f, 0.1)
    Draw.circle(g, 0.1)
    Draw.circle(h, 0.1)
    // Draw.text('a',a)
    // Draw.text('b',b)
    // Draw.text('c',c)
    // Draw.text('d',d)
    // Draw.text('e',e)
    // Draw.text('f',f)
    // Draw.text('g',g)
    // Draw.text('h',h)

    Draw.line(a, b)
    Draw.line(d, b)
    Draw.line(c, d)
    Draw.line(c,a)
    Draw.line(c,g)
    Draw.line(e,g)
    Draw.line(e,f)
    Draw.line(h,f)
    Draw.line(h,g)
    Draw.line(h,d)
    Draw.line(e,a)
    Draw.line(f,b)
    // mat[0][1] = Math.sin(angle) - 0.6
    // mat[1][0] = Math.sin(angle) - 0.6
})

mat[0][0] = 3;
mat[1][1] = 3;

Keyboard.OnKeyDown('w', ()=>{ pos.y += 5 })
Keyboard.OnKeyDown('s', ()=>{ pos.y -= 5 })
Keyboard.OnKeyDown('d', ()=>{ pos.x += 5 })
Keyboard.OnKeyDown('a', ()=>{ pos.x -= 5 })