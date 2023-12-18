import { Draw } from "../Draw/Draw.js";
import { PointLight } from "./Light.js";

export class lightCompute {
    static render = {
        spotLight : (light = PointLight)=>{
            
            Draw.circle_unfilled(light.Position, light.Brightness, 0, 'black')
            
        }
    }
}