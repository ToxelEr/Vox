var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

function sprite(spr) {
  img = new Image();
  img.src = 'sprites/' + spr + '.png';
  document.body.appendChild(img);
  img.style.display = 'none';
  img.classList.add('sprite');
}

function cls(x) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   canvas.style.background = x;
}

function rotation(x1,y1,x,y,angle) {
  a = angle
  var radians = (Math.PI / 180) * a;
  cos = Math.cos(radians);
  sin = Math.sin(radians);
  nx = (cos * (x - x1)) + (sin * (y - y1)) + x1;
  ny = (cos * (y - y1)) - (sin * (x - x1)) + y1;
  return [nx, ny];
}

function sspr(x,y,w,h,x1,y1,w1,h1) {
  img = document.querySelector('.sprite');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img,x1,y1,w1,h1,x,y,w,h);
}

function ssprf(ctx) {
  img = document.querySelector('.sprite');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height);
}

function ssprr(x,y,w,h,x1,y1,w1,h1,r,angle) {
    ctx.save();
  img = document.querySelector('.sprite');
  ctx.imageSmoothingEnabled = false;
  ctx.translate(x+w/2,y+h/2);
  ctx.scale(1,Math.sin(angle*(Math.PI/180)))
  ctx.rotate(r * (Math.PI/180));
  ctx.translate(-x-w/2,-y-h/2);
  ctx.drawImage(img,x1,y1,w1,h1,x,y,w,h);
  ctx.restore();
}
