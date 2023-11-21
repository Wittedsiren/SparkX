let scroll
let sU = [];
let sD = [];

export let Mouse = {
    Scroll : scroll,
    OnScrollWheelUp : function(a= Function){
        sU.push(a)
    },
    X : 0,
    Y : 0,
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    sU.forEach(a => {
        a()
    });
});
window.addEventListener("mousemove", event => {
    Mouse.X = event.x;
    Mouse.Y = event.y
});
