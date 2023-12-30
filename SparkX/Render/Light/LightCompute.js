import { MathG } from "../../Math/MathG.js";
import { Vector2 } from "../../Math/Vector2.js";
import { SparkX } from "../../SparkX.js";
import { renderBuffer } from "../Buffers/RenderBuffer.js";
import { Draw } from "../Draw/Draw.js";
import { Circle } from "../Draw/DrawObjects.js";
import { PointLight } from "./Light.js";

export class lightCompute {
    static render = {
        spotLight : (light = PointLight)=>{
            let f = SparkX.Settings.Lighting.Fidelity
            //f = 1
            
            Draw.circle_unfilled(light.Position, light.Brightness, 0, 'black')
            
            

            let numberOfLightRays = 8 + Math.abs(Math.round((f * 2))) + Math.round((f * 2))
            for (let i = 0; i < numberOfLightRays; i++) {
                let angle = (2 * Math.PI) / numberOfLightRays * i
                let xPos = Math.cos(angle) * light.Brightness + light.Position.x;
                let yPos = Math.sin(angle) * light.Brightness + light.Position.y;

                let rayPos = new Vector2(xPos, yPos);
                let cPos = rayPos
                
                renderBuffer.forEach(obj =>{
                    if (obj.drawType == 'rect' && obj.Color == 'green'){

                        let p = obj.Position;
                        let s = Vector2.Abs(obj.Scale);

                        let trc = new Vector2(p.x + s.x/2, p.y + s.y/2);
                        let brc = new Vector2(p.x + s.x/2, p.y - s.y/2);
                        let blc = new Vector2(p.x - s.x/2, p.y - s.y/2);
                        let tlc = new Vector2(p.x - s.x/2, p.y + s.y/2);
                        //Draw.circle(brc, 0.3)
                        Draw.circle(blc, 0.3)
                        //Draw.circle(trc, 0.3)
                        Draw.circle(tlc, 0.3)
                      
                        let slopeOfLine = (rayPos.y - light.Position.y) / (rayPos.x - light.Position.x);
                        if (brc.y > light.Position.y ){
                            let x = (blc.y - light.Position.y) / slopeOfLine + light.Position.x
                            let collidePosition = new Vector2(x, blc.y);
                            let a = Math.pow(light.Position.x - collidePosition.x, 2) + Math.pow(light.Position.y - collidePosition.y, 2);
                            let b = Math.pow(light.Position.x - cPos.x, 2) + Math.pow(light.Position.y - cPos.y, 2);
                            if (a < b || a == b){
                                if (collidePosition.x >= blc.x && collidePosition.x <= brc.x && cPos.y >= blc.y){
                                    cPos = collidePosition
                                    Draw.circle(new Vector2(x, blc.y), 1 ,0, 'purple')
                                    return
                                }
                            }
                        }
                        if (trc.y < light.Position.y ){
                            let x = (tlc.y - light.Position.y) / slopeOfLine + light.Position.x
                            let collidePosition = new Vector2(x, tlc.y);
                            let a = Math.pow(light.Position.x - collidePosition.x, 2) + Math.pow(light.Position.y - collidePosition.y, 2);
                            let b = Math.pow(light.Position.x - cPos.x, 2) + Math.pow(light.Position.y - cPos.y, 2);
                            if (a < b || a == b){
                                if (collidePosition.x >= tlc.x && collidePosition.x <= trc.x && cPos.y <= trc.y){
                                    cPos = collidePosition
                                    Draw.circle(new Vector2(x, tlc.y), 1, 0, 'yellow')
                                    return
                                }
                            }
                        }
                        if (trc.x < light.Position.x){
                            let y = (trc.x - light.Position.x) * slopeOfLine + light.Position.y ;
                            let collidePosition = new Vector2(trc.x, y);
                            let a = Math.pow(light.Position.x - collidePosition.x, 2) + Math.pow(light.Position.y - collidePosition.y, 2);
                            let b = Math.pow(light.Position.x - cPos.x, 2) + Math.pow(light.Position.y - cPos.y, 2);
                            if (a < b || a == b){
                                if (collidePosition.y <= trc.y && collidePosition.y >= brc.y && cPos.x <= trc.x){
                                    cPos = collidePosition
                                    Draw.circle(new Vector2(trc.x, y), 1, 0, 'blue')
                                    return
                                }
                            }
                        }
                        if (tlc.x > light.Position.x ){
                            let y = (tlc.x - light.Position.x) * slopeOfLine + light.Position.y ;
                            let collidePosition = new Vector2(tlc.x, y);
                            let a = Math.pow(light.Position.x - collidePosition.x, 2) + Math.pow(light.Position.y - collidePosition.y, 2);
                            let b = Math.pow(light.Position.x - cPos.x, 2) + Math.pow(light.Position.y - cPos.y, 2);
                            if (a < b || a == b){
                                if (collidePosition.y <= tlc.y && collidePosition.y >= blc.y && cPos.x >= tlc.x){
                                    cPos = collidePosition
                                    Draw.circle(new Vector2(tlc.x, y), 1, 0, 'red')
                                    return
                                }
                            }
                        }
                    };
                })
                Draw.line(light.Position, cPos)  
            } 
            let lightRes = Vector2.Multiply(Vector2.Fill(2 * light.Brightness),1)
            console.log(lightRes);
            for (let x = -lightRes.x/2; x < lightRes.x/2; x++) {
                for (let y = -lightRes.x/2; y < lightRes.y/2; y++){
                    console.log('hey');
                    let pos = new Vector2(x + 0.5, y + 0.5);
                    let dist = Vector2.Magnitude(pos, light.Position);
                    let opacity = 1- dist/ light.Brightness;
                    if (dist < light.Brightness){
                        Draw.rect(pos, Vector2.Fill(0.8), 0, 'pink', opacity)    

                    }

                }
            }
        }
    }
}