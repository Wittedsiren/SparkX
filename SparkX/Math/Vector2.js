import { SparkX } from "../SparkX.js";

export class Vector2 { 
    /**
     * @param x The x value of the vector
     */
    static x = Number;
    /**
     * @param y The y value of the vector
     */
    static y = Number;
    #moving = false;
    #cancel = false;

    /**
     * This function will set this vector to the given vector over the set period of time
     * @param {Vector2} a the vector you want this vector 2 to go towards 
     * @param {Number} t this is how long you want this procces to take in seconds
     */
    async MoveTo(a = Vector2, t = Number){
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
                    //console.log('cancelled to call another moveto');
                    this.#cancel = false; 
                    //this.MoveTo(a, t)
                    return true
                }
            })
        } else {
            this.#cancel = true;
            this.#moving = false;
            console.log('Cancelled and calling another');
            this.MoveTo(a, t)
        }
    }

    constructor(X = Number, Y = Number){
        this.x = X;
        this.y = Y;
        return this;
    }
/**
 * gives you the distance between both vectors
 * @param {Vector2} a vector A
 * @param {Vector2} b vector B
 * @returns the distance
 */
    static Magnitude(a = Vector2, b = Vector2){
        let vec1 = Math.pow(b.x - a.x, 2);
        let vec2 = Math.pow(b.y - a.y, 2);

        let Answer = Math.sqrt(vec1 + vec2);
        return Answer
    }
/**
 * gives you a vector 2 with 0 for the x and y cord
 * @returns a vector 2
 */
    static Zero(){
        return new Vector2(0, 0);
    }
/**
 * gives you a vector 2 with the same given value for x and y
 * @param {Number} a Will be set to the x and y cord
 * @returns a vector 2
 */
    static Fill(a = Number){
        return new Vector2(a, a);
    }
/**
 * adds either two vectors or a vector and a number
 * @param {Vector2} a the vector you want b to be added to
 * @param {*} b can be both a vector 2 and a number. adds it to vector a 
 * @returns the added vector
 */
    static Add(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x + b, a.y + b);
        } else {
            return new Vector2(a.x + b.x, a.y + b.y);
        }
    }
/**
 * subs either two vectors or a vector and a number
 * @param {Vector2} a the vector you want b to be subbed from
 * @param {*} b can be both a vector 2 and a number. subs it fom vector a 
 * @returns the subbed vector
 */
    static Sub(a= Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return new Vector2(a.x - b, a.y - b);
        } else {
            return new Vector2(a.x - b.x, a.y - b.y);
        }
    }
/**
 * multiplys either two vectors or a vector and a number
 * @param {Vector2} a the vector you want b to be added to
 * @param {Number|Vector2} b can be both a vector 2 and a number. add it to vector a 
 * @returns the added vector
 */
    static Multiply(a = Vector2, b = Number){
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

