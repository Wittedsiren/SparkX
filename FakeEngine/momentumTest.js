import { Mouse } from "../SparkX/Input/InputFiles/Mouse.js";
import { Vector2 } from "../SparkX/Math/Vector2.js";
import { Draw } from "../SparkX/Render/Draw/Draw.js";
import { Circle } from "../SparkX/Render/Draw/DrawObjects.js";
import { SparkX } from "../SparkX/SparkX.js";

SparkX.Settings.Fidelity = 5;

class PhysicsX{
    static CalcElasticCollision(PhysA = Ball, PhysB = Ball){
        let m1 = PhysA.Mass; let m2 = PhysB.Mass;
        let v1 = PhysA.Velocity; let v2 = PhysB.Velocity;
        let k = PhysA.KineticEnergy + PhysB.KineticEnergy;
        let preMom = new Vector2(m1 * v1.x + m2 * v2.x, m1 * v1.y + m2 * v2.y);
        let vf1 = Math.sqrt(2 * k - m2 * Math.pow(v2))

        
    }
}

class Ball{
    static Mass = Number;
    static Velocity = Vector2;
    static Acceleration = Vector2;
    static Momentum = Vector2;
    static KineticEnergy = Number;

    constructor(mass = Number, velocity = Vector2){
        this.GFX = new Circle();
        this.Mass = mass;
        this.Velocity = velocity;


        this.Acceleration = Vector2.Zero();
        this.Momentum = Vector2.Zero();
        this.KineticEnergy = 0;
        
    }

    update(){
        this.Velocity = Vector2.Add(this.Velocity, this.Acceleration);
        this.GFX.Position = Vector2.Add(this.GFX.Position, Vector2.Multiply(this.Velocity, SparkX.DeltaTime))
        this.Momentum = new Vector2(this.Velocity.x, this.Velocity.y).Multiply(this.Mass)
        this.KineticEnergy = 1/2 * this.Mass * Math.pow(this.Velocity.Magnitude(), 2);
    }


}

let b = new Ball(100, new Vector2(0, 0))
b.GFX.Position = new Vector2(-10, -10)

let b2 = new Ball(1000, new Vector2(0, 0))
b2.GFX.Position = new Vector2(10, 10)
b2.Acceleration = new Vector2(-0.1,-0.1)
SparkX.RenderLoop(()=>{
    Draw.vector(b2.Velocity, true, b2.GFX.Position);
    b2.Velocity = Mouse.Position.Sub(b2.GFX.Position)
    // b.Velocity = b2.GFX.Position.Sub(b.GFX.Position);
    // console.log(b2.Momentum)
    b.update()
    b2.update()
    Draw.text(`${b2.KineticEnergy} J`);
})