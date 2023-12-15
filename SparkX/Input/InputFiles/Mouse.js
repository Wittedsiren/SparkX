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
    let c = SparkX.ConstSettings.Cam 
    let pos = new Vector2(event.x + window.scrollX, -event.y)
    pos.x -= SparkX.Resolution.x/2  
    pos.y += SparkX.Resolution.y/2
    pos = Vector2.Divide(pos, ppp * c.Zoom)
    pos.x += c.Position.x;
    pos.y += c.Position.y
    


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



