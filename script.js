var ZONES = [
  {label:'Avis Important', x:261.30, y:214.06, w:547.54, h:107.00, color:'#e97c1a'},
  {label:'Forme orange',   x:237.71, y:354.39, w:606.74, h:364.27, color:'#4fa3ff'},
  {label:'Vecteezy',       x:584.10, y:522.55, w:234.50, h:126.76, color:'#a8e060'},
{label:'Map', x:0, y:0, w:1080, h:1920, color:'#e060c0'}
];

var VILLES = [
  {nom:"Tanger",     id:"tanger"},
  {nom:"Assilah",    id:"assilah"},
  {nom:"Fnideq",     id:"fnideq"},
  {nom:"Tetouan",    id:"tetouan"},
  {nom:"Kenitra",    id:"kenitra"},
  {nom:"Rabat",      id:"rabat"},
  {nom:"Casablanca", id:"casablanca"},
  {nom:"El Jadida",  id:"eljadida"},
  {nom:"Safi",       id:"safi"},
  {nom:"Marrakech",  id:"marrakech"},
  {nom:"Agadir",     id:"agadir"},
  {nom:"Berrechid",  id:"berrechid"},
  {nom:"Khouribga",  id:"khouribga"},
  {nom:"Beni Mellal",id:"benimellal"},
  {nom:"Khemisset",  id:"khemisset"},
  {nom:"Fes",        id:"fes"},
  {nom:"Taza",       id:"taza"},
  {nom:"Oujda",      id:"oujda"}
];

var ROUTES = {
  "agadir-marrakech":
    "606.854,1025.43 593.194,1036.244 584.087,1042.505 577.826,1043.643 574.411,1048.766 "+
    "571.565,1053.888 570.427,1052.75 564.735,1060.718 564.166,1060.718 561.889,1066.41 "+
    "561.32,1072.101 556.198,1081.777 549.937,1089.177 547.091,1092.022 547.66,1095.437 543.676,1103.406",

  "eljadida-safi":
    "586.255,947.69 588.248,953.382 587.394,959.358 584.548,963.627 584.263,965.335 "+
    "578.572,965.619 571.742,972.734 566.05,980.987 563.204,987.532 561.212,991.801 560.643,994.647 560.074,995.501",

  "oujda-taza":
    "892.586,854.264 886.041,855.402 878.072,855.971 871.242,856.825 868.112,857.679 "+
    "862.136,857.679 858.151,857.679 858.151,858.248 849.045,864.509 849.045,865.078 "+
    "841.645,868.209 841.645,868.493 835.669,870.77 832.823,872.477 831.4,873.9 "+
    "827.985,873.9 821.155,874.185 814.325,874.185",

  "taza-fes":
    "813.091,874.406 803.984,877.536 800.285,878.959 793.17,877.394 784.633,882.232 "+
    "778.087,886.927 777.66,886.927 773.534,890.2 769.123,891.196 763.431,891.908 "+
    "763.147,891.765 759.874,892.477 759.732,892.477 757.597,894.042 757.028,894.042 755.178,893.331 753.898,892.904",

  "fes-khemisset":
    "751.096,891.726 733.025,900.975 733.025,901.117 726.337,902.54 719.649,897.702 712.25,901.829",

  "khemisset-rabat":
    "710.325,903.745 699.368,903.603 699.226,903.603 691.969,900.9 677.882,890.512",

  "fnideq-tetouan":
    "736.787,796.97 736.787,801.524 736.787,803.658 737.641,805.935 737.641,810.915",

  "tanger-assilah":
    "730.669,791.213 726.827,795.34 726.827,798.47 718.859,801.458 714.59,802.312 "+
    "712.029,802.312 710.321,805.158 709.752,809.285 709.183,814.407",

  "assilah-kenitra":
    "708.914,820.315 707.064,823.73 707.064,827.43 707.064,827.857 705.926,831.841 "+
    "703.507,836.11 702.226,840.521 701.372,842.797 700.803,844.932 700.519,847.351 "+
    "700.519,849.912 700.519,851.05 696.392,854.323 696.25,854.465 694.827,859.303 691.696,866.418",

  "kenitra-rabat":
    "689.77,869.765 686.924,875.457 687.493,879.726 687.493,882.856 682.655,885.702 678.956,887.979 678.387,888.263",

  "rabat-casablanca":
    "677.264,891.506 671.288,905.451 671.003,905.735 669.581,907.158 669.296,907.158 "+
    "660.901,907.585 656.205,909.15 649.09,911.996 645.675,914.984 641.691,919.68 "+
    "639.13,922.526 635.715,924.233 631.304,927.079",

  "casablanca-eljadida":
    "626.621,929.682 609.617,938.22 609.617,938.362 600.866,940.07 600.795,940.07 589.767,944.765",

  "casablanca-berrechid":
    "629.856,930.639 629.5,935.192 629.5,935.335 630.212,937.042 632.061,940.315",

  "berrechid-khouribga":
    "635.997,944.419 649.942,951.676 650.155,951.676 656.132,958.933 660.329,960.783 666.519,961.281 666.875,961.352",

  "khouribga-benimellal":
    "671.397,961.383 676.093,961.668 676.235,961.668 676.946,961.668 681.357,965.225 "+
    "681.5,967.075 681.5,969.067 681.5,969.636 681.642,970.917 681.784,971.059 "+
    "683.634,972.482 690.322,985.715 691.033,992.972",

  "berrechid-marrakech":
    "632.704,945.662 631.281,951.923 631.281,958.753 624.735,967.86 623.597,972.413 "+
    "622.743,975.828 615.344,983.797 612.783,1000.59 611.075,1013.96 609.937,1020.79 609.652,1022.79 609.937,1022.79"
};

