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
    let pos = new Vector2(event.x, event.y)
    pos.x = SparkX.Resolution.x/2 - event.x / SparkX.Settings.PixelsPerPoint
    pos.y = SparkX.Resolution.y/2 - event.y / SparkX.Settings.PixelsPerPoint
    
    Mouse.Position.x = pos.x;
    Mouse.Position.y = pos.y;
});
