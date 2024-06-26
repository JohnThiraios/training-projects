// // Up-Down and Diagonal Movement
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin() {
//   let timerId = null;
//   let x = 0;
//   let y = 0;
//   timerId = setInterval(frame, 5);
//   function frame() {
//     if (x >= 200 || y >= 200) {
//       clearInterval(timerId);
//     } else {
//       y += 1;
//       x += 1;
//       myAnimation.style.top = y + "px";
//       myAnimation.style.left = x + "px";
//     }
//   }
// }

// // Rotation on X-Y-Z axis
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin() {
//   let timerId = null;
//   let degrees = 0;
//   timerId = setInterval(frame, 5);
//   function frame() {
//     if (degrees >= 360) {
//       clearInterval(timerId);
//     } else {
//       degrees += 1;
//       myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
//     }
//   }
// }

// Combination of movement + rotation
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");
myButton.addEventListener("click", begin);
function begin() {
  let timerId = null;
  let degrees = 0;
  let x = 0;
  let y = 0;
  timerId = setInterval(frame, 5);
  function frame() {
    if (x >= 360 || y >= 360) {
      clearInterval(timerId);
    } else {
      degrees += 5;
      x += 1;
      y += 1;
      myAnimation.style.top = y + "px";
      myAnimation.style.left = x + "px";
      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }
}

// // Scaling Up or Down objects
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin);
// function begin() {
//   let timerId = null;
//   let scaleX = 1;
//   let scaleY = 1;

//   timerId = setInterval(frame, 5);

//   function frame() {
//     if (scaleX <= 0.1 || scaleY <= 0.1) {
//       clearInterval(timerId);
//     } else {
//       scaleX -= 0.01;
//       scaleY -= 0.01;
//       myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";
//     }
//   }
// }