var NW=1080, NH=1920;
var canvas = document.getElementById('bgCanvas');
var ctx    = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

var bgImg  = null;
var images = [null,null,null,null];
var fits   = ['cover','cover','cover','contain' ];

var svg = document.getElementById('routesSVG');
var SVG_NS = 'http://www.w3.org/2000/svg';

var tracedRoutes = [];
var texteGlobal  = '';
var couleurSelectionnee = '#e97c1a';

function drawFit(c2, img, dx, dy, dw, dh, mode) {
  var iw=img.naturalWidth, ih=img.naturalHeight;
  if (mode==='fill') { c2.drawImage(img,dx,dy,dw,dh); return; }
  var sc = mode==='cover' ? Math.max(dw/iw,dh/ih) : Math.min(dw/iw,dh/ih);
  var fw=iw*sc, fh=ih*sc, ox=dx+(dw-fw)/2, oy=dy+(dh-fh)/2;
  if (mode==='cover') {
    c2.save(); c2.beginPath(); c2.rect(dx,dy,dw,dh); c2.clip();
    c2.drawImage(img,ox,oy,fw,fh); c2.restore();
  } else {
    c2.drawImage(img,ox,oy,fw,fh);
  }
}

function drawCanvas() {
  ctx.clearRect(0,0,NW,NH);
  ctx.fillStyle='#111'; ctx.fillRect(0,0,NW,NH);
  if (bgImg) ctx.drawImage(bgImg,0,0,NW,NH);

  [3,1,2,0].forEach(function(i){
    var z=ZONES[i];
    if (images[i]) {
      drawFit(ctx, images[i], z.x, z.y, z.w, z.h, fits[i]);
    } else {
      ctx.save();
      ctx.globalAlpha=0.07; ctx.fillStyle=z.color; ctx.fillRect(z.x,z.y,z.w,z.h);
      ctx.globalAlpha=0.5; ctx.strokeStyle=z.color; ctx.lineWidth=3;
      ctx.setLineDash([12,8]); ctx.strokeRect(z.x+1,z.y+1,z.w-2,z.h-2); ctx.setLineDash([]);
      ctx.fillStyle=z.color; ctx.globalAlpha=1;
      var fs = Math.max(20, Math.min(28, z.h*0.22));
      ctx.font='600 '+fs+'px Segoe UI,sans-serif';
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(z.label, z.x+z.w/2, z.y+z.h/2);
      ctx.restore();
    }
  });

  if (texteGlobal) {
    ctx.save();
    ctx.fillStyle='#ffffff'; ctx.font='bold 36px "Segoe UI",Arial,sans-serif';
    ctx.textAlign='center'; ctx.shadowColor='rgba(0,0,0,0.8)'; ctx.shadowBlur=8;
    var x=NW/2, y=NH-130;
    var mots=texteGlobal.split(' '), ligne='';
    mots.forEach(function(m){
      var t=ligne?ligne+' '+m:m;
      if(t.length>28){ctx.fillText(ligne,x,y);y+=46;ligne=m;}else{ligne=t;}
    });
    if(ligne)ctx.fillText(ligne,x,y);
    ctx.restore();
  }
}

