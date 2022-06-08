/*
* INPUT
* colors is an array of any valid CSS color types. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
* width and height are for setting the size of the canvas in pixels.
* type can be "linear", "conic", or "radial".
* draw is an array of draw coordinates that depends on the type.
* "linear" is [x0,y0,x1,y1]
* "conic" is [startAngle, x, y]
* "radial" is [x0, y0, r0, x1, y1, r1]
* Check browser compatibility with gradient type if you are having issues. Especially for conic gradients. https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
*/
var input = {
colors:[
"red",
"orange",
"yellow",
"green",
"blue",
"purple"
],
width:384,
height:384,
type:"linear",
draw:[30,30,344,344]
}



//Create canvas
var canvas = document.createElement('canvas');
canvas.width = input["width"];
canvas.height = input["height"];
var context = canvas.getContext('2d');

/*
* Create gradient
* input value of key "type" changes which type of gradient to draw.
* toLowerCase() ensures that there is no case sensitivity.
*/
var gradient;
switch(input["type"].toLowerCase()){
  case 'conic':
    gradient = context.createConicGradient(...input["draw"]);
    break;
  case 'radial':
    gradient = context.createRadialGradient(...input["draw"]);
    break;
  default:
    gradient = context.createLinearGradient(...input["draw"]);
}

/*
* Create color stops
* This evenly distributes the color stops across the gradient.
* Because a color array length of one minus one is zero and division by zero is... well... the else block catches that!
*/
var colors = input["colors"];
if(colors.length > 1){
  const denominator = colors.length - 1;
  colors.forEach((element, index) => gradient.addColorStop(index / denominator, element));
}else{
  gradient.addColorStop(0, colors[0]);
}

// Fill gradient
context.fillStyle = gradient;
context.fillRect(0,0,canvas.width,canvas.height);

//Write canvas as image
document.write("<img src='" + canvas.toDataURL("image/png") + "'/>");
