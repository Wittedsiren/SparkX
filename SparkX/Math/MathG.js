export let MathG = {
    Lerp : function(a, b, t){
        return (1 - t) * a + b * t;
    },
    Rad : function(deg){
        return deg * ( Math.PI / 180 )
    },
    Deg : function(rad){
        return deg * ( 180 / Math.PI )
    },
}