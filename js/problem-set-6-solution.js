/*
 * Hello. SOLUTION.
 */

function sayHello() {
  let c = document.getElementById("canvas1"); //initialize and declare variable 'c' to display in 1st assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  

  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'
  ctx.font = "48px sans-serif"; //set's font style of ctx 2-D figure
  ctx.strokeText("Hello, World!", 10, 50);  //assignment box displays through 'ctx' "Hello, World!", from x-position: 10 
                                            //and y-position: 50
}

/*
 * Rectangle. SOLUTION.
 */

function drawRectangle() {
  let height = Number(prompt("Height: ")); //initialize and declare variable 'height' as a prompt for the user asking "Height:"
  let width = Number(prompt("Width: "));  //initialize and declare variable 'width' as a prompt for the user asking "Width:"
  let x = Number(prompt("X: "));          //initialize and declare variable 'x' as a prompt for the user asking "X:" (x-position)
  let y = Number(prompt("Y: "));          //initialize and declare variable 'x' as a prompt for the user asking "X:" (x-position)

  let c = document.getElementById("canvas2"); //initialize and declare variable 'c' to display in 2nd assignment box
  let ctx = c.getContext("2d");               //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(x) || Number.isNaN(y)) {
    alert("One of your inputs is not a number.");
  } else if (width > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (height > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if ((width + x) > 1023) {
    alert("The rectangle will not fit on the canvas.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if ((height + y) > 511) {
    alert("The rectangle will not fit on the canvas.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else {
    ctx.strokeRect(x, y, width, height);
  }
}

/*
 * Color. SOLUTION.
 */

function drawColoredRectangle() {
  let c = document.getElementById("canvas3"); //initialize and declare variable 'c' to display in 3rd assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let color = prompt("Color: ");  // color is initialized as a prompt that asks for the "Color:"
  if (color === "black"  ||       // if statement states that if the color is the same value and type as "black" 
      color === "blue"   ||                                                                         // OR "blue"
      color === "green"  ||                                                                         // OR "green"
      color === "orange" ||                                                                         // OR "orange"
      color === "purple" ||                                                                         // OR "purple"
      color === "red"    ||                                                                         // OR "red"
      color === "yellow") {                                                                         // OR "yellow" then...

    ctx.fillStyle = color;  //the drawing 'ctx' should be filled with whatever the 'color' is
    ctx.fillRect(10, 10, 100, 50);  // the filled rectangle will be at a x & y-position of 10, a width of 100, and a height of 50
  } else {                          // otherwise...
    alert(color + " is not a supported color.");  // the browser will alert the user that whatever the input of 'color' was 
                                                  // "is not a supported color."
  }
}

/*
 * Triangle. SOLUTION.
 */

function drawTriangle() {
  let c = document.getElementById("canvas4"); //initialize and declare variable 'c' to display in 4th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let s1 = Number(prompt("Side 1: "));  //initialize and declare variable 's1' as a number-prompt for the user asking "Side 1:"
  let s2 = Number(prompt("Side 2: "));  //initialize and declare variable 's2' as a number-prompt for the user asking "Side 2:"
  let s3 = Number(prompt("Side 3: "));  //initialize and declare variable 's3' as a prompt for the user asking "Side 3:"

  if (Number.isNaN(s1) || Number.isNaN(s2) || Number.isNaN(s3)) { // if statements states that if the inputs of s1, s2 or s3 is
                                                                  // not a number, then...
    alert("One of your inputs is not a number."); // the browser will display "One of your inputs is not a number."
  } else if (((s1 + s2) > s3) && ((s1 + s3) > s2) && ((s2 + s3) > s1)) { // otherwise if the sum of s1 & s2 is greater than s3
                                                                         // AND the sum of s1 & s3 is greater than s2
                                                                         // AND the sum of s2 & s3 is greater than s1
      let side1 = Math.min(s1, s2, s3); // 'side1' will be defined as the lowest value out of s1, s2, and s3
      let side3 = Math.max(s1, s2, s3); // 'side3' will be defined as the highest value out of s1, s2, and s3
      let side2 = (s1 + s2 + s3) - side1 - side3; // 'side2' will be defined as the sum of s1, s2, and s3 
                                                  // minus 'side1' minus 'side3'

      if (((side1 * side1) + (side2 * side2)) === (side3 * side3)) {  // if statement states that if 'side1'^2 plus 'side2'^2
                                                                      // is of equal value and type to 
                                                                      // 'side3'^2 then...
        let x = 10;             // 'x' will equal the value of '10'
        let y = 10;             // 'y' will equal the value of '10'

        if ((y + side1) > 511 || (x + side2) > 1023) { // if statement states that if the sum of 'y' & 'side1' is greater than 511
                                                       // OR the sum of 'x' + side2 is greater than 1023 then...
          alert("The triangle will not fit on the canvas."); // the browser will alert the user that "The triangle will not fit on the canvas."
        } else {  // otherwise...
          ctx.beginPath();  // will create a new path of the drawing 'ctx'


          ctx.moveTo(x, y); // moves the path to the specified point in the canvas of 'ctx', without creating a line 
                            // based on the coordinates of x & y
          ctx.lineTo(x, y + side1); // adds a new point and creates a line to that point from the last specified point in the canvas
                                    // based on coordinates of x & y + side1
          ctx.lineTo(x + side2, y + side1); // adds a new point and creates a line to that point from the last specified point in the canvas
                                            // based on coordinates of x + side2 & y + side1
          ctx.lineTo(x, y);                 // adds a new point and creates a line to that point from the last specified point in the canvas
                                            // based on coordinates of x & y

          ctx.closePath();  //to create a path from the current point back to the starting point.
          ctx.stroke();     //to actually draw the path on the canvas
        }
      } else {              // otherwise...
        alert("This is not a valid right triangle."); // browser will alert user that "This is not a valid right triangle."
      }
  } else {                 // otherwise...
    alert("That is not a valid right triangle."); // browser will alert user that "This is not a valid right triangle." (again)
  }
}

/*
 * Smile. SOLUTION.
 */

function drawSmileyFace() {
  let c = document.getElementById("canvas5"); //initialize and declare variable 'c' to display in 5th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let radius = Number(prompt("Radius: "));  //initialize and declare variable 'radius' as a number-prompt for the user asking "Radius:"

  if (Number.isNaN(radius)) {             // if statement states the 'number' of "radius" is not a number then...
    alert("Your input is not a number.");   // the browser will alert the user that "Your input is not a number."
  } else if (radius < 1) {                // otherwise if the radius is less than 1 then...
    alert("Your radius is too small.");     // the browser will alert the user that "Your radius is too small."
  } else if ((radius * 2 + 10) > 511) {   // otherwise if the radius times 2 + 10, is less than 511 then...
    alert("The smiley face will not fit on the canvas."); // the browser will alert the user 
                                                          // that "The smiley face will not fit on the canvas."
  } else {                                // otherwise...
    let faceX = radius + 10;              // 'faceX' is defined as the input of 'radius' + 10
    let faceY = radius + 10;              // 'faceY' is defined as the input of 'radius' + 10 

    ctx.beginPath();  // to create a new path of the drawing 'ctx'

    ctx.arc(faceX, faceY, radius, 0, Math.PI * 2, true);  // draw the face
    ctx.moveTo(faceX + radius - radius * 0.3, faceY); // move to mouth
    ctx.arc(faceX, faceY, radius * 0.7, 0, Math.PI, false); // draw the mouth
    ctx.moveTo(faceX - radius * 0.35 + radius * 0.1, faceY - radius * 0.5); // move to left eye
    ctx.arc(faceX - radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true); // left eye
    ctx.moveTo(faceX + radius * 0.35 + radius * 0.1, faceY - radius * 0.5); // move to right eye
    ctx.arc(faceX + radius * 0.35, faceY - radius * 0.5, radius * 0.1, 0, Math.PI * 2, true);  // right eye

    ctx.closePath();  //to create a path from the current point back to the starting point.
    ctx.stroke(); //to actually draw the path on the canvas
  }
}

/*
 * Star. SOLUTION.
 */

function drawStar() {
  let c = document.getElementById("canvas6"); //initialize and declare variable 'c' to display in 6th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let pts = 5;  // 'pts' is defined as the value of "5"
  let x = 125;  // 'x' is defined as the value of "125"
  let y = 125;  // 'y' is defined as the value of "125"

  let outer = Number(prompt("Outer Radius: ")); //initialize and declare variable 'outer' as a prompt for the user asking 
                                                // for the "Outer Radius:"
  let inner = Number(prompt("Inner Radius: ")); //initialize and declare variable 'inner' as a prompt for the user asking
                                                // for the "Inner Radius:"

  if (Number.isNaN(outer) || Number.isNaN(inner)) { // if statement states that if the input of 'outer' OR 'inner' 
                                                    // is not a number, then...
    alert("One of your inputs is not a number."); // the browser will alert the user that "One of your inputs is not a number."
  } else if (outer < 2) {                         // otherwise if the input of 'outer' is less than 2 then....
    alert("Your outer radius is too small.");   // the browser will alert the user that "Your outer radius is too small."
  } else if (inner < 1) {                       // otherwise if the input of 'inner' is less than 1
    alert("Your inner radius is too small.");   // the browser will alert the user that "Your inner radius is too small."
  } else if (outer <= inner) {  // otherwise if the input of 'outer' is less than or equal to the ouput of 'inner' then
    alert("Your outer radius must be larger than your inner radius.");  // the browser will alert the user that 
                                                                        // "Your outer radius must be larger than your inner radius."
  } else {  // otherwise...
    ctx.beginPath();    // to create a new path of the drawing 'ctx'

    for (let vtx = 0; vtx <= 2 * pts; vtx++) {
      let angle = vtx * Math.PI / pts - Math.PI / 2;  // 'angle' is defined as the value of times the circumference of a circle
                                                      // divided by the value of 'pts' minus the circumference of a circle divided by 2

      let radius;
      if (vtx % 2 == 0) {
        radius = outer;
      } else {
        radius = inner;
      }

      ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    }

    ctx.closePath();  //to create a path from the current point back to the starting point.
    ctx.stroke();   //to actually draw the path on the canvas
  }
}

/*
 * Stop Sign. SOLUTION.
 */

function drawStopSign() {
  let c = document.getElementById("canvas7"); //initialize and declare variable 'c' to display in 7th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let x = 10; // to initialize 'x' as the value '10'
  let y = 150;  // to initialize 'y' as the value 150
  let length = 80;  // to initialize 'length' as 50

  ctx.beginPath();    //to create a new path of the drawing 'ctx'

  ctx.moveTo(x, y);
  y = y - length; // 'y' is now defined as the difference of (150 - 80)
  ctx.lineTo(x, y);

  let angle = 315.0;  // to initialize 'angle' as the value of '315.0'
  for (let i = 0; i < 7; i++) { 
    x = x + length * Math.cos(Math.PI * angle / 180.0); // x is now defined as "(10 + 80) * the cosine of the angle of 
                                                        // (Math.PI * angle / 180.0)"
    y = y + length * Math.sin(Math.PI * angle / 180.0); // y is now defined as "(150 + 80) * the sine of 
                                                        // (Math.PI * angle / 180.0)"
    ctx.lineTo(x, y);

    angle = angle + 45.0; // now 'angle' is defined as (315.0 + 45.0)
    if (angle > 359.0) {  // if the 'angle' is greater than 359.0 then...
      angle = angle - 360.0;  // 'angle' is now defined as (360.0 - 360.0)
    }
  }

  ctx.fillStyle = "red";  //.fillStyle of 'ctx is used to fill the drawing in the color "red"
  ctx.closePath();  //to create a path from the current point back to the starting point.
  ctx.fill();   //to fill the drawing

  ctx.fillStyle = "white";  //.fillStyle of 'ctx' is used to fill the drawing in the color "white"
  ctx.font = "65px sans-serif";
  ctx.fillText("STOP", 18, 135);
}

/*
 * Pyramid. SOLUTION.
 */

function drawPyramid() {
  let c = document.getElementById("canvas8"); //initialize and declare variable 'c' to display in 8th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let length = Number(prompt("Length: "));  //initialize and declare variable 'length' as a number prompt for the user asking "Length:"

  if (Number.isNaN(length)) {         // if statement states that if the 'number' inputted is not-a-number for length then...
    alert("Your input is not a number."); // browser will display an alert to the user that "Your input is not a number."
  } else if ((length * 5 + 10) > 1023 || (length * 5 + 10) > 511) { // otherwise if the input of length * 5 + 10 is less than 1023
                                                                    // OR if the input of length * 5 + 10 is greater than 511
    alert("The pyramid will not fit on the canvas."); // browser will display an alert to the user that 
                                                      // "The pyramid will not fit on the canvas."
  } else {
    let x = 10;
    let y = c.height - 10 - length;

    let offset = 0;
    for (let n = 0; n < 5; n++) {
      for (let o = 0; o < 5 - n; o++) {
        ctx.strokeRect(x + offset, y, length, length);
        offset = offset + length;
      }

      x = x + Math.floor(length / 2);
      y = y - length;
      offset = 0;
    }
  }
}

/*
 * House. SOLUTION.
 */

function drawHouse() {
  let c = document.getElementById("canvas9"); //initialize and declare variable 'c' to display in 9th assignment box
  let ctx = c.getContext("2d"); //initialize and declare variable 'ctx' to be able to draw in the assignment box by 2 dimensions
  ctx.clearRect(0, 0, c.width, c.height); //to clear specified pixels of rectangle of x & y-position at 0 while the 
                                          //width & height are based on 'c'

  let house = prompt("House Color: "); //initialize and declare variable 'house' as a number prompt for the user asking the "House Color:"
  let door = prompt("Front Door Color: ");  //initialize and declare variable 'length' as a number prompt for the user asking for 
                                            //the "Front Door Color:"

  if ((house !== "blue"   &&  //if statement states that if 'house' is not the same value and type as "blue"
       house !== "brown"  &&                                                            //as well as "brown" 
       house !== "green"  &&                                                            //as well as "green"  
       house !== "orange" &&                                                            //as well as "orange"
       house !== "purple" &&                                                            //as well as "purple"
       house !== "red"    &&                                                            //as well as "red"
       house !== "yellow") ||                                                           //as well as "yellow" OR
      (door !== "blue"   && // if "door" is not the same value and type as "blue" 
       door !== "brown"  &&                                  //as well as "brown"
       door !== "green"  &&                                  //as well as "green"
       door !== "orange" &&                                  //as well as "orange"
       door !== "purple" &&                                  //as well as "purple"
       door !== "red"    &&                                  //as well as "red"
       door !== "yellow")) {                                  //as well as "yellow" then

    alert("One of your colors is not supported."); //the browser will alert the user that "One of your colors is not supported."
  } else {                                         //otherwise...
    let width = c.width - 300;  // 'width' will be defined as the width of 'c' - 300
    let height = (c.height / 5) * 3;  // 'height' will be defined as the sum of the height of c divided by 5, times 3
    let x = 150;                      //  'x' will be defined as the value 150
    let y = c.height - 10 - height;   //  'y' will be defined as the height of c, minus the value of 10, minus the height

    // draw the frame
    ctx.fillStyle = house;  // color of frame will be the color of whatever 'house' is 
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);

    // draw the roof
    ctx.beginPath();  //to create a new path of the drawing 'ctx'
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    ctx.lineTo(x, y);
    ctx.fillStyle = "gray"; //.fillStyle of 'ctx' is used to fill the drawing in the color "gray"
    ctx.fill(); //to fill the drawing
    ctx.moveTo(x, y);
    ctx.lineTo(c.width / 2, 10);
    ctx.lineTo(c.width - 150, y);
    // ctx.lineTo(x, y);
    ctx.closePath();  //to create a path from the current point back to the starting point.
    ctx.stroke(); //to actually draw the path on the canvas

    // draw the door
    ctx.fillStyle = "gold"; //.fillStyle of 'ctx' is used to fill the drawing in the color "gold"
    ctx.fillRect(c.width / 2 - 50, (c.height / 5) * 4 - 9, 100, 150);
    ctx.beginPath();  // to create a new path for the drawing 'ctx'
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    ctx.fillStyle = door; //drawing of 'ctx' will be filled in with the color of whatever "door" is
    ctx.fill();   //to fill the drawing
    
    ctx.moveTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, (c.height / 5) * 4 - 9);
    ctx.lineTo(c.width / 2 + 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, c.height - 10);
    ctx.lineTo(c.width / 2 - 50, (c.height / 5) * 4 - 9);
    ctx.moveTo(c.width / 2 + 42, (c.height / 5) * 4 - 9 + 80);
    ctx.arc(c.width / 2 + 35, (c.height / 5) * 4 - 9 + 80, 7, 0, Math.PI * 2, true);
    
    ctx.stroke();     //to actually draw the path on the canvas

    // draw windows
    ctx.fillStyle = "lightBlue";  //.fillStyle of 'ctx' is used to fill the drawing in the color "lightBlue"
    ctx.fillRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.fillRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.fillRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);

    ctx.strokeRect(150 + 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 4 - 9 + 35, 80, 80);
    ctx.strokeRect(150 + 120, (c.height / 5) * 2.5, 80, 80);
    ctx.strokeRect(c.width - 150 - 80 - 120, (c.height / 5) * 2.5, 80, 80);
  }
}
