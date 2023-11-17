# SparkX
SparkX is render API used for the web. It includeds an input engine and a 2D render engine.
## Render Engine
This is the main aspect of SparkX, the render engine
### Render Loop / Start
The render start is ran at the start of the initlization of your code
```JavaScript
SparkX.RenderStart(() => {
    //place code here
}
```
The render loop function is ran once every frame. You would want to place code in here that you would need to be updated multiple times throughout your program
```JavaScript
SparkX.RenderLoop(() => {
    //place code here
}
```
Feel free to place your varialbes outside of these. Just make sure not to set the varible if its going to be a dynamic value

### Settings
These are sets of settings inside of SparkX itself the influence the behavoir of the engine.
#### FramesPerSecond (Number)
```JavaScript
SparkX.FramesPerSecond;
```
This is where you can change exaclty how many frames are rendered every second. By defualt this value is set to the users main screens refresh rate.
#### Rendering (Boolean, true by defualt)
```JavaScript
SparkX.Settings.Rendering;
```
This bool value is as simple as whether or not the SparkX should render any of its given data.
#### ReduceScreenTearing (Boolean, false by defualt)
```JavaScript
SparkX.Settings.ReduceScreenTearing;
```
This is a bool value where when set to true the screen will render a couple extra frames to then attempt to blur them all; creating a seamless transistion between frames, reducing screen tear.
#### Fidelity (Number)
```JavaScript
SparkX.Settings.Fidelity
```
This is a nubmer that detmines how accurate the graphic components are. For example, the lower you set a fidelity, the more jagged a line may be. Same princable can go towards a circle. This number will never let you set it as zero. you can set it as high as youd like but by defualt it is set to 1.
#### Gird (Boolean, false by defualt)
```JavaScript
SparkX.Settings.Grid
```
When set to true, a grid will appear with each square within the grid being 50px bt 50px.

##Draw Class
This is where the fun happens. This class houses any 

## Input Engine
SparkX contains its own highy customizable input engine. Similair to the one used in Unity
### Keyboard Functions
These are sets of fucntions that link to the users keyboard
#### Detecting a key stroke
```JavaScript
//On key down
if (Input.Keyboard.GetKeyState('a')){
    console.log("the key a has been pressed")
}
//On key up
if (!Input.Keyboard.GetKeyState('a')){
    console.log("the key a has been pressed")
}
```
This is a simplistic way to detect key strokes but is only ran once. You would need to place this in your own update functions or SparkX's Render Loop to concurrently check. But lets say you want to check every frame without putting it in an update. Then you could write something like this
```JavaScript
//On key down
Input.Keyboard.OnKeyDown('a', => (){
    //Your own function!
    console.log("the key a has been pressed")
})
//On key up
Input.Keyboard.OnKeyUp('a', => (){
    //Your own function!
    console.log("the key a has been pressed")
})
```
You would want to place this good
### Mouse Functions
### Game Controller Function