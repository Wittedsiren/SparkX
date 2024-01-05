import { Input } from "../SparkX/Input/Input";
import { Keyboard } from "../SparkX/Input/InputFiles/Keyboard";
import { Mouse } from "../SparkX/Input/InputFiles/Mouse";
import { SparkX } from "../SparkX/SparkX";

SparkX.RenderLoop(()=>{
    if (Keyboard.GetKeyState('a')){
        console.log("A is being pressed")
    }
})


Keyboard.OnKeyDown('a', ()=>{
    console.log("A is being pressed")
})
Keyboard.OnKeyDown()


