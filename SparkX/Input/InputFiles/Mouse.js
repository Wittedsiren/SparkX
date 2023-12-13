import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

let scroll
let sU = [];
let sD = [];

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
    let ppp = Math.abs( SparkX.Settings.PixelsPerPoint );
    let c = SparkX.ConstSettings.Cam 
    let pos = new Vector2(event.x + window.scrollX, -event.y)
    pos.x -= SparkX.Resolution.x/2  
    pos.y += SparkX.Resolution.y/2
    pos = Vector2.Divide(pos, ppp * c.Zoom)
    pos.x += c.Position.x;
    pos.y += c.Position.y
    


    Mouse.Position = pos;
});
