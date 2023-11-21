import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

let scroll
let sU = [];
let sD = [];

function MakePosReal(a) {
        let ppp = SparkX.Settings.PixelsPerPoints;
        let z = SparkX.ConstSettings.Cam.Zoom;
        let dx = SparkX.Resolution.x / 2 / ppp / z
        let dy = SparkX.Resolution.y / 2 / ppp / z
        //Vector2.Multiply(SparkX.ConstSettings.Cam.Position, ppp)
        let x1 = Vector2.Divide(a, SparkX.ConstSettings.AspectZoom);
        let x2 = new Vector2(x1.x + dx, -x1.y + dy)
        let x3 = new Vector2(x2.x - (SparkX.ConstSettings.Cam.Position.x / SparkX.ConstSettings.AspectZoom.x), 
                             x2.y - -SparkX.ConstSettings.Cam.Position.y/ SparkX.ConstSettings.AspectZoom.x)
        let x4 = Vector2.Multiply(x3, ppp * z)
        let x5 = MathG.RotateAroundPos(x4, SparkX.ConstSettings.Cam.Position, SparkX.ConstSettings.Cam.Rotation)
        return x4;
}

export let Mouse = {
    Scroll : scroll,
    OnScrollWheelUp : function(a= Function){
        sU.push(a)
    },
    Position : Vector2.Zero(),
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    sU.forEach(a => {
        a()
    });
});
window.addEventListener("mousemove", event => {
    let mPos = MakePosReal(event)
    Mouse.Position.x = mPos.x;
    Mouse.Position.y = mPos.y;
});
