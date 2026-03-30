// ── Zones en espace 1080×1920 (coordonnées SVG avec transforms appliqués) ──
const ZONES = [
  { label:'Avis Important', x:261.30, y:214.06, w:547.54, h:107.00, color:'#e97c1a' },
  { label:'Forme orange',   x:237.71, y:354.39, w:606.74, h:364.27, color:'#4fa3ff' },
  { label:'Vecteezy',       x:584.10, y:522.55, w:234.50, h:126.76, color:'#a8e060' },
  { label:'Map',            x:136.82, y:755.51, w:820.74, h:867.34, color:'#e060c0' }
];

// ── Canvas setup with devicePixelRatio for sharp preview ──────────────────
const NATIVE_W = 1080, NATIVE_H = 1920;
const PREVIEW_W = 540, PREVIEW_H = 960; // native/2 = pixel-perfect preview

const canvas  = document.getElementById('mainCanvas');
const ctx     = canvas.getContext('2d');
const dpr     = window.devicePixelRatio || 1;

// Physical pixels = preview × dpr (crisp on retina/HiDPI)
canvas.width  = PREVIEW_W * dpr;
canvas.height = PREVIEW_H * dpr;
canvas.style.width  = PREVIEW_W + 'px';
canvas.style.height = PREVIEW_H + 'px';

// Scale factor from 1080×1920 → preview canvas pixels
const SX = (PREVIEW_W * dpr) / NATIVE_W;
const SY = (PREVIEW_H * dpr) / NATIVE_H;

// High quality smoothing always on
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

let bgImg  = null;
let images = [null, null, null, null];
let fits   = ['cover','cover','cover','contain'];
let activeSlot = -1;

// ── drawImageFit: dessine une image dans une zone avec le mode fit ─────────
function drawImageFit(context, img, dx, dy, dw, dh, mode, scaleXY) {
  const sx = scaleXY || 1;
  const _dx = dx*sx, _dy = dy*sx, _dw = dw*sx, _dh = dh*sx;
  const iw = img.naturalWidth, ih = img.naturalHeight;

  if (mode === 'fill') {
    context.drawImage(img, _dx, _dy, _dw, _dh);
    return;
  }

  const scaleW = _dw / iw;
  const scaleH = _dh / ih;
  let scale, ox, oy, sw, sh;

  if (mode === 'cover') {
    scale = Math.max(scaleW, scaleH);
  } else { // contain
    scale = Math.min(scaleW, scaleH);
  }

  const fw = iw * scale;
  const fh = ih * scale;
  ox = _dx + (_dw - fw) / 2;
  oy = _dy + (_dh - fh) / 2;

  if (mode === 'cover') {
    // Clip to zone then draw
    context.save();
    context.beginPath();
    context.rect(_dx, _dy, _dw, _dh);
    context.clip();
    context.drawImage(img, ox, oy, fw, fh);
    context.restore();
  } else {
    context.drawImage(img, ox, oy, fw, fh);
  }
}

