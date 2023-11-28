import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Buffer } from "../Stacks/RenderBuffer.js";
    
export class drawObject{ 
    static Color = SparkX.Settings.DefaultRenderColor
    static Rotation = 0;
    static drawType = ''
}

export class Circle extends drawObject{
    static LocalPosition = Vector2.Zero();
    static GlobalPosition = Vector2.Zero();
    static Radius = Number;
    
    constructor(position = Vector2, radius = Number, rotation = 0, color = String = SparkX.Settings.DefaultRenderColor){
        super()
        this.GlobalPosition = position;
        this.Rotation = rotation;
        this.Radius = radius;
        this.Color = color
        this.drawType = "circle";

        Buffer.push(this);
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
        Buffer.push(this);
        return this
    }
}