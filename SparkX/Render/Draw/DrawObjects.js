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
    #isFilled = true;
    constructor(){
        renderBuffer.buffer.push(this);
    }

    Remove = ()=>{
        let index = 0;
        renderBuffer.buffer.forEach(obj =>{
            if (obj == this){
                renderBuffer.buffer[index] = null
                return
            }
            index++
        })

    }

    SetZIndex(index){
        for (let i = 0; i < renderBuffer.buffer.length; i++) {
            let ri = renderBuffer.buffer.length - ( i + 1 )
            let currentElem = renderBuffer.buffer[ri];
            if (currentElem != this){
                if (ri >= index){
                   
                    renderBuffer.buffer[ri + 1] = currentElem;
                }
            } else {
                renderBuffer.buffer[ri] = null
            }
        }
        renderBuffer.buffer[index] = this;
    }

    GetZIndex(){
        return renderBuffer.buffer.indexOf(this);
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

    Fill(){
        this.#isFilled = true
        if (this.drawType.indexOf('_unfill') != -1){
            this.drawType = this.drawType.split('_')[0];
            console.log(this.drawType);
        }
    }

    UnFill(){
        this.#isFilled = false
        if (this.drawType.indexOf('_unfill') == -1){
            this.drawType += "_unfill";
        }
    }

    IsFilled(){
        return this.#isFilled;
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
        
        return this;
    }
}