import { Input } from "../../Input/Input.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";

export class drawObject{ 
    Color = SparkX.Settings.DefaultRenderColor
    Rotation = 0;
    drawType = ''
    PositionType ='global'
    Position = Vector2.Zero();
    Opacity = 1;
    Parent = Vector2.Zero();

    SetZIndex(index){
        
    }

    AddBasicMovementWASD = ()=>{
        Input.Keyboard.OnKeyDown('w', ()=>{this.Position.y++})
        Input.Keyboard.OnKeyDown('s', ()=>{this.Position.y--})
        Input.Keyboard.OnKeyDown('a', ()=>{this.Position.x--})
        Input.Keyboard.OnKeyDown('d', ()=>{this.Position.x++})
    }
    AddBasicMovementArrow = ()=>{
        Input.Keyboard.OnKeyDown('ArrowUp', ()=>{this.Position.y++})
        Input.Keyboard.OnKeyDown('ArrowDown', ()=>{this.Position.y--})
        Input.Keyboard.OnKeyDown('ArrowLeft', ()=>{this.Position.x--})
        Input.Keyboard.OnKeyDown('ArrowRight', ()=>{this.Position.x++})
    }
}

export class Circle extends drawObject{
    static Radius = Number;
    
    constructor(position = Vector2, radius = 1, rotation = 0, color = String = SparkX.Settings.DefaultRenderColor, opacity = 1){
        super()
        this.Position = position || Vector2.Zero()
        this.Rotation = rotation;
        this.Radius = radius;
        this.Color = color
        this.Opacity = opacity
        this.drawType = "circle";

        renderBuffer.push(this);
        return this
    }
}

export class Rect extends drawObject{
    static Scale = Vector2.Zero();

    constructor(position = Vector2, scale = Vector2, rotation = 0, color = SparkX.Settings.DefaultRenderColor, opacity = 1){
        super()
        this.Position = position
        this.Scale = scale;
        this.Rotation = rotation
        this.Color = color
        this.Opacity = opacity
        this.drawType = 'rect'
        renderBuffer.push(this)
        return this;
    }
}