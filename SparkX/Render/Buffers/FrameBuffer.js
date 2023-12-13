export class renderFrame{
    renderBuffer = []
    constructor (RenderBuffer = Array){
        this.renderBuffer = renderBuffer
        frameBuffer.push(this)
    }
}

export let frameBuffer = []