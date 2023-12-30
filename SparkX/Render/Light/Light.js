import { Vector2 } from "../../Math/Vector2.js";
import { drawObject } from "../Draw/DrawObjects.js";

export class PointLight extends drawObject{
    Position = Vector2.Zero();
    Brightness = 1;
    Details = true;

    constructor(position = Vector2){
        super();
        this.drawType = 'pointlight'
        this.Position = position
        this.Brightness = 1;
        
        return this;
    }

}