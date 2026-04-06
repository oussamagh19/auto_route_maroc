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
    "606.258,1025.57 599.19,1031.26 595.502,1035.87 587.051,1040.94 578.601,1043.55 "+
    "574.452,1048 573.684,1051.08 563.543,1060.45 562.621,1062.91 562.467,1067.82 "+
    "559.241,1075.51 557.243,1080.58 556.322,1082.88 548.793,1089.95 547.717,1091.18 "+
    "547.256,1096.1 546.181,1099.63 542.647,1103.62",
 
  "eljadida-safi":
    "587.185,949.131 588.338,954.432 588.338,954.97 585.572,962.729 585.572,962.806 "+
    "584.804,964.112 582.192,965.264 579.733,965.264 571.667,972.101 562.985,987.236 "+
    "561.218,990.77 560.988,993.766 560.143,994.996",
 
  "oujda-taza":
    "817.642,873.923 829.703,874.461 832.546,873.002 847.143,865.55 858.82,857.483 "+
    "868.5,856.868 877.872,856.1 885.017,854.948 893.16,853.642",
 
  "taza-fes":
    "754.451,893.326 756.987,894.017 759.138,893.172 760.905,891.636 769.432,891.712 "+
    "772.198,891.098 777.652,888.409 789.867,878.806 792.172,877.807 796.782,878.191 "+
    "800.776,878.499 812.377,875.349",
 
  "fes-khemisset":
    "713.605,901.648 719.674,897.576 724.283,901.187 728.586,902.417 733.886,900.88 "+
    "734.578,900.112 741.645,897.653 750.327,892.967",
 
  "khemisset-rabat":
    "679.436,891.551 691.728,900.847 698.335,902.768 708.553,903.843",
 
  "fnideq-tetouan":
    "736.374,798.241 736.066,801.467 736.796,802.927 737.142,808.958 737.142,810.417",
 
  "tanger-assilah":
    "729.924,791.99 727.581,794.564 726.62,798.06 722.434,800.71 716.134,802.131 "+
    "711.025,802.208 710.295,803.898 709.335,807.855 708.797,814.731",
 
  "assilah-kenitra":
    "708.252,820.656 707.176,823.037 707.023,828.492 704.948,833.562 705.025,833.562 "+
    "701.184,842.397 700.953,843.319 700.569,849.618 697.266,853.46 691.811,865.982",
 
  "kenitra-rabat":
    "688.72,870.769 687.798,872.459 687.529,882.255 679.117,887.632",
 
  "rabat-casablanca":
    "676.324,892.301 671.407,905.515 671.253,905.745 669.333,907.128 659.73,908.127 "+
    "650.664,911.046 644.595,916.04 639.986,922.186 631.305,927.41",
 
  "casablanca-eljadida":
    "626.166,929.499 608.88,938.026 600.506,940.101 589.367,945.017",
 
  "casablanca-berrechid":
    "629.36,930.775 629.437,936.768 631.664,940.378 631.895,940.762",
 
  "berrechid-khouribga":
    "636.072,944.391 650.592,952.304 656.892,960.064 666.572,961.6",
 
  "khouribga-benimellal":
    "671.397,961.383 676.093,961.668 676.235,961.668 676.946,961.668 681.357,965.225 "+
    "681.5,967.075 681.5,969.067 681.5,969.636 681.642,970.917 681.784,971.059 "+
    "683.634,972.482 690.322,985.715 691.033,992.972",
 
  "berrechid-marrakech":
    "632.703,945.193 631.013,951.186 631.167,954.873 631.167,956.103 630.706,958.1 "+
    "629.169,960.866 626.865,963.478 625.636,965.782 624.406,968.395 622.563,971.314 "+
    "622.716,975.001 620.565,978.689 614.88,984.989 612.729,999.278 611.807,1008.65 "+
    "609.81,1021.56"
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

var textOrangeEditionActif = null; // Index du texte en édition

