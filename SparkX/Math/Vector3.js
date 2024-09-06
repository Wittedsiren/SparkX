import { Vector2 } from "./Vector2.js";

export class Vector3{

    x = Number; y = Number; z = Number;

    constructor(X, Y, Z){
        this.x = X;
        this.y = Y;
        this.z = Z;
    }

    CollapseInto2D( mat = Array ){
        let factor = 10;
        // console.log(this.z)
        // this.x /= Math.abs(this.z)
        // this.y /= Math.abs(this.z)
        let x = this.x * mat[0][0] + this.y * mat[0][1] + this.z * mat[0][2] // (this.z + factor)
        let y = this.x * mat[1][0] + this.y * mat[1][1] + this.z * mat[1][2] // (this.z + factor)
        return new Vector2(x, y)
     }

    MatriceTransform( mat = Array){
        let x = this.x * mat[0][0] + this.y * mat[0][1] + this.z * mat[0][2] 
        let y = this.x * mat[1][0] + this.y * mat[1][1] + this.z * mat[1][2] 
        let z = this.x * mat[2][0] + this.y * mat[2][1] + this.z * mat[2][2] 
        this.x = x;
        this.y = y;
        this.z = z;
        return new Vector3(x,y,z)
    }
    Add(a = Vector3){
        return new Vector3(this.x + a.x, this.y + a.y, this.z + a.z)
    }
}
