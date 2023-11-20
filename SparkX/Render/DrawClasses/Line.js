import { Vector2 } from "../../Math/Vector2";
import { RenderBuffer } from "../Stacks/RenderBuffer.js"
export class line {
    static point_A = Vector2.Zero();
    static point_B = Vector2.Zero();
    
    constructor(point_A = Vector2, point_B = Vector2, Color = String){
        point_A = point_A;
        point_B = point_B;
        
        RenderBuffer.push(this);
    }
}