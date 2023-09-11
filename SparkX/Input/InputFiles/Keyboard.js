let KeyStates = [

    ["a", false],
    ["b", false],
    ["c", false],
    ["d", false],
    ["e", false],
    ["f", false],
    ["g", false],
    ["h", false],
    ["i", false],
    ["j", false],
    ["k", false],
    ["l", false],
    ["m", false],
    ["n", false],
    ["o", false],
    ["p", false],
    ["q", false],
    ["r", false],
    ["s", false],
    ["t", false],
    ["u", false],
    ["v", false],
    ["w", false],
    ["x", false],
    ["y", false],
    ["z", false],

]

let keyDowns = [];
let keyUps = [];

class keyDown {
    constructor(key = String, a = Function){
        this.key = key;
        this.a = a;
        keyDowns.push(this)
    }
}

class keyUp {
    constructor(key = String, a = Function){
        this.key = key;
        this.a = a;
        keyUps.push(this)
    }
}

export let Keyboard = {

    OnKeyUp : function(key = String, a = Function){
        new keyUp(key, a);
    },
    
    OnKeyDown : function(key = String, a = Function){
        new keyDown(key, a)
    },

    GetKeyState : function(key = String){
        let lowerCase = key.toLowerCase()
        let keyState = false;
        KeyStates.forEach(state => {
            if (state[0] == lowerCase) {
                keyState = state[1];
            };
        });
        return keyState;
    }

}

document.addEventListener('keydown', function(event) {

    keyDowns.forEach(element => {
        if (event.key == element.key){
            element.a()
        }
    });

    KeyStates.forEach(state => {
        if (state[0] == event.key) {
            state[1] = true;
        };
    });
});

document.addEventListener('keyup', function(event) {
    
    keyUps.forEach(element => {
        if (event.key == element.key){
            element.a()
        }
    });

    KeyStates.forEach(state => {
        if (state[0] == event.key) {
            state[1] = false;
        };
    });
});