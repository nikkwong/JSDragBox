# JSDragBox
A javascript drag box—like the mouse drag box on your operating system, but for your browser

## Demo
Just paste the code from jsdrag.js into your console and trigger a ```onmousedown``` & ```onmousemove``` event somewhere in the client window (without triggering ```onmouseup```). In other words, start dragging. 
 
## Make it work yo

You probably want to call init on the  ```body```—it will append a ```figure``` as the body's last element. 

```
var dragBox = new DragBox().init(document.body[, onmousemoveCallback[, onmouseupCallback [, onmousedownCallback [, context]]]]);
```

## Callbacks

You can pass a callback that gets executed on 3 mouse events. They have the following signatures:

###onmousemove

```
function (event: Event, context: DragBox) { ... }
```

###onmousedown

```
function (event: Event, context: DragBox) { ... }
```

###onmouseup

```
function (event: Event, context: DragBox) { ... }
```


This callbacks are optional.
