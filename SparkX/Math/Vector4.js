export class Vector4{
    x = 0; y = 0; z=0; w = 0;
    constructor(X, Y, Z, W){
        this.x = X;
        this.y = Y;
        this.z = Z;
        this.w = W
    }
    MatriceTransform(mat = Array){
        let X = this.x * mat[0][0] + this.y * mat[0][1] + this.z * mat[0][2] + this.w * mat[0][3] 
        let Y = this.x * mat[1][0] + this.y * mat[1][1] + this.z * mat[1][2] + this.w * mat[1][3] 
        let Z = this.x * mat[2][0] + this.y * mat[2][1] + this.z * mat[2][2] + this.w * mat[2][3] 
        let W = this.x * mat[3][0] + this.y * mat[3][1] + this.z * mat[3][2] + this.w * mat[3][3] 
        return new Vector4(X, Y, Z, W);        
    }
}