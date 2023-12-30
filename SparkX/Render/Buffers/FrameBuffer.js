export class renderFrame{
    renderBuffer = []
    constructor (RenderBuffer = Array){
        this.renderBuffer = renderBuffer
        frameBuffer.frames.push(this)
    }

    renderToScreen(){

    }
}

export let frameBuffer = {
    frames : [

    ],
    currentFrame : frameBuffer.frames[frameBuffer.frames.length - 1]
}








