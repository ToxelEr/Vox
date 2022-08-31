//orbit camera
let [Yaw,Pitch,XAcc,YAcc] = [-25,25,-.075,.05];
let [YawV,PitchV,XOld,YOld] = [0,0,0,0];
let start = true;
let start2 = false;

const el = document.querySelector('#canvas');
el.addEventListener('touchstart', touchStart);
el.addEventListener('touchmove',touchMove);
el.addEventListener('mousedown', mouseStart);
el.addEventListener('mousemove', mouseMove);
el.addEventListener('mouseup', mouseEnd);

function touchStart() {
  var XOld = event.touches[0].clientX;
  var YOld = event.touches[0].clientY;
  start = true;
}

function touchMove() {
  YawV = ((event.touches[0].clientX - XOld) * XAcc) + YawV/4;
  PitchV = ((event.touches[0].clientY - YOld) * YAcc) + PitchV/4;
  if (start == true) {
    XOld = event.touches[0].clientX;
    YOld = event.touches[0].clientY;
    start = false;
  }
}

function mouseStart() {
  var XOld = event.clientX;
  var YOld = event.clientY;
  start2 = true;
}

function mouseMove() {
  if (start2 == true) {
    YawV = ((event.clientX - XOld) * XAcc) + YawV/4;
    PitchV = ((event.clientY - YOld) * YAcc) + PitchV/4;
  }
  if (start2 == false) {
    XOld = event.clientX;
    YOld = event.clientY;
  }
}

function mouseEnd() {
  start2 = false;
}