function updateSVG() {
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  tracedRoutes.forEach(function(r) {
    var routeColor = r.color || '#e97c1a';
    
    var halo = document.createElementNS(SVG_NS, 'polyline');
    halo.setAttribute('points', r.pointsStr);
    halo.setAttribute('fill', 'none');
    halo.setAttribute('stroke-width', '5');
    halo.setAttribute('stroke-linecap', 'round');
    halo.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(halo);

    var line = document.createElementNS(SVG_NS, 'polyline');
    line.setAttribute('points', r.pointsStr);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', routeColor);
    line.setAttribute('stroke-width', '3.5');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(line);
  });
}

function draw() {
  drawCanvas();
  updateSVG();
}

function selectColor(color) {
  couleurSelectionnee = color;
  document.getElementById('btnOrange').classList.toggle('active', color === '#e97c1a');
  document.getElementById('btnRouge').classList.toggle('active', color === '#ff0000');
}

(function initSelects(){
  var d=document.getElementById('villeDepart'), a=document.getElementById('villeArrivee');
  VILLES.forEach(function(v){
    var o1=document.createElement('option'); o1.value=v.id; o1.textContent=v.nom; d.appendChild(o1);
    var o2=document.createElement('option'); o2.value=v.id; o2.textContent=v.nom; a.appendChild(o2);
  });
})();

function tracerRoute() {
  var dEl=document.getElementById('villeDepart'), aEl=document.getElementById('villeArrivee');
  var d=dEl.value, a=aEl.value;
  if (!d||!a) { alert('Sélectionnez départ et arrivée'); return; }
  if (d===a)  { alert('Départ = Arrivée'); return; }

  var key=d+'-'+a, keyR=a+'-'+d;
  var pts=ROUTES[key]||ROUTES[keyR];
  if (!pts) { alert('Route non disponible : '+d+' ↔ '+a); return; }

  if (tracedRoutes.some(function(r){return r.key===key||r.key===keyR;})) {
    alert('Route déjà tracée'); return;
  }

  var dNom=dEl.options[dEl.selectedIndex].text;
  var aNom=aEl.options[aEl.selectedIndex].text;
  
  tracedRoutes.push({ 
    key:key, 
    label:dNom+' → '+aNom, 
    pointsStr:pts,
    color:couleurSelectionnee
  });
  renderList();
  updateSVG();
}

function effacerTout() { tracedRoutes=[]; renderList(); updateSVG(); }

function supprimerRoute(i) { tracedRoutes.splice(i,1); renderList(); updateSVG(); }

function renderList() {
  var list=document.getElementById('rlist'); list.innerHTML='';
  tracedRoutes.forEach(function(r,i){
    var couleur = r.color || '#e97c1a';
    var emoji = couleur === '#e97c1a' ? '🟠' : '🔴';
    var div=document.createElement('div'); div.className='rtag';
    div.innerHTML='<span>'+emoji+' '+r.label+'</span><button onclick="supprimerRoute('+i+')">✕</button>';
    list.appendChild(div);
  });
}

function ajouterTexte() { texteGlobal=document.getElementById('texteZone').value; draw(); }

document.getElementById('bgInput').addEventListener('change', function(e){
  var f=e.target.files[0]; if(!f) return;
  var img=new Image();
  img.onload=function(){bgImg=img; draw();};
  img.src=URL.createObjectURL(f); this.value='';
});

