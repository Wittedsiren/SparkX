import { Vector2 } from "../../Math/Vector2.js"
import { SparkX } from "../../SparkX.js"
import { Draw } from "../Draw/Draw.js"

export class renderFrame{
    renderBuffer = []
    constructor (RenderBuffer = Array){
        this.renderBuffer = RenderBuffer
        //frameBuffer.frames.push(this)
    }

    renderToScreen(){ 
        if (SparkX.Settings.Grid == true){
            let z = SparkX.ConstSettings.Cam.Zoom;
            let res = 100
    
            let color = (document.getElementById("Screen").style.background == '' || document.getElementById("Screen").style.background == 'white') ? 'gray' : 'white'
            let ctx = SparkX.Canvas.getContext('2d');
            ctx.globalAlpha = 0.2;
            Draw.line(new Vector2(0, -res), new Vector2(0, res), color)
            Draw.line(new Vector2(-res, 0), new Vector2(res, 0), color)
            let boxSize = 1;
            let lines = res / boxSize
            Draw.circle(Vector2.Zero(), 1, 0, color)
            for (let index = 0; index < lines; index++) {
                ctx.globalAlpha = 0.2;
                Draw.line(new Vector2(-res, res), new Vector2(res, res), color)
                Draw.line(new Vector2(-res, -res), new Vector2(res, -res), color)
                Draw.line(new Vector2(res, -res), new Vector2(res, res), color)
                Draw.line(new Vector2(-res, -res), new Vector2(-res, res), color)
    
                Draw.line(new Vector2(-res, boxSize * index), new Vector2(res, boxSize * index ), color)
                Draw.line(new Vector2(-res, -boxSize * index), new Vector2(res, -boxSize * index ), color)
    
                Draw.line(new Vector2(boxSize * index, -res), new Vector2(boxSize * index, res), color)
                Draw.line(new Vector2(-boxSize * index, -res), new Vector2(-boxSize * index, res), color)
                
            }
            
            ctx.globalAlpha = 1;
        }

        this.renderBuffer.forEach(a => Draw.render(a))

        //Draw the graph to the render buffer
        
    }
}

export let frameBuffer = {
    frames : [

    ],
   // currentFrame : frameBuffer.frames[frameBuffer.frames.length - 1]
}








