import { Vector2 } from "../Math/Vector2.js";
import { SparkX } from "../SparkX.js";

let canvas = SparkX.Canvas;

export let Draw = {
    line : function(a = Vector2, b = Vector2){
        let dx = SparkX.Resolution.x / 2
        let dy = SparkX.Resolution.y / 2
        console.log(dy)
        const ctx = canvas.getContext('2d');
    
        // set line stroke and line width
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        // draw a red line
        ctx.beginPath();
        ctx.moveTo(a.x + dx , -a.y + dy);
        ctx.lineTo(b.x + dx, -b.y + dy);
        ctx.stroke();
    },

    // triangle : function(a = Vector2, b = Vector2, c = Vector2){
    //     const ctx = canvas.getContext('2d');
    
    //     ctx.strokeStyle = 'red';
    //     ctx.lineWidth = 2;

    //     ctx.fillStyle = '#f00';
    //     ctx.beginPath();
    //     ctx.moveTo(a.x, a.y);
    //     ctx.lineTo(b.x, b.y);
    //     ctx.lineTo(c.x, c.y);
    //     ctx.closePath()
    //     ctx.fill()
    // },
    // point : function(a){
    //     const ctx = canvas.getContext('2d');
    
    //     // set line stroke and line width
    //     ctx.strokeStyle = 'blue';
    //     ctx.lineWidth = 10;
    
    //     // draw a red line
    //     ctx.beginPath();
    //     ctx.moveTo(a.x, a.y);
    //     ctx.lineTo(a.x, a.y);
    //     ctx.stroke();
    // }
}