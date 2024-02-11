import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";

let scroll
let sU = [];
let sD = [];

let mouseButton1Up = [];
let mouseButton2Up = [];
let mouseButton1Down = [];
let mouseButton2Down = [];

export let Mouse = {
    Scroll : scroll,
    OnScrollWheelUp : function(a= Function){
        sU.push(a)
    },
    Position : Vector2.Zero(),
    OnButton1Down : function(a = Function){
        mouseButton1Down.push(a)
    },
    OnButton2Down : function(a = Function){
        mouseButton2Down.push(a)
    },
    OnButton1Up : function(a = Function){
        mouseButton1Up.push(a)
    },
    OnButton2Up : function(a = Function){
        mouseButton2Up.push(a)
    },
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    sU.forEach(a => {
        a()
    });
});
window.addEventListener("mousemove", event => {   
    let ppp = Math.abs( SparkX.Settings.PixelsPerPoint );
    let z = SparkX.Camera.Zoom;
    let az = SparkX.ConstSettings.AspectZoom;
    let rect = SparkX.Canvas.getBoundingClientRect();
    let x = event.clientX - rect.left - SparkX.Resolution.x / 2;
    let y = event.clientY - rect.top - SparkX.Resolution.y / 2;
    let pos = new Vector2(x / ppp, -y / ppp);
    pos = Vector2.Divide(pos, az)
    pos = Vector2.Add(pos, SparkX.Camera.Position)
    


    Mouse.Position = pos;
});
SparkX.Canvas.addEventListener('click', (event) => {
    switch ( event.button ){
        case 0: 
            mouseButton1Down.forEach(func => {
                func();
            })
            break;
    }
})



