import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";
import { lightCompute } from "../Light/LightCompute.js";
import { drawObject } from "./DrawObjects.js";


let dx = Number;
let dy = Number;
// let canvas = SparkX.Canvas;
let l_func = {
    MakePosRelative : function(a){
        let ppp = Math.abs( SparkX.Settings.PixelsPerPoint );
        let z = SparkX.ConstSettings.Cam.Zoom;
        dx = SparkX.Resolution.x / 2 / ppp / z
        dy = SparkX.Resolution.y / 2 / ppp / z
        let x1 = Vector2.Divide(a , SparkX.ConstSettings.AspectZoom);
        let x2 = new Vector2(x1.x + dx, -x1.y + dy)
        let x3 = new Vector2(x2.x - (SparkX.ConstSettings.Cam.Position.x / SparkX.ConstSettings.AspectZoom.x), 
                             x2.y +SparkX.ConstSettings.Cam.Position.y/ SparkX.ConstSettings.AspectZoom.x)
        let x4 = Vector2.Multiply(x3, ppp * z)
        let x5 = MathG.RotateAroundPos(x4, Vector2.Zero(), SparkX.ConstSettings.Cam.Rotation)

        return x5;
    }
}

export let Draw = {
    line : function(position_a = Vector2, position_b = Vector2, color = String = "blue"){
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        let a = position_a;
        let b = position_b;

        a = l_func.MakePosRelative(a)
        b = l_func.MakePosRelative(b)

        ctx.beginPath();
        ctx.moveTo( a.x, a.y );
        ctx.lineTo( b.x, b.y );
        ctx.closePath()
        ctx.stroke();
        SparkX.Information.VerticeCount += 2;
    },

    rect : function(position = Vector2, scale = Vector2, rotation = Number, color = SparkX.Settings.DefaultRenderColor, opacity = Number){
        // if (!position.x) {console.error('SparkX: Rect needs position vector');}
        // if (!scale.x) {console.error('SparkX: Rect needs scale vector');}
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = opacity
        let a = position;
        let s = scale   

        let x1 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y + s.y/2), position, rotation);
        let x2 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y + s.y/2), position, rotation);
        let x3 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y - s.y/2), position, rotation);
        let x4 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y - s.y/2), position, rotation);
        let x5 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y + s.y/2), position, rotation);
        let x6 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y - s.y/2), position, rotation);
        let x7 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y + s.y/2), position, rotation);
        let x8 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y - s.y/2), position, rotation);
        x1.y -= position.x; x1.y += position.y;
        x2.y -= position.x; x2.y += position.y;
        x3.y -= position.x; x3.y += position.y;
        x4.y -= position.x; x4.y += position.y;
        x5.y -= position.x; x5.y += position.y;
        x6.y -= position.x; x6.y += position.y;
        x7.y -= position.x; x7.y += position.y;
        x8.y -= position.x; x8.y += position.y;
        //this.line(x1,x2, color); this.line(x3,x4, color); this.line(x5,x6, color); this.line(x7,x8, color);
        //this.line(x2, x6, color)
        this.triangle(x1, x2, x3, color); this.triangle(x4, x2, x6, color);
        
        ctx.globalAlpha = 1
    },

    rect_unfilled : function(position = Vector2, scale = Vector2, rotation = Number, color = SparkX.Settings.DefaultRenderColor, opacity = Number){
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = opacity
        let a = position;
        let s = scale   
        let cenPos = a;

        let x1 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y + s.y/2), position, rotation);
        let x2 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y + s.y/2), position, rotation);
        let x3 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y - s.y/2), position, rotation);
        let x4 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y - s.y/2), position, rotation);
        let x5 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y + s.y/2), position, rotation);
        let x6 = MathG.RotateAroundPos(new Vector2(a.x - s.x/2, a.y - s.y/2), position, rotation);
        let x7 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y + s.y/2), position, rotation);
        let x8 = MathG.RotateAroundPos(new Vector2(a.x + s.x/2, a.y - s.y/2), position, rotation);
        x1.y -= position.x; x1.y += position.y;
        x2.y -= position.x; x2.y += position.y;
        x3.y -= position.x; x3.y += position.y;
        x4.y -= position.x; x4.y += position.y;
        x5.y -= position.x; x5.y += position.y;
        x6.y -= position.x; x6.y += position.y;
        x7.y -= position.x; x7.y += position.y;
        x8.y -= position.x; x8.y += position.y;

        this.line(x1,x2, color); this.line(x3,x4, color); this.line(x5,x6, color); this.line(x7,x8, color);
        //this.triangle(x1, x2, x3, color); this.triangle(x4, x2, x6, color);
        
        ctx.globalAlpha = 1
    },


    circle : function(position = Vector2, radius = Number = 1, rotation = Number = 0, color = String = 'blue', opacity, parent = Vector2.Zero()){
        
        position = Vector2.Add(position, parent)
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = opacity
        let segments = Math.round ( (7) * SparkX.Settings.Fidelity ) + 3;
        let angle = (2 * Math.PI)/(segments); 
        let count = 0;

        let x = Math.cos(angle * (segments - 1) ) *  radius
        let y = Math.sin(angle * (segments - 1) ) * radius

        let prevPos = new Vector2(x, y)
        prevPos = MathG.RotateAroundPos(prevPos, Vector2.Zero(), rotation)
        prevPos = Vector2.Add(prevPos, position)
        

        for (let i = 0; i < segments; i++) {
            x = Math.cos(angle * count) * radius;
            y = Math.sin(angle * count) * radius;
            count += 1
            let pos = new Vector2(x, y)
            pos = MathG.RotateAroundPos(pos, Vector2.Zero(), rotation)
            pos = Vector2.Add(pos, position)
            
            //this.line(pos, prevPos, color);
            this.triangle(pos, prevPos, position, color)
            //this.line(pos, position, color);
            prevPos = pos
        }
    },

    circle_unfilled : function(position = Vector2, radius = Number, rotation = Number = 0, color = String = 'blue', opacity, parent = Vector2.Zero()){
        
        position = Vector2.Add(position, parent)
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.globalAlpha = opacity
        let segments = Math.round ( (7) * SparkX.Settings.Fidelity ) + 3;
        let angle = (2 * Math.PI)/(segments); 
        let count = 0;

        let x = Math.cos(angle * (segments - 1) ) *  radius
        let y = Math.sin(angle * (segments - 1) ) * radius

        let prevPos = new Vector2(x, y)
        prevPos = MathG.RotateAroundPos(prevPos, Vector2.Zero(), rotation)
        prevPos = Vector2.Add(prevPos, position)
        

        for (let i = 0; i < segments; i++) {
            x = Math.cos(angle * count) * radius;
            y = Math.sin(angle * count) * radius;
            count += 1
            let pos = new Vector2(x, y)
            pos = MathG.RotateAroundPos(pos, Vector2.Zero(), rotation)
            pos = Vector2.Add(pos, position)
            
            this.line(pos, prevPos, color);
            
            prevPos = pos
        }
        ctx.globalAlpha = 1
    },

    triangle_unfilled : function(position_a = Vector2, position_b = Vector2, position_c = Vector2, color = String = "blue"){
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        let a = position_a;
        let b = position_b;
        let c = position_c;

        a = l_func.MakePosRelative(a);
        b = l_func.MakePosRelative(b);
        c = l_func.MakePosRelative(c);

        ctx.beginPath();
        ctx.moveTo( a.x, a.y );
        ctx.lineTo( b.x, b.y );
        ctx.lineTo( c.x, c.y );
        ctx.closePath()
        ctx.stroke();
        
        SparkX.Information.VerticeCount += 3
    },

    triangle : function(position_a = Vector2, position_b = Vector2, position_c = Vector2, color = SparkX.Settings.DefaultRenderColor){
        let ctx = SparkX.Canvas.getContext('2d');
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        let a = position_a;
        let b = position_b;
        let c = position_c;

        a = l_func.MakePosRelative(a);
        b = l_func.MakePosRelative(b);
        c = l_func.MakePosRelative(c);

        let region = new Path2D();
        region.moveTo( a.x, a.y );
        region.lineTo( b.x, b.y );
        region.lineTo( c.x, c.y );
        
        region.closePath()
        ctx.fillStyle = color;
        ctx.fill(region)
        SparkX.Information.VerticeCount += 3;
        SparkX.Information.triangle += 3
    },

    image : function(){
        dx = SparkX.Resolution.x / 2;
        dy = SparkX.Resolution.y / 2;

        const ctx = SparkX.Canvas.getContext('2d');
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;

        let base_image = new Image();
        base_image.src = "data:image/jpeg;base64,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"
        ctx.drawImage(base_image, 0, 0);
    },

    render : function(obj = drawObject){
        if (obj.drawType == 'circle'){
            this.circle(obj.Position, obj.Radius, obj.Rotation, obj.Color, obj.Opacity, obj.Parent)
        } else if (obj.drawType == 'circle_unfill'){
            this.circle_unfilled(obj.Position, obj.Radius, obj.Rotation, obj.Color, obj.Opacity, obj.Parent)
        } else if (obj.drawType == 'rect'){
            this.rect(obj.Position, obj.Scale, obj.Rotation, obj.Color, obj.Opacity, obj.Parent)
        } else if (obj.drawType == 'rect_unfill'){
            this.rect_unfilled(obj.Position, obj.Scale, obj.Rotation, obj.Color, obj.Opacity, obj.Parent)
        } else if (obj.drawType == 'pointlight'){
            lightCompute.render.spotLight(obj);
        }
    }
}


