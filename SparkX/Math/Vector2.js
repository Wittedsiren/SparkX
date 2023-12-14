import { SparkX } from "../SparkX.js";

export class Vector2 {    

    x = Number;
    y = Number;
    #moving = false;
    #cancel = false;
    MoveTo(a, t){
        console.log('called');
        if (this.#moving == false){
            this.#moving = true
            let timeElapsed = 0;
            let valueToLerp = 0;
            console.log(new Vector2(this.x, this.y), a);
            SparkX.RenderLoop(()=>{
                if (timeElapsed < t){
                    valueToLerp = Vector2.Lerp(new Vector2(this.x, this.y), a, timeElapsed / t);
                    this.x = valueToLerp.x;
                    this.y = valueToLerp.y
                    timeElapsed += SparkX.DeltaTime;
                    //console.log(SparkX.DeltaTime);
                } else if (!Vector2.IsEqualTo(new Vector2(this.x, this.y), a)){
                    this.#moving = false
                    this.x = a.x;
                    this.y = a.y;
                }
            }, ()=>{
                if (Vector2.IsEqualTo(new Vector2(this.x, this.y), a)){
                    this.#moving = false
                    this.x = a.x;
                    this.y = a.y;
                    return true
                } 
                if (this.#cancel) {
                    console.log('cancelled to call another moveto');
                    this.#cancel = false; 
                    return true
                }
            })
        } else {
            this.#cancel = true;
            this.#moving = false;
            this.MoveTo(a, t)
        }
    }

    constructor(X = Number, Y = Number){
        this.x = X;
        this.y = Y;
        return this;
    }

    static Magnitude(a = Vector2, b = Vector2){
        let vec1 = Math.pow(b.x - a.x, 2);
        let vec2 = Math.pow(b.y - a.y, 2);

        let Answer = Math.sqrt(vec1 + vec2);
        return Answer
    }

    static Zero(){
        return new Vector2(0, 0);
    }

    static Fill(a = Number){
        return new Vector2(a, a);
    }

    static Add(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x + b, a.y + b);
        } else {
            return new Vector2(a.x + b.x, a.y + b.y);
        }
    }

    static Sub(a= Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x - b, a.y - b);
        } else {
            return new Vector2(a.x - b.x, a.y - b.y);
        }
    }

    static Multiply(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x * b, a.y * b);
        } else {
            return new Vector2(a.x * b.x, a.y * b.y);
        }
    }

    static Divide(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x / b, a.y / b);
        } else {
            return new Vector2(a.x / b.x, a.y / b.y);
        }
    }

    static Avg(a = Vector2, b = Vector2){
        return Vector2.Divide(new Vector2(a.x + b.x, a.y + b.y), 2)
    }

    static Lerp(a = Vector2, b = Vector2, t = Number){
        let x = a.x * (1 - t) + b.x * t;
        let y = a.y * (1 - t) + b.y * t;
        return new Vector2(x, y);
    }

    static IsEqualTo(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return ((a.x == b && a.y == b ) ? true : false);
        } else {
            return ((a.x == b.x && a.y == b.y ) ? true : false);
        }
    }

    static Round(a = Vector2){
        return new Vector2(Math.round(a.x), Math.round(a.y))
    }

    static Floor(a = Vector2){
        return new Vector2(Math.floor(a.x), Math.floor(a.y))
    }


     
}

