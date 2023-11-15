# SparkX
SparkX is render API used for the web. It includeds an input engine and a 2D render engine.
## Settings
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
#### 


# Input Engine
SparkX contains its own highy customizable input engine. Similair to the one used in Unity
## Keyboard Functions
These are sets of fucntions that link to the users keyboard
### Detecting a key stroke
```JavaScript
if (Input.Keyboard.GetKeyState('a')){
    console.log("the key a has been pressed")
} 
```
This is a simplistic way to detect key strokes but is only ran once. You would need to place this in your own update functions or SparkX's Render Loop to concurrently check. But lets say you want to check every frame without putting it in an update. Then you could write something like this

```JavaScript

```
## Mouse Functions
## Game Controller Function