var bgD=document.getElementById('bgDrop');
bgD.addEventListener('dragover',function(e){e.preventDefault();bgD.classList.add('over');});
bgD.addEventListener('dragleave',function(){bgD.classList.remove('over');});
bgD.addEventListener('drop',function(e){
  e.preventDefault(); bgD.classList.remove('over');
  var f=e.dataTransfer.files[0]; if(!f||!f.type.startsWith('image/')) return;
  var dt=new DataTransfer(); dt.items.add(f);
  var el=document.getElementById('bgInput'); el.files=dt.files; el.dispatchEvent(new Event('change'));
});

var activeSlot=-1;
function triggerSlot(i){ activeSlot=i; document.getElementById('slotInput').click(); }

document.getElementById('slotInput').addEventListener('change', function(e){
  if(activeSlot<0) return;
  var i=activeSlot, f=e.target.files[0]; if(!f) return;
  var img=new Image(), url=URL.createObjectURL(f);
  img.onload=function(){
    images[i]=img;
    var th=document.getElementById('thumb-'+i);
    th.src=url; th.style.display='block'; th.nextElementSibling.style.display='none';
    document.getElementById('card-'+i).classList.add('filled');
    document.querySelector('#card-'+i+' .slot-btn').textContent='↺ Changer';
    draw();
  };
  img.src=url; this.value='';
});

function setFit(i,mode){
  fits[i]=mode;
  ['cover','contain','fill'].forEach(function(m){
    var b=document.getElementById('fit-'+i+'-'+m);
    if(b) b.classList.toggle('active',m===mode);
  });
  draw();
}

function downloadImage() {
  var svgClone = svg.cloneNode(true);
  svgClone.setAttribute('width',  NW);
  svgClone.setAttribute('height', NH);
  svgClone.setAttribute('viewBox','0 0 '+NW+' '+NH);

  var svgData = new XMLSerializer().serializeToString(svgClone);
  var svgBlob = new Blob([svgData], {type:'image/svg+xml;charset=utf-8'});
  var svgURL  = URL.createObjectURL(svgBlob);

  var out  = document.createElement('canvas');
  out.width=NW; out.height=NH;
  var oc   = out.getContext('2d');
  oc.imageSmoothingEnabled=true; oc.imageSmoothingQuality='high';

  oc.drawImage(canvas, 0, 0);

  var svgImg = new Image();
  svgImg.onload = function() {
    oc.drawImage(svgImg, 0, 0, NW, NH);
    URL.revokeObjectURL(svgURL);

    var a = document.createElement('a');
    a.download = 'composition_adm.png';
    a.href = out.toDataURL('image/png');
    a.click();
  };
  svgImg.onerror = function() {
    var a = document.createElement('a');
    a.download = 'composition_adm.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
  svgImg.src = svgURL;
}

function resetAll(){
  bgImg=null; images=[null,null,null,null]; fits=['cover','cover','cover','contain'];
  tracedRoutes=[]; texteGlobal='';
  couleurSelectionnee='#e97c1a';
  
  [0,1,2,3].forEach(function(i){
    var th=document.getElementById('thumb-'+i);
    th.src=''; th.style.display='none'; th.nextElementSibling.style.display='';
    document.getElementById('card-'+i).classList.remove('filled');
    document.querySelector('#card-'+i+' .slot-btn').textContent='+ Choisir image';
    ['cover','contain','fill'].forEach(function(m){
      var b=document.getElementById('fit-'+i+'-'+m);
      var def=(i===3)?'contain':'cover';
      if(b) b.classList.toggle('active',m===def);
    });
  });
  
  document.getElementById('villeDepart').value='';
  document.getElementById('villeArrivee').value='';
  document.getElementById('texteZone').value='';
  
  selectColor('#e97c1a');
  renderList();
  draw();
}

document.getElementById('btnTracer').addEventListener('click', tracerRoute);
document.getElementById('btnClear').addEventListener('click',  effacerTout);
document.getElementById('btnTexte').addEventListener('click',  ajouterTexte);

draw();