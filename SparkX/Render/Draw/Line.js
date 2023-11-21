import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { Buffer } from "../Stacks/RenderBuffer.js"
import { Draw } from "./Draw.js";
import { drawObject } from "./DrawObject.js";
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