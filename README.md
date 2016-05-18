# JSDragBox
A javascript drag box—like the mouse drag box on your operating system, but for your browser

## Demo
Just paste the code from jsdrag.js into your console an drag somewhere in the client window.
 
## Make it work yo

You probably want to call init on the  ```body```—it will append a ```figure``` as the body's last element. 

```
var dragBox = new DragBox().init(document.body);
```