// ── Main draw ──────────────────────────────────────────────────────────────
function draw() {
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (bgImg) {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  }

  // Draw order: map(3) → forme(1) → vecteezy(2) → avis(0)
  [3, 1, 2, 0].forEach(i => {
    const z = ZONES[i];
    if (images[i]) {
      drawImageFit(ctx, images[i], z.x, z.y, z.w, z.h, fits[i], SX);
    } else {
      // Ghost placeholder
      const gx = z.x*SX, gy = z.y*SY, gw = z.w*SX, gh = z.h*SY;
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = z.color;
      ctx.fillRect(gx, gy, gw, gh);
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = z.color;
      ctx.lineWidth = 1.5 * dpr;
      ctx.setLineDash([6*dpr, 4*dpr]);
      ctx.strokeRect(gx+1, gy+1, gw-2, gh-2);
      ctx.setLineDash([]);
      ctx.fillStyle = z.color;
      const fs = Math.max(10*dpr, Math.min(13*dpr, gh * 0.22));
      ctx.font = `600 ${fs}px Segoe UI, system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(z.label, gx + gw/2, gy + gh/2);
      ctx.restore();
    }
  });
}

// ── Background load ────────────────────────────────────────────────────────
document.getElementById('bgInput').addEventListener('change', function(e) {
  const file = e.target.files[0]; if (!file) return;
  const img = new Image();
  img.onload = () => { bgImg = img; draw(); };
  img.src = URL.createObjectURL(file);
  this.value = '';
});

function setupDrop(zid, inp) {
  const z = document.getElementById(zid);
  z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); });
  z.addEventListener('dragleave', () => z.classList.remove('over'));
  z.addEventListener('drop', e => {
    e.preventDefault(); z.classList.remove('over');
    const f = e.dataTransfer.files[0];
    if (!f || !f.type.startsWith('image/')) return;
    const dt = new DataTransfer(); dt.items.add(f);
    const el = document.getElementById(inp);
    el.files = dt.files;
    el.dispatchEvent(new Event('change'));
  });
}
setupDrop('bgDrop','bgInput');

// ── Slot upload ────────────────────────────────────────────────────────────
function triggerSlot(i) { activeSlot = i; document.getElementById('slotInput').click(); }

document.getElementById('slotInput').addEventListener('change', function(e) {
  if (activeSlot < 0) return;
  const i = activeSlot;
  const file = e.target.files[0]; if (!file) return;
  const img = new Image();
  const url = URL.createObjectURL(file);
  img.onload = () => {
    images[i] = img;
    const th = document.getElementById('thumb-'+i);
    th.src = url; th.style.display='block';
    th.nextElementSibling.style.display='none';
    document.getElementById('card-'+i).classList.add('filled');
    document.querySelector('#card-'+i+' .slot-btn').textContent='↺ Changer';
    draw();
  };
  img.src = url;
  this.value = '';
});

// ── Fit mode ───────────────────────────────────────────────────────────────
function setFit(i, mode) {
  fits[i] = mode;
  ['cover','contain','fill'].forEach(m => {
    const btn = document.getElementById('fit-'+i+'-'+m);
    if (btn) btn.classList.toggle('active', m===mode);
  });
  draw();
}

// ── Download full 1080×1920 PNG ────────────────────────────────────────────
function downloadImage() {
  const tmp = document.createElement('canvas');
  tmp.width = NATIVE_W; tmp.height = NATIVE_H;
  const tc = tmp.getContext('2d');
  tc.imageSmoothingEnabled = true;
  tc.imageSmoothingQuality = 'high';

  tc.fillStyle = '#111'; tc.fillRect(0,0,NATIVE_W,NATIVE_H);
  if (bgImg) tc.drawImage(bgImg, 0, 0, NATIVE_W, NATIVE_H);

  [3,1,2,0].forEach(i => {
    if (!images[i]) return;
    const z = ZONES[i];
    drawImageFit(tc, images[i], z.x, z.y, z.w, z.h, fits[i], 1);
  });

  const a = document.createElement('a');
  a.download = 'composition_adm.png';
  a.href = tmp.toDataURL('image/png'); // PNG = sans perte
  a.click();
}

// ── Reset ──────────────────────────────────────────────────────────────────
function resetAll() {
  bgImg = null; images=[null,null,null,null]; fits=['cover','cover','cover','contain'];
  [0,1,2,3].forEach(i => {
    const th=document.getElementById('thumb-'+i);
    th.src=''; th.style.display='none';
    th.nextElementSibling.style.display='';
    document.getElementById('card-'+i).classList.remove('filled');
    document.querySelector('#card-'+i+' .slot-btn').textContent='+ Choisir image';
    ['cover','contain','fill'].forEach(m => {
      const b=document.getElementById('fit-'+i+'-'+m);
      const def = (i===3) ? 'contain' : 'cover';
      if(b) b.classList.toggle('active',m===def);
    });
  });
  draw();
}

draw();