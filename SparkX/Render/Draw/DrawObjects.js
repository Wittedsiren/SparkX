import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { renderBuffer } from "../Stacks/RenderBuffer.js";

export class drawObject{ 
    static Color = SparkX.Settings.DefaultRenderColor
    static Rotation = 0;
    static drawType = ''
    static PositionType ='global'
    // static Fill = ()=>{
    //     if (this.drawType == 'circle'){

    //     }
    // }
}

export class Circle extends drawObject{
    static Position = Vector2.Zero();
    static Radius = Number;
    
    constructor(position = Vector2, radius = Number, rotation = 0, color = String = SparkX.Settings.DefaultRenderColor){
        super()
        this.Position = position
        this.Rotation = rotation;
        this.Radius = radius;
        this.Color = color

        this.drawType = "circle";

        renderBuffer.push(this);
        return this
    }
}

export class Line extends drawObject{
    static Position_A = Vector2.Zero();
    static Position_B = Vector2.Zero();
    
    constructor(position_a = Vector2, position_b = Vector2, rotation = 0, color = String = SparkX.Settings.DefaultRenderColor){
        super()
        this.Position_A = position_a
        this.Position_B = position_b
        // this.Rotation = rotation
        this.drawType = "line"
        renderBuffer.push(this);
        return this
    }

}

export class Rect extends drawObject{
    static Position = Vector2.Zero();
    static Scale = Vector2.Zero();

    constructor(position = Vector2, scale = Vector2, rotation = 0, color = SparkX.Settings.DefaultRenderColor){
        super()
        this.Position = position;
        this.Scale = scale;
        this.Rotation = rotation
        this.Color = color
        this.drawType = 'rect'
        renderBuffer.push(this)
        return this;
    }
}