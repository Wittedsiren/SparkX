import { SparkX } from "../SparkX.js";

export class Vector2 {    

    x = Number;
    y = Number;

    MoveTo(a, t){
        let timeElapsed = 0;
        let valueToLerp;

        SparkX.RenderLoop(()=>{
            if (timeElapsed < t)
            {
                valueToLerp = Vector2.Lerp(new Vector2(this.x, this.y), a, timeElapsed / t);
                console.log(valueToLerp);
                this.x = valueToLerp.x;
                this.y = valueToLerp.y
                timeElapsed += SparkX.DeltaTime;
            }    
        }, ()=>{
            if (Vector2.IsEqualTo(new Vector2(this.x, this.y), a)){
                console.log('IT SHOULD END');
                this.x = a.x;
                this.y = a.y;
                return true
            }
        })
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
        let x = (t - 1) * a.x + t * b.x;
        let y = (t - 1) * a.y + t * b.y;
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

