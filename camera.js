//camera
let [Yaw,Pitch,XAcc,YAcc] = [-155,-25,.05,-.02];
let [YawV,PitchV,XOld,YOld] = [0,0,0,0];
let start = true;

const el = document.body;
el.addEventListener('touchstart', touchStart);
el.addEventListener('touchmove',touchMove);
el.addEventListener('mousedown', touchStart);
el.addEventListener('mousemove',touchMove);

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
