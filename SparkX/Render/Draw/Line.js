import { Vector2 } from "../../Math/Vector2.js";
import { Buffer } from "../Stacks/RenderBuffer.js"
import { Draw } from "./Draw.js";
import { DrawObject } from "./DrawObject.js";
export class Line extends DrawObject{
    static point_A = Vector2.Zero();
    static point_B = Vector2.Zero();
    static color = String;
    
    constructor(point_A = Vector2, point_B = Vector2, color = String){
        super(color)
        Draw.line(point_A, point_B, color)
        point_A = point_A;
        point_B = point_B;
        color = color
        Buffer.push(this);
    }
}