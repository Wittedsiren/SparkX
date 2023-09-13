import { Vector2 } from "../Math/Vector2.js";
import { SparkX } from "../SparkX.js";

let canvas = SparkX.Canvas;

let dx = Number;
let dy = Number;
let l_func = {
    MakePosRelative : function(a){
        let x1 = Vector2.Divide(a, SparkX.ConstSettings.AspectZoom);
        let x2 = new Vector2(x1.x + dx, -x1.y + dy)
        let x3 = new Vector2(x2.x - (SparkX.ConstSettings.Cam.Position.x / SparkX.ConstSettings.AspectZoom.x), x2.y - SparkX.ConstSettings.Cam.Position.y/ SparkX.ConstSettings.AspectZoom.x)
        return x3;
    }
}

export let Draw = {
    line : function(a = Vector2, b = Vector2){
        dx = SparkX.Resolution.x / 2;
        dy = SparkX.Resolution.y / 2;

        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        
        a = l_func.MakePosRelative(a)
        b = l_func.MakePosRelative(b)
    
        ctx.beginPath();
        ctx.moveTo( a.x, a.y );
        ctx.lineTo( b.x, b.y );
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