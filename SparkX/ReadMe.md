# SparkX
SparkX is render library used for the web. It includeds an input engine and a 2D render engine. This library is wirrten in pure ```JavaScript```

The current nomanclater is if a propertie of soemthing does NOT start with a capitial, then this propertie was not intended to be used by the user
## Render Engine
This is the main aspect of SparkX, the render engine
### The Render Loop / Start Function
```JavaScript
SparkX.RenderStart(() => {
    //place code here
}
```
The render start function is ran at initlization of your program
```JavaScript
SparkX.RenderLoop(() => {
    //place code here
}
```
The render loop function is ran once every frame. You would want to place code in here that you would need to be updated multiple times throughout your program

Feel free to place your variables outside of these. Just make sure not to set the variable if its going to be a dynamic value
### Vector2 Class
A vector2 is a custom made data tpye that holds an x value and a y value. perfect for laballing the position of a shape in 2d space.
#### Creating one
```JavaScript
new Vector2(x, y)
```
To create a vector 2 is as simple as making an instance any other class. You can set x and y to your desired position.
#### Features
```JavaScript
 // a and b are two seprate vector2's
Vector2.Add(a, b)
Vector2.Sub(a, b)  
Vector2.Multiply(a, b) 
Vector2.Divide(a, b)
```
You can add, subtract, divide and even multiply vector2's by just calling the desired function.
```JavaScript
Vector2.Zero() // This creates a vector 2 with 0 for both x and y
Vector2.Fill(x) // This creates a vector2 with the value you input for both x and y
Vector2.Avg(a, b) // this will average the two given vector2's
Vector2.Magnitude(a, b) // This will find the distance between two vector2's
Vector2.Lerp(a, b, t) // This will use linear interpolation on the two vector2's with respect to t
```
There are also features that will assit you in teh making of your program
### Draw Class
This is a huge class that really shows off SparkX capablities.
#### Draw.line(Vector2, Vector2)
```JavaScript
let a = new Vector2(100, 100)
let b = new Vector2(0, 0)
Draw.line(a, b)
```
The code above would draw a line between these two points
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

## Getting Started
### Preperation
To start, make sure you put this in your main html file\
```html
    <script type="module" src="../SparkX/SparkX.js" ></script>
    <script type="module" src="../SparkX/Render/Window/RenderLoop.js" ></script>
```
Then in your main file that will be using SparkX, make sure to import these files alogn with setting up your default render start and loop
```JavaScript
import { SparkX } from "../SparkX/SparkX.js";

SparkX.RenderStart(() => {

})

SparkX.RenderLoop(() => {

})
```