var texteAvance = {
  texte: '',
  taille: 36,
  visible: false,
  colorStyles: [],
  posX: 540,  // Position personnalisée X (centre par défaut)
  posY: 1600,  // Position personnalisée Y (bas par défaut)
  alignment: 'left',  // left, center, right
  police: 'Segoe UI'  // Police par défaut
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
    var police = texte.police || 'Segoe UI';
    
    // Détecter si le texte est en arabe
    var isArabic = /[\u0600-\u06FF]/.test(texte.texte);
    
    // Utiliser une meilleure police pour l'arabe
    if (isArabic) {
      police = 'Arial, "Traditional Arabic", "Simplified Arabic", "Segoe UI", sans-serif';
    }
    
    c.save();
    
    c.font = fontWeight + texte.taille + 'px ' + police;
    c.fillStyle = texte.couleur;
    c.direction = isArabic ? 'rtl' : 'ltr';
    
    // Inverser l'alignement pour l'arabe
    if (isArabic) {
      c.textAlign = 'right';
    } else {
      c.textAlign = 'center';
    }
    
    c.textBaseline = 'middle';
    
    c.shadowColor = 'rgba(0, 0, 0, 0.5)';
    c.shadowBlur = 6;
    c.shadowOffsetX = isArabic ? -1 : 1;
    c.shadowOffsetY = 1;
    
    var maxWidth = ZONE_ORANGE.w - 40;
    var lineHeight = texte.taille * 1.5; // Augmenter l'espacement pour l'arabe
    
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
    // Pour l'arabe, inverser l'ordre des lignes
    if (isArabic) lines = lines.reverse();
    
    var startY = texte.posY - (lines.length - 1) * lineHeight / 2;
    
    lines.forEach(function(line, lineIndex) {
      var lineY = startY + lineIndex * lineHeight;
      var displayText = isArabic ? line : line;
      
      // Ajuster la position X pour l'arabe
      var posX = texte.posX;
      if (isArabic) {
        posX = ZONE_ORANGE.x + ZONE_ORANGE.w - 30; // Aligner à droite
      }
      
      c.fillText(displayText, posX, lineY);
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

// Détecter si le texte contient de l'arabe
function isArabicText(text) {
  var arabicRegex = /[\u0600-\u06FF]/g;
  return arabicRegex.test(text);
}

function drawAdvancedTextWithColors(c, texte, posX, posY, taille, colorStyles, alignment, police) {
  if (!texte) return;
  
  police = police || 'Segoe UI';
  var isArabic = isArabicText(texte);
  
  // Choisir la meilleure police pour l'arabe
  if (isArabic) {
    police = 'Arial, "Segoe UI", "Traditional Arabic", "Simplified Arabic", sans-serif';
  }
  
  c.save();
  c.font = 'bold ' + taille + 'px ' + police;
  
  // Appliquer la direction RTL pour l'arabe
  if (isArabic) {
    c.direction = 'rtl';
    // Inverser l'alignement pour l'arabe
    if (alignment === 'left') c.textAlign = 'right';
    else if (alignment === 'right') c.textAlign = 'left';
    else c.textAlign = alignment || 'center';
  } else {
    c.direction = 'ltr';
    c.textAlign = alignment || 'left';
  }
  
  c.textBaseline = 'top';
  
  c.shadowColor = 'rgba(0, 0, 0, 0.8)';
  c.shadowBlur = 8;
  c.shadowOffsetX = 2;
  c.shadowOffsetY = 2;
  
  var lineHeight = taille * 1.5;
  var maxWidth = 400;
  var currentY = posY;
  
  var words = texte.split(' ');
  var lineWords = [];
  
  // Ajuster posX selon l'alignement pour le calcul
  var drawX = posX;
  if (alignment === 'center') {
    drawX = posX;
  } else if (isArabic && alignment === 'left') {
    drawX = posX; // RTL: gauche en arabe = droite en affichage
  }
  
  words.forEach(function(word) {
    var testLine = lineWords.length > 0 ? lineWords.join(' ') + ' ' + word : word;
    var metrics = c.measureText(testLine);
    
    if (metrics.width > maxWidth && lineWords.length > 0) {
      drawLineWithColors(c, lineWords, drawX, currentY, taille, colorStyles, alignment, isArabic);
      currentY += lineHeight;
      lineWords = [word];
    } else {
      lineWords.push(word);
    }
  });
  
  if (lineWords.length > 0) {
    drawLineWithColors(c, lineWords, drawX, currentY, taille, colorStyles, alignment, isArabic);
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

function drawLineWithColors(c, words, x, y, taille, colorStyles, alignment, isArabic) {
  var currentX = x;
  var line = words.join(' ');
  var lineWidth = c.measureText(line).width;
  
  // Ajuster le point de départ selon l'alignement
  if (alignment === 'center') {
    currentX = x - lineWidth / 2;
  } else if (alignment === 'right') {
    currentX = x - lineWidth;
  } else if (isArabic && alignment === 'left') {
    currentX = x - lineWidth; // RTL: aligner à droite visuellement
  }
  
  // Pour l'arabe, inverser l'ordre des mots pour l'affichage RTL
  var displayWords = isArabic ? words.reverse() : words;
  
  displayWords.forEach(function(word) {
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

  // Afficher le texte avancé avec position libre et police
  if (texteAvance.visible && texteAvance.texte) {
    drawAdvancedTextWithColors(ctx, texteAvance.texte, texteAvance.posX, texteAvance.posY, texteAvance.taille, texteAvance.colorStyles, texteAvance.alignment, texteAvance.police);
  }

  if (texteGlobal) {
    ctx.save();
    ctx.fillStyle='#ffffff';
    
    // Détecter si le texte est en arabe
    var isArabicText = /[\u0600-\u06FF]/.test(texteGlobal);
    var police = 'Arial, "Segoe UI", "Traditional Arabic", sans-serif';
    
    ctx.font='bold 36px ' + police;
    ctx.textAlign = isArabicText ? 'right' : 'center';
    ctx.direction = isArabicText ? 'rtl' : 'ltr';
    ctx.shadowColor='rgba(0,0,0,0.8)';
    ctx.shadowBlur=8;
    ctx.shadowOffsetX = isArabicText ? -2 : 2;
    ctx.shadowOffsetY=2;
    
    var x = isArabicText ? NW - 50 : NW/2; // Aligner à droite pour l'arabe
    var y = NH - 130;
    var mots = texteGlobal.split(' '), ligne='';
    
    mots.forEach(function(m){
      var t = ligne ? ligne + ' ' + m : m;
      if(t.length > 28){
        ctx.fillText(ligne, x, y);
        y += 46;
        ligne = m;
      } else {
        ligne = t;
      }
    });
    if(ligne) ctx.fillText(ligne, x, y);
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
// ║ GESTION DES TEXTES ORANGE (MULTIPLES) - ÉDITION DYNAMIQUE  ║
// ╚═════════════════════════════════════════════════════════════╝

function ajouterTexteOrange() {
  var texte = document.getElementById('texteOrange').value;
  
  if (!texte.trim()) {
    alert('Veuillez entrer un texte');
    return;
  }
  
  if (textOrangeEditionActif !== null) {
    // Mode édition : mettre à jour le texte existant
    mettreAJourTexteOrangeEdition();
    deselectionnerTexteOrange();
  } else {
    // Mode ajout : créer un nouveau texte
    var nouveauTexte = {
      id: Date.now(),
      texte: texte,
      taille: parseInt(document.getElementById('tailleOrange').value),
      bold: document.getElementById('btnBold').classList.contains('active'),
      couleur: document.getElementById('couleurTexteOrange').value,
      police: document.getElementById('policeOrange').value,
      posX: ZONE_ORANGE.x + ZONE_ORANGE.w / 2,
      posY: ZONE_ORANGE.y + ZONE_ORANGE.h / 2
    };
    
    textesOrange.push(nouveauTexte);
    document.getElementById('texteOrange').value = '';
  }
  
  rendreListeTextesOrange();
  draw();
}

function rendreListeTextesOrange() {
  var liste = document.getElementById('listeTextesOrange');
  liste.innerHTML = '';
  
  textesOrange.forEach(function(t, index) {
    var div = document.createElement('div');
    div.className = 'texte-item';
    
    if (textOrangeEditionActif === index) {
      div.style.background = '#1e1020';
      div.style.borderColor = '#e97c1a';
    }
    
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
    
    // Rendre cliquable pour éditer
    content.style.cursor = 'pointer';
    content.onclick = function(e) {
      e.stopPropagation();
      selectionnerTexteOrange(index);
    };
    
    var btnDelete = document.createElement('button');
    btnDelete.textContent = '✕';
    btnDelete.onclick = function(e) {
      e.stopPropagation();
      supprimerTexteOrange(index);
    };
    
    div.appendChild(content);
    div.appendChild(btnDelete);
    liste.appendChild(div);
  });
}

function selectionnerTexteOrange(index) {
  textOrangeEditionActif = index;
  var t = textesOrange[index];
  
  // Mettre à jour les contrôles avec les valeurs du texte sélectionné
  document.getElementById('texteOrange').value = t.texte;
  document.getElementById('tailleOrange').value = t.taille;
  document.getElementById('tailleValue').textContent = t.taille + ' px';
  document.getElementById('couleurTexteOrange').value = t.couleur;
  document.getElementById('policeOrange').value = t.police;
  
  if (t.bold) {
    document.getElementById('btnBold').classList.add('active');
    document.getElementById('btnBold').style.background = '#1e1020';
    document.getElementById('btnBold').style.color = '#e97c1a';
    document.getElementById('btnBold').style.borderColor = '#3a2010';
  } else {
    document.getElementById('btnBold').classList.remove('active');
    document.getElementById('btnBold').style.background = '#111118';
    document.getElementById('btnBold').style.color = '#444';
  }
  
  // Mettre à jour le bouton
  document.getElementById('btnAjouterTexteOrange').textContent = '✎ Mettre à jour';
  
  rendreListeTextesOrange();
  draw();
}

function mettreAJourTexteOrangeEdition() {
  if (textOrangeEditionActif === null) return;
  
  var t = textesOrange[textOrangeEditionActif];
  t.texte = document.getElementById('texteOrange').value;
  t.taille = parseInt(document.getElementById('tailleOrange').value);
  t.couleur = document.getElementById('couleurTexteOrange').value;
  t.police = document.getElementById('policeOrange').value;
  t.bold = document.getElementById('btnBold').classList.contains('active');
  
  rendreListeTextesOrange();
  draw();
}

function deselectionnerTexteOrange() {
  textOrangeEditionActif = null;
  document.getElementById('texteOrange').value = '';
  document.getElementById('btnAjouterTexteOrange').textContent = '➕ Ajouter texte';
  document.getElementById('tailleValue').textContent = '32 px';
  document.getElementById('tailleOrange').value = '32';
  document.getElementById('btnBold').classList.remove('active');
  document.getElementById('btnBold').style.background = '#111118';
  document.getElementById('btnBold').style.color = '#444';
  rendreListeTextesOrange();
  draw();
}

function supprimerTexteOrange(index) {
  textesOrange.splice(index, 1);
  if (textOrangeEditionActif === index) {
    deselectionnerTexteOrange();
  } else {
    rendreListeTextesOrange();
  }
  draw();
}

function effacerTousTextes() {
  textesOrange = [];
  deselectionnerTexteOrange();
  rendreListeTextesOrange();
  draw();
}

// Gestion de la taille avec slider - MÀJ DYNAMIQUE
document.getElementById('tailleOrange').addEventListener('input', function(e) {
  var taille = parseInt(e.target.value);
  document.getElementById('tailleValue').textContent = taille + ' px';
  
  // Mettre à jour dynamiquement si on édite
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
  }
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
  
  // Mettre à jour dynamiquement si on édite
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
  }
});

// Écouteurs pour les changes de couleur et police
document.getElementById('couleurTexteOrange').addEventListener('change', function() {
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
  }
});

document.getElementById('policeOrange').addEventListener('change', function() {
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
  }
});

document.getElementById('texteOrange').addEventListener('input', function() {
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
  }
});

// Mettre à jour le texte avancé
function mettreAJourTexteAvance() {
  var texte = document.getElementById('texteAvance').value;
  var taille = parseInt(document.getElementById('texteSize').value);
  var police = document.getElementById('policeTexteAvance').value;
  
  texteAvance.texte = texte;
  texteAvance.taille = taille;
  texteAvance.police = police;
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
    alignment: 'left',
    police: 'Segoe UI'
  };
  document.getElementById('texteAvance').value = '';
  document.getElementById('texteSize').value = '36';
  document.getElementById('policeTexteAvance').value = 'Segoe UI';
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
  textOrangeEditionActif = null;
  
  texteAvance = {
    texte: '',
    taille: 36,
    visible: false,
    colorStyles: [],
    posX: 540,
    posY: 1600,
    alignment: 'left',
    police: 'Segoe UI'
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
  document.getElementById('policeTexteAvance').value='Segoe UI';
  document.getElementById('couleurMotSelection').value='#ff0000';
  
  document.getElementById('texteOrange').value = '';
  document.getElementById('tailleOrange').value = '32';
  document.getElementById('couleurTexteOrange').value = '#ffffff';
  document.getElementById('policeOrange').value = 'Segoe UI';
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
  
  document.getElementById('btnAjouterTexteOrange').textContent = '➕ Ajouter texte';
  
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
document.getElementById('policeTexteAvance').addEventListener('change', mettreAJourTexteAvance);
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