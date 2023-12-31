let KeyStates = [

    ['a', false],
    ['b', false],
    ['c', false],
    ['d', false],
    ['e', false],
    ['f', false],
    ['g', false],
    ['h', false],
    ['i', false],
    ['j', false],
    ['k', false],
    ['l', false],
    ['m', false],
    ['n', false],
    ['o', false],
    ['p', false],
    ['q', false],
    ['r', false],
    ['s', false],
    ['t', false],
    ['u', false],
    ['v', false],
    ['w', false],
    ['x', false],
    ['y', false],
    ['z', false],
    [' ', false],
    ['LeftArrow', false],
    ['RightArrow', false],
    ['ArrowUp', false],
    ['DownArrow', false],
    ['Shift', false],
    ['Alt', false],
    ['1', false],
    ['2', false],
    ['3', false],
    ['4', false],
    ['5', false],
    ['6', false],
    ['7', false],
    ['8', false],
    ['9', false],
    ['0', false],
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
        let s = false;
        KeyStates.forEach(state => {
            if (state[0] == key) {
                s = state[1];
                return;
            };
        });
        return s;
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key
    keyDowns.forEach(element => {
        if (key == element.key){
            element.a()
        }
    });

    KeyStates.forEach(state => {
        if (state[0] == key) {
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