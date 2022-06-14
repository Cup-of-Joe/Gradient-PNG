# Gradient-PNG
Creates gradient with a JavaScript canvas and then writes it as an png.

A gradient is generated with a color array evenly distributed across the draw coordinates. A gradient type can be provided to change between drawing linear, conic, and radial gradients.


# How to Use
Edit the input variable in the JavaScript file, then run the script.

* colors is an array of any valid CSS color types. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
* width and height are for setting the size of the canvas in pixels.
* type can be "linear", "conic", or "radial".
* draw is an array of draw coordinates that depends on the type.
* "linear" is [x0,y0,x1,y1]
* "conic" is [startAngle, x, y]
* "radial" is [x0, y0, r0, x1, y1, r1]
* Check browser compatibility with gradient type if you are having issues. Especially for conic gradients. https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient


# Issue Reporting
The script is edited and ran by you, so obviously code execution is expected behavior. Only issues using reasonable edits to the input variable should be reported. Check your browser if JavaScript is allowed, and compatibility with the gradient. The Discussions tab is open for questions, suggestions, critique, etc.

The maximum JavaScript canvas size is different between browsers. I've found this to be a good guide on what size limits there are: https://github.com/jhildenbiddle/canvas-size
