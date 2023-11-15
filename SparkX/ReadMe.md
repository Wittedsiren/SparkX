# Spark

## About
SparkX is render API used for the web. It includeds an input engine and a 2D redner engine.

## Input Engine
SparkX contians its own highy customizable input engine. Similair to the one used in Unity
### Detecting a key stroke
```JavaScript
if (Input.Keyboard.GetKeyState('a')){
    console.log("the key a has been pressed")
} 
```
This is a simplistic way to detect key strokes but is only ran once. You would need to place this in your own update functions or SparkX's Render Loop to concurrently check. But lets say you want to check every frame without putting it in an update. Then you could write something like this

```JavaScript

```