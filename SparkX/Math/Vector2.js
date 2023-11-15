export class Vector2 {    

    static x = Number;
    static y = Number;

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

    static IsBiggerThen(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return { x : (a.x > b) ? true : false, y : (a.y > b) ? true : false};
        } else {
            return { x : (a.x > b.x) ? true : false, y : (a.y > b.y) ? true : false};
        }
    }

    static IsSmallerThen(a = Vector2, b = Vector2 || Number){
        if (typeof(b) == "number"){
            return { x : (a.x < b) ? true : false, y : (a.y < b) ? true : false};
        } else {
            return { x : (a.x < b.x) ? true : false, y : (a.y < b.y) ? true : false};
        }
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

    static Lerp(a = Vector2, b = Vector2, t){
        let x = (t - 1) * -a.x + t * b.x;
        let y = (t - 1) * -a.y + t * b.y;
        return new Vector2(x, y);
    }
}