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

// ╔═════════════════════════════════════════════════════════════╗
// ║ SYSTÈME DE TEXTES MULTIPLES DANS ZONE ORANGE              ║
// ╚═════════════════════════════════════════════════════════════╝

var textesOrange = []; // Tableau de textes avec positions
var texteDragActif = null; // Index du texte en train d'être déplacé
var dragOffsetX = 0, dragOffsetY = 0;
var ZONE_ORANGE = ZONES[1];

var texteAvance = {
  texte: '',
  taille: 36,
  visible: false,
  colorStyles: [],
  posX: 540,  // Position personnalisée X (centre par défaut)
  posY: 1600,  // Position personnalisée Y (bas par défaut)
  alignment: 'left'  // left, center, right
};

var textAvanceDragActif = false;
var dragOffsetAdvanceX = 0, dragOffsetAdvanceY = 0;

var textZones = {
  gauche: {x: 31.98, y: 794.67, w: 465.86, h: 250.75},
  centre: {x: 307.12, y: 794.67, w: 465.86, h: 250.75},
  droite: {x: 582.26, y: 794.67, w: 465.86, h: 250.75}
};

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

// Dessiner tous les textes de la zone orange
function drawTextesOrange(c) {
  if (textesOrange.length === 0) return;

  textesOrange.forEach(function(texte, index) {
    var fontWeight = texte.bold ? 'bold ' : '';
    c.save();
    
    c.font = fontWeight + texte.taille + 'px "Segoe UI", Arial, sans-serif';
    c.fillStyle = texte.couleur;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    
    c.shadowColor = 'rgba(0, 0, 0, 0.5)';
    c.shadowBlur = 6;
    c.shadowOffsetX = 1;
    c.shadowOffsetY = 1;
    
    var maxWidth = ZONE_ORANGE.w - 40;
    var lineHeight = texte.taille * 1.4;
    
    // Découper en lignes si nécessaire
    var words = texte.texte.split(' ');
    var lines = [];
    var currentLine = '';
    
    words.forEach(function(word) {
      var testLine = currentLine ? currentLine + ' ' + word : word;
      var metrics = c.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    
    if (currentLine) lines.push(currentLine);
    
    // Afficher chaque ligne
    var startY = texte.posY - (lines.length - 1) * lineHeight / 2;
    lines.forEach(function(line, lineIndex) {
      var lineY = startY + lineIndex * lineHeight;
      c.fillText(line, texte.posX, lineY);
    });
    
    // Afficher le rectangle de sélection si en édition
    if (texteDragActif === index) {
      c.strokeStyle = '#00ff00';
      c.lineWidth = 2;
      c.setLineDash([5, 5]);
      c.strokeRect(texte.posX - maxWidth/2 - 10, texte.posY - texte.taille, maxWidth + 20, texte.taille * 2.5);
      c.setLineDash([]);
    }

    c.restore();
  });
}

function drawAdvancedTextWithColors(c, texte, posX, posY, taille, colorStyles, alignment) {
  if (!texte) return;
  
  c.save();
  c.font = 'bold ' + taille + 'px "Segoe UI", Arial, sans-serif';
  c.textAlign = alignment || 'left';
  c.textBaseline = 'top';
  
  c.shadowColor = 'rgba(0, 0, 0, 0.8)';
  c.shadowBlur = 8;
  c.shadowOffsetX = 2;
  c.shadowOffsetY = 2;
  
  var lineHeight = taille * 1.3;
  var padding = 15;
  var maxWidth = 400; // Largeur max du texte
  var currentY = posY;
  
  var words = texte.split(' ');
  var lineWords = [];
  
  // Ajuster posX selon l'alignement pour le calcul
  var drawX = posX;
  if (alignment === 'center') {
    drawX = posX;
  } else if (alignment === 'right') {
    drawX = posX;
  }
  
  words.forEach(function(word) {
    var testLine = lineWords.length > 0 ? lineWords.join(' ') + ' ' + word : word;
    var metrics = c.measureText(testLine);
    
    if (metrics.width > maxWidth && lineWords.length > 0) {
      drawLineWithColors(c, lineWords, drawX, currentY, taille, colorStyles, alignment);
      currentY += lineHeight;
      lineWords = [word];
    } else {
      lineWords.push(word);
    }
  });
  
  if (lineWords.length > 0) {
    drawLineWithColors(c, lineWords, drawX, currentY, taille, colorStyles, alignment);
  }
  
  // Afficher le rectangle de sélection si en drag
  if (textAvanceDragActif) {
    c.strokeStyle = '#00ff00';
    c.lineWidth = 2;
    c.setLineDash([5, 5]);
    var totalHeight = (Math.ceil(words.length / 3)) * lineHeight;
    
    var rectX = drawX;
    if (alignment === 'center') {
      rectX = drawX - maxWidth / 2;
    } else if (alignment === 'right') {
      rectX = drawX - maxWidth;
    }
    
    c.strokeRect(rectX - 10, posY - 10, maxWidth + 20, totalHeight + 20);
    c.setLineDash([]);
  }
  
  c.restore();
}

function drawLineWithColors(c, words, x, y, taille, colorStyles, alignment) {
  var currentX = x;
  var line = words.join(' ');
  var lineWidth = c.measureText(line).width;
  
  // Ajuster le point de départ selon l'alignement
  if (alignment === 'center') {
    currentX = x - lineWidth / 2;
  } else if (alignment === 'right') {
    currentX = x - lineWidth;
  }
  
  words.forEach(function(word) {
    var wordColor = '#ffffff';
    
    colorStyles.forEach(function(style) {
      if (word.toLowerCase().includes(style.mot.toLowerCase()) || 
          style.mot.toLowerCase().includes(word.toLowerCase())) {
        wordColor = style.couleur;
      }
    });
    
    c.fillStyle = wordColor;
    
    // Sauvegarder temporairement pour chaque mot
    var savedAlign = c.textAlign;
    c.textAlign = 'left';
    c.fillText(word + ' ', currentX, y);
    c.textAlign = savedAlign;
    
    var metrics = c.measureText(word + ' ');
    currentX += metrics.width;
  });
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

  // Afficher tous les textes orange
  drawTextesOrange(ctx);

  // Afficher le texte avancé avec position libre
  if (texteAvance.visible && texteAvance.texte) {
    drawAdvancedTextWithColors(ctx, texteAvance.texte, texteAvance.posX, texteAvance.posY, texteAvance.taille, texteAvance.colorStyles, texteAvance.alignment);
  }

  if (texteGlobal) {
    ctx.save();
    ctx.fillStyle='#ffffff';
    ctx.font='bold 36px "Segoe UI",Arial,sans-serif';
    ctx.textAlign='center';
    ctx.shadowColor='rgba(0,0,0,0.8)';
    ctx.shadowBlur=8;
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

function ajouterTexte() { 
  texteGlobal = document.getElementById('texteZone').value; 
  draw(); 
}

// ╔═════════════════════════════════════════════════════════════╗
// ║ GESTION DES TEXTES ORANGE (MULTIPLES)                      ║
// ╚═════════════════════════════════════════════════════════════╝

function ajouterTexteOrange() {
  var texte = document.getElementById('texteOrange').value;
  
  if (!texte.trim()) {
    alert('Veuillez entrer un texte');
    return;
  }
  
  // Ajouter le texte au tableau
  var nouveauTexte = {
    id: Date.now(),
    texte: texte,
    taille: parseInt(document.getElementById('tailleOrange').value),
    bold: document.getElementById('btnBold').classList.contains('active'),
    couleur: document.getElementById('couleurTexteOrange').value,
    posX: ZONE_ORANGE.x + ZONE_ORANGE.w / 2, // Centre par défaut
    posY: ZONE_ORANGE.y + ZONE_ORANGE.h / 2  // Centre par défaut
  };
  
  textesOrange.push(nouveauTexte);
  
  // Réinitialiser l'input
  document.getElementById('texteOrange').value = '';
  
  // Mettre à jour l'affichage
  rendreListeTextesOrange();
  draw();
}

function rendreListeTextesOrange() {
  var liste = document.getElementById('listeTextesOrange');
  liste.innerHTML = '';
  
  textesOrange.forEach(function(t, index) {
    var div = document.createElement('div');
    div.className = 'texte-item';
    
    var isBold = t.bold ? 'B' : '';
    var content = document.createElement('div');
    content.className = 'texte-item-content';
    content.innerHTML = 
      '<div class="texte-item-text" title="' + t.texte + '">' + t.texte + '</div>' +
      '<div class="texte-item-info">' +
        '<span style="color: ' + t.couleur + ';">■</span>' +
        '<span>' + t.taille + 'px</span>' +
        (isBold ? '<span>B</span>' : '') +
      '</div>';
    
    var btnDelete = document.createElement('button');
    btnDelete.textContent = '✕';
    btnDelete.onclick = function() { supprimerTexteOrange(index); };
    
    div.appendChild(content);
    div.appendChild(btnDelete);
    liste.appendChild(div);
  });
}

function supprimerTexteOrange(index) {
  textesOrange.splice(index, 1);
  rendreListeTextesOrange();
  draw();
}

function effacerTousTextes() {
  textesOrange = [];
  rendreListeTextesOrange();
  draw();
}

// Gestion de la taille avec slider
document.getElementById('tailleOrange').addEventListener('input', function(e) {
  var taille = parseInt(e.target.value);
  document.getElementById('tailleValue').textContent = taille + ' px';
});

// Toggle Bold
document.getElementById('btnBold').addEventListener('click', function() {
  this.classList.toggle('active');
  
  if (this.classList.contains('active')) {
    this.style.background = '#1e1020';
    this.style.color = '#e97c1a';
    this.style.borderColor = '#3a2010';
  } else {
    this.style.background = '#111118';
    this.style.color = '#444';
    this.style.borderColor = '#1e1e2e';
  }
});

// Mettre à jour le texte avancé
function mettreAJourTexteAvance() {
  var texte = document.getElementById('texteAvance').value;
  var taille = parseInt(document.getElementById('texteSize').value);
  
  texteAvance.texte = texte;
  texteAvance.taille = taille;
  texteAvance.visible = texte.trim() !== '';
  
  draw();
}

// Colorer le texte sélectionné
function colorerTexteSelectionne() {
  var textarea = document.getElementById('texteAvance');
  var texteSelectionne = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
  
  if (!texteSelectionne.trim()) {
    alert('Veuillez sélectionner du texte à colorer');
    return;
  }
  
  var couleur = document.getElementById('couleurMotSelection').value;
  
  var existe = texteAvance.colorStyles.some(function(s) {
    return s.mot.toLowerCase() === texteSelectionne.toLowerCase();
  });
  
  if (existe) {
    texteAvance.colorStyles.forEach(function(s) {
      if (s.mot.toLowerCase() === texteSelectionne.toLowerCase()) {
        s.couleur = couleur;
      }
    });
  } else {
    texteAvance.colorStyles.push({
      mot: texteSelectionne,
      couleur: couleur
    });
  }
  
  rendreListeMots();
  draw();
}

function rendreListeMots() {
  var list = document.getElementById('listeMotsColores');
  list.innerHTML = '';
  
  texteAvance.colorStyles.forEach(function(style, index) {
    var div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.marginBottom = '5px';
    div.style.padding = '6px';
    div.style.borderRadius = '5px';
    div.style.border = '1px solid #222';
    div.style.background = '#0f0f1a';
    
    div.innerHTML = '<span style="flex:1; font-size:11px; color:#ccc;">' + style.mot + '</span>' +
                    '<div style="width:20px; height:20px; background:' + style.couleur + '; border-radius:3px; margin:0 8px;"></div>' +
                    '<button onclick="supprimerColoration(' + index + ')" style="background:none; border:none; color:#555; cursor:pointer; padding:2px 6px;">✕</button>';
    
    list.appendChild(div);
  });
}

function supprimerColoration(index) {
  texteAvance.colorStyles.splice(index, 1);
  rendreListeMots();
  draw();
}

function effacerTexteAvance() {
  texteAvance = {
    texte: '',
    taille: 36,
    visible: false,
    colorStyles: [],
    posX: 540,
    posY: 1600,
    alignment: 'left'
  };
  document.getElementById('texteAvance').value = '';
  document.getElementById('texteSize').value = '36';
  document.getElementById('btnAlignGauche').classList.add('active');
  document.getElementById('btnAlignCentre').classList.remove('active');
  document.getElementById('btnAlignDroite').classList.remove('active');
  rendreListeMots();
  draw();
}

function definirAlignement(align) {
  texteAvance.alignment = align;
  
  document.getElementById('btnAlignGauche').classList.toggle('active', align === 'left');
  document.getElementById('btnAlignCentre').classList.toggle('active', align === 'center');
  document.getElementById('btnAlignDroite').classList.toggle('active', align === 'right');
  
  // Mettre à jour les styles des boutons
  ['btnAlignGauche', 'btnAlignCentre', 'btnAlignDroite'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn.classList.contains('active')) {
      btn.style.background = '#1e1020';
      btn.style.color = '#e97c1a';
      btn.style.borderColor = '#3a2010';
    } else {
      btn.style.background = '#111118';
      btn.style.color = '#444';
      btn.style.borderColor = '#1e1e2e';
    }
  });
  
  draw();
}

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
  textesOrange = [];
  texteDragActif = null;
  
  texteAvance = {
    texte: '',
    taille: 36,
    visible: false,
    colorStyles: [],
    posX: 540,
    posY: 1600,
    alignment: 'left'
  };
  
  textAvanceDragActif = false;
  
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
  document.getElementById('texteAvance').value='';
  document.getElementById('texteSize').value='36';
  document.getElementById('couleurMotSelection').value='#ff0000';
  
  document.getElementById('texteOrange').value = '';
  document.getElementById('tailleOrange').value = '32';
  document.getElementById('couleurTexteOrange').value = '#ffffff';
  document.getElementById('tailleValue').textContent = '32 px';
  document.getElementById('btnBold').classList.remove('active');
  document.getElementById('btnBold').style.background = '#111118';
  document.getElementById('btnBold').style.color = '#444';
  document.getElementById('btnBold').style.borderColor = '#1e1e2e';
  
  document.getElementById('btnAlignGauche').classList.add('active');
  document.getElementById('btnAlignCentre').classList.remove('active');
  document.getElementById('btnAlignDroite').classList.remove('active');
  
  document.getElementById('btnAlignGauche').style.background = '#1e1020';
  document.getElementById('btnAlignGauche').style.color = '#e97c1a';
  document.getElementById('btnAlignGauche').style.borderColor = '#3a2010';
  
  document.getElementById('btnAlignCentre').style.background = '#111118';
  document.getElementById('btnAlignCentre').style.color = '#444';
  document.getElementById('btnAlignCentre').style.borderColor = '#1e1e2e';
  
  document.getElementById('btnAlignDroite').style.background = '#111118';
  document.getElementById('btnAlignDroite').style.color = '#444';
  document.getElementById('btnAlignDroite').style.borderColor = '#1e1e2e';
  
  selectColor('#e97c1a');
  renderList();
  rendreListeMots();
  rendreListeTextesOrange();
  draw();
}

// EVENT LISTENERS
document.getElementById('texteZone').addEventListener('input', ajouterTexte);
document.getElementById('texteAvance').addEventListener('input', mettreAJourTexteAvance);
document.getElementById('texteSize').addEventListener('change', mettreAJourTexteAvance);
document.getElementById('btnColorerSelection').addEventListener('click', colorerTexteSelectionne);
document.getElementById('btnEffacerTexteAvance').addEventListener('click', effacerTexteAvance);

document.getElementById('btnTracer').addEventListener('click', tracerRoute);
document.getElementById('btnClear').addEventListener('click', effacerTout);

document.getElementById('btnAjouterTexteOrange').addEventListener('click', ajouterTexteOrange);
document.getElementById('btnEffacerTousTextes').addEventListener('click', effacerTousTextes);

document.getElementById('btnAlignGauche').addEventListener('click', function() { definirAlignement('left'); });
document.getElementById('btnAlignCentre').addEventListener('click', function() { definirAlignement('center'); });
document.getElementById('btnAlignDroite').addEventListener('click', function() { definirAlignement('right'); });

// ╔═════════════════════════════════════════════════════════════╗
// ║ DRAG AND DROP 2D SUR LE CANVAS                             ║
// ╚═════════════════════════════════════════════════════════════╝

var composition = document.getElementById('composition');

composition.addEventListener('mousedown', function(e) {
  var rect = canvas.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  
  var scaleX = rect.width / NW;
  var scaleY = rect.height / NH;
  
  // Vérifier si on clique sur le texte avancé d'abord
  if (texteAvance.visible && texteAvance.texte) {
    var textScreenX = texteAvance.posX * scaleX;
    var textScreenY = texteAvance.posY * scaleY;
    
    if (Math.abs(mouseX - textScreenX) < 80 && Math.abs(mouseY - textScreenY) < 60) {
      textAvanceDragActif = true;
      dragOffsetAdvanceX = mouseX - textScreenX;
      dragOffsetAdvanceY = mouseY - textScreenY;
      draw();
      return;
    }
  }
  
  // Vérifier si on clique sur un texte orange
  if (textesOrange.length === 0) return;
  
  for (var i = 0; i < textesOrange.length; i++) {
    var t = textesOrange[i];
    var textScreenX = t.posX * scaleX;
    var textScreenY = t.posY * scaleY;
    
    // Zone de clic (40px autour du texte)
    if (Math.abs(mouseX - textScreenX) < 60 && Math.abs(mouseY - textScreenY) < 40) {
      texteDragActif = i;
      dragOffsetX = mouseX - textScreenX;
      dragOffsetY = mouseY - textScreenY;
      draw();
      return;
    }
  }
});

document.addEventListener('mousemove', function(e) {
  if (textAvanceDragActif) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
    var scaleX = rect.width / NW;
    var scaleY = rect.height / NH;
    
    // Calculer la nouvelle position
    texteAvance.posX = (mouseX - dragOffsetAdvanceX) / scaleX;
    texteAvance.posY = (mouseY - dragOffsetAdvanceY) / scaleY;
    
    // Limiter aux limites de la composition
    texteAvance.posX = Math.max(50, Math.min(NW - 50, texteAvance.posX));
    texteAvance.posY = Math.max(50, Math.min(NH - 50, texteAvance.posY));
    
    draw();
    return;
  }
  
  if (texteDragActif === null) return;
  
  var rect = canvas.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;
  var scaleX = rect.width / NW;
  var scaleY = rect.height / NH;
  
  var t = textesOrange[texteDragActif];
  
  // Calculer la nouvelle position
  var newPosX = (mouseX - dragOffsetX) / scaleX;
  var newPosY = (mouseY - dragOffsetY) / scaleY;
  
  // Limiter dans la zone orange
  var minX = ZONE_ORANGE.x + 30;
  var maxX = ZONE_ORANGE.x + ZONE_ORANGE.w - 30;
  var minY = ZONE_ORANGE.y + t.taille;
  var maxY = ZONE_ORANGE.y + ZONE_ORANGE.h - t.taille;
  
  t.posX = Math.max(minX, Math.min(maxX, newPosX));
  t.posY = Math.max(minY, Math.min(maxY, newPosY));
  
  draw();
});

document.addEventListener('mouseup', function() {
  if (textAvanceDragActif) {
    textAvanceDragActif = false;
    draw();
  }
  
  if (texteDragActif !== null) {
    texteDragActif = null;
    draw();
  }
});

draw();