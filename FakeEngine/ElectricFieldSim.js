import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard.js";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle, Rect } from "../SparkX/Render/Draw/DrawObjects.js";
import { mat } from "../SparkX/Render/Draw/mat.js";
import { SparkX } from "../SparkX/SparkX.js";
SparkX.Settings.Fidelity = 4
SparkX.Settings.Grid = true;
let SCALE = 10;
let FIDELTY = 1;

function polynomialInterpolation(pointA = Vector2, pointB = Vector2, degree = Number, t = Number){
    let stretch = (pointB.y - pointA.y) / (Math.pow((pointB.x - pointA.x), degree) + 0.01)
    // console.log(stretch)
    if (!stretch){ console.log('Nan')}
    let eq = stretch * Math.pow((pointB.x - pointA.x) * t, degree) + pointA.y;
    for (let i = 0; i < 10; i++) {
        // Draw.circle(polynomialInterpolation(pointA, pointB, degree, i / t), 0.5)
        // new Circle(polynomialInterpolation(pointA, pointB, degree, i / t))
    }
    return new Vector2(pointA.x + (pointB.x - pointA.x) * t, eq);
}
let allParticles = [];
class Particle{
    mass = 0;
    position = Vector2.Zero();
    charge = 0; //in C;
    velocity = Vector2.Zero();


    constructor(){ allParticles.push(this); }

    static drawElectricFieldLines(particle = [Particle]){
        particle.forEach(p =>{
            let unit = p.charge / Math.abs(p.charge) || 0;
            if (unit > 0){
                for (let lines = 0; lines < 10 * FIDELTY; lines++) {
                    let angle = 360 / (10 * FIDELTY)
                    Draw.vector(new Vector2(0, 10).SetAngle(angle * lines,10), false, new Vector2(0,1).SetAngle(angle * lines,1).Add(p.position))
                    
                }
            } else if (unit < 0){
                for (let lines = 0; lines < 10 * FIDELTY; lines++) {
                    let angle = 360 / (10 * FIDELTY)
                    Draw.vector(new Vector2(0, 10).SetAngle(angle * lines,10), false, new Vector2(0,1).SetAngle(angle * lines,1).Add(p.position))
                }
            }
        })
    }
    
    static UpdatePositions(){
        allParticles.forEach(particle =>{
            if (particle.velocity.x != 0 || particle.velocity.y != 0) {
                Draw.text(`${particle.velocity.x}, ${particle.velocity.y}`, particle.position)
                allParticles.forEach(collide =>{
                    if (Vector2.Magnitude(collide.position, particle.position) <= 2){
                        collide.velocity = Vector2.Zero(); particle.velocity = Vector2.Zero();
                    } else {
                        particle.position = particle.position.Add(Vector2.Multiply(particle.velocity, SparkX.DeltaTime))
                    }
                })
            };
        })
    }

    static SetVelocityBasedOnCharge(){
        allParticles.forEach(particle =>{
            allParticles.forEach(particle2 =>{
                if (this.Attract(particle, particle2)){
                    particle.velocity = particle.velocity.Add(particle2.position.Sub(particle.position))
                    particle2.velocity = particle2.velocity.Add(particle.position.Sub(particle2.position))
                } else {
                    particle.velocity = particle.velocity.Add(particle.position.Sub(particle2.position))
                    particle2.velocity = particle2.velocity.Add(particle2.position.Sub(particle.position))
                }
                
            })
        })
    }

    static Attract(p1 = Particle, p2 = Particle){
        if (p1.charge != p2.charge){
            return true 
        } else { return false }
    }
}
class Proton extends Particle{
    constructor(position = Vector2.Zero()){
        super();
        this.charge = 1.6*Math.pow(10, -19);
        this.position = position;
        this.mass = 1.67*Math.pow(10, -27);
        let p = new Circle(position, 1, 0, 'red', 1);
        p.UnFill();
        let cross = new Rect(position, new Vector2(0.2, 1))
        let crossB = new Rect(position, new Vector2(1, 0.2))
        cross.Color = 'red'; crossB.Color = 'red'
        SparkX.RenderLoop(()=>{ p.Position = this.position; cross.Position = this.position; crossB.Position = this.position})
        return this;
    }

    
}

class Electron extends Particle{
    constructor(position = Vector2.Zero()){
        super();
        this.charge = -1.6*Math.pow(10, -19);
        this.position = position;
        this.mass = 9.11*Math.pow(10, -31);
        let p = new Circle(position, 1, 0, 'blue', 1);
        p.UnFill();
        let cross = new Rect(position, new Vector2(1, 0.2))
        cross.Color = 'blue';
        SparkX.RenderLoop(()=>{ p.Position = this.position; cross.Position = this.position;})
        return this;
    }
}

let p = new Proton(new Vector2(-10,-10))

let e = new Electron(new Vector2(10, 10))
let p2 = new Proton()
Mouse.OnButton1Down(()=>{
    p.position.MoveTo(Mouse.Position, 0.5)
    // SparkX.Camera.Position.MoveTo(Mouse.Position.Floor(), 0.3)
})

Keyboard.OnKeyDown('w', ()=>{
    Particle.UpdatePositions();
})

SparkX.RenderLoop(()=>{
    Particle.SetVelocityBasedOnCharge();
    // p.position.LerpFromThis(Mouse.Position.Floor(), 0.5)
})


    // let prev = p.position;
    // for (let point = 0; point < 5*FIDELTY + 1; point++) {
    //     let t = 1 / 5*FIDELTY * (point)
    //     let poly = polynomialInterpolation(p.position, e.position, 2, t)
    //     Draw.line(poly, prev);
    //     // Draw.vector(prev.Sub(poly), false, prev.Sub(poly))
    //     // Draw.circle(poly, 1)
    //     prev = poly;
    // }
    // Draw.line(prev, e.position)