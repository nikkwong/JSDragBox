# JSDragBox
A javascript drag box—like the mouse drag box on your operating system, but for your browser

## Demo
Just paste the code from jsdrag.js into your console and trigger a ```onmousedown``` & ```onmousemove``` event somewhere in the client window (without triggering ```onmouseup```). In other words, start dragging. 
 
## Make it work yo

You probably want to call init on the  ```body```—it will append a ```figure``` as the body's last element. 

```
var dragBox = new DragBox().init(document.body[, onmousemoveCallback[, onmouseupCallback [, onmousedownCallback [, context]]]]);
```

## Callback

You can pass a callback that gets executed on the ```onmousemove``` event. It has the following signature:

```
function (event: Event, this: DragBox) { ... }
```

This callback is optional.
