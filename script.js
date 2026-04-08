/* ============================================================
   COMPOSITEUR ADM — script.js
   ============================================================
   Sections :
     1.  Constantes & Config
     2.  État (state)
     3.  Utilitaires
     4.  Dessin Canvas
     5.  SVG — Routes
     6.  Images — Slots
     7.  Texte Zone Orange
     8.  Texte Avancé — Fonctions Génériques
     9.  Texte Avancé 1
    10.  Texte Avancé 2
    11.  Drag & Drop
    12.  Vecteezy — Taille
    13.  Téléchargement & Reset
    14.  Event Listeners
    15.  Initialisation
   ============================================================ */


/* ============================================================
   1. CONSTANTES & CONFIG
   ============================================================ */

var NW = 1080, NH = 1920;

var ZONES = [
  { label: 'Avis Important', x: 261.30, y: 214.06, w: 547.54, h: 107.00, color: '#e97c1a' },
  { label: 'Forme orange',   x: 238.31, y: 354.25, w: 607.22, h: 365.68, color: '#4fa3ff' },
  { label: 'Vecteezy',       x: 584.10, y: 522.55, w: 234.50, h: 126.76, color: '#a8e060' },
  { label: 'Carte / Map',    x: 0,      y: 0,      w: 1080,   h: 1920,   color: '#e060c0' }
];

var ZONE_ORANGE = ZONES[1];

var VECTEEZY_POSITIONS = [
  { label: '📍 Position 1', x: 284.96, y: 508.25, w: 215.18, h: 145.04 },
  { label: '📍 Position 2', x: 592.74, y: 520.13, w: 217.57, h: 132.75 }
];

var VILLES = [
  { nom: 'Tanger',      id: 'tanger'     },
  { nom: 'Assilah',     id: 'assilah'    },
  { nom: 'Fnideq',      id: 'fnideq'     },
  { nom: 'Tetouan',     id: 'tetouan'    },
  { nom: 'Kenitra',     id: 'kenitra'    },
  { nom: 'Rabat',       id: 'rabat'      },
  { nom: 'Casablanca',  id: 'casablanca' },
  { nom: 'El Jadida',   id: 'eljadida'   },
  { nom: 'Safi',        id: 'safi'       },
  { nom: 'Marrakech',   id: 'marrakech'  },
  { nom: 'Agadir',      id: 'agadir'     },
  { nom: 'Berrechid',   id: 'berrechid'  },
  { nom: 'Khouribga',   id: 'khouribga'  },
  { nom: 'Beni Mellal', id: 'benimellal' },
  { nom: 'Khemisset',   id: 'khemisset'  },
  { nom: 'Fes',         id: 'fes'        },
  { nom: 'Taza',        id: 'taza'       },
  { nom: 'Oujda',       id: 'oujda'      }
];

var ROUTES = {
  'agadir-marrakech':
    '606.258,1025.57 599.19,1031.26 595.502,1035.87 587.051,1040.94 578.601,1043.55 ' +
    '574.452,1048 573.684,1051.08 563.543,1060.45 562.621,1062.91 562.467,1067.82 ' +
    '559.241,1075.51 557.243,1080.58 556.322,1082.88 548.793,1089.95 547.717,1091.18 ' +
    '547.256,1096.1 546.181,1099.63 542.647,1103.62',
  'eljadida-safi':
    '587.185,949.131 588.338,954.432 588.338,954.97 585.572,962.729 585.572,962.806 ' +
    '584.804,964.112 582.192,965.264 579.733,965.264 571.667,972.101 562.985,987.236 ' +
    '561.218,990.77 560.988,993.766 560.143,994.996',
  'oujda-taza':
    '817.642,873.923 829.703,874.461 832.546,873.002 847.143,865.55 858.82,857.483 ' +
    '868.5,856.868 877.872,856.1 885.017,854.948 893.16,853.642',
  'taza-fes':
    '754.451,893.326 756.987,894.017 759.138,893.172 760.905,891.636 769.432,891.712 ' +
    '772.198,891.098 777.652,888.409 789.867,878.806 792.172,877.807 796.782,878.191 ' +
    '800.776,878.499 812.377,875.349',
  'fes-khemisset':
    '713.605,901.648 719.674,897.576 724.283,901.187 728.586,902.417 733.886,900.88 ' +
    '734.578,900.112 741.645,897.653 750.327,892.967',
  'khemisset-rabat':
    '679.436,891.551 691.728,900.847 698.335,902.768 708.553,903.843',
  'fnideq-tetouan':
    '736.374,798.241 736.066,801.467 736.796,802.927 737.142,808.958 737.142,810.417',
  'tanger-assilah':
    '729.924,791.99 727.581,794.564 726.62,798.06 722.434,800.71 716.134,802.131 ' +
    '711.025,802.208 710.295,803.898 709.335,807.855 708.797,814.731',
  'assilah-kenitra':
    '708.252,820.656 707.176,823.037 707.023,828.492 704.948,833.562 705.025,833.562 ' +
    '701.184,842.397 700.953,843.319 700.569,849.618 697.266,853.46 691.811,865.982',
  'kenitra-rabat':
    '688.72,870.769 687.798,872.459 687.529,882.255 679.117,887.632',
  'rabat-casablanca':
    '676.324,892.301 671.407,905.515 671.253,905.745 669.333,907.128 659.73,908.127 ' +
    '650.664,911.046 644.595,916.04 639.986,922.186 631.305,927.41',
  'casablanca-eljadida':
    '626.166,929.499 608.88,938.026 600.506,940.101 589.367,945.017',
  'casablanca-berrechid':
    '629.36,930.775 629.437,936.768 631.664,940.378 631.895,940.762',
  'berrechid-khouribga':
    '636.072,944.391 650.592,952.304 656.892,960.064 666.572,961.6',
  'khouribga-benimellal':
    '671.397,961.383 676.093,961.668 676.235,961.668 676.946,961.668 681.357,965.225 ' +
    '681.5,967.075 681.5,969.067 681.5,969.636 681.642,970.917 681.784,971.059 ' +
    '683.634,972.482 690.322,985.715 691.033,992.972',
  'berrechid-marrakech':
    '632.703,945.193 631.013,951.186 631.167,954.873 631.167,956.103 630.706,958.1 ' +
    '629.169,960.866 626.865,963.478 625.636,965.782 624.406,968.395 622.563,971.314 ' +
    '622.716,975.001 620.565,978.689 614.88,984.989 612.729,999.278 611.807,1008.65 ' +
    '609.81,1021.56'
};


/* ============================================================
   2. ÉTAT (state)
   ============================================================ */

var bgImg  = null;
var images = [null, null, null, null];
var fits   = ['cover', 'cover', 'cover', 'contain'];

var tracedRoutes          = [];
var couleurSelectionnee   = '#e97c1a';
var vecteezyPositionActive = 0;

var vecteezyZone = {
  x: VECTEEZY_POSITIONS[0].x,
  y: VECTEEZY_POSITIONS[0].y,
  w: VECTEEZY_POSITIONS[0].w,
  h: VECTEEZY_POSITIONS[0].h
};

/* Textes zone orange */
var textesOrange           = [];
var texteDragActif         = null;
var dragOffsetX            = 0, dragOffsetY = 0;
var textOrangeEditionActif = null;
var _blockerMiseAJour      = false;

/* Texte avancé 1 — lineHeight: 0.8 */
var texteAvance = {
  texte: '', taille: 36, visible: false, colorStyles: [],
  posX: 540, posY: 1600, alignment: 'left', police: 'Poppins-Bold',
  lineHeight: 0.8
};
var textAvanceDragActif = false;
var dragOffsetAdvanceX  = 0, dragOffsetAdvanceY = 0;

/* Texte avancé 2 — lineHeight: 1.5 (défaut) */
var texteAvance2 = {
  texte: '', taille: 36, visible: false, colorStyles: [],
  posX: 540, posY: 1750, alignment: 'left', police: 'Poppins-Bold'
};
var textAvance2DragActif = false;
var dragOffsetAdvance2X  = 0, dragOffsetAdvance2Y = 0;

var isDragging = false;


/* ============================================================
   3. UTILITAIRES
   ============================================================ */

function isArabicText(text) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

function getFontString(police) {
  var map = {
    'GE-SS-Two-Bold': '"GE-SS-Two-Bold"',
    'Poppins-Bold':   '"Poppins-Bold"',
    'Poppins-Black':  '"Poppins-Black"',
    'OpenSans-Bold':  '"OpenSans-Bold"'
  };
  return map[police] || '"Poppins-Bold"';
}

function autoPolice(texte, fallback) {
  return isArabicText(texte) ? '"GE-SS-Two-Bold"' : getFontString(fallback);
}

function drawFit(c, img, dx, dy, dw, dh, mode) {
  var iw = img.naturalWidth, ih = img.naturalHeight;
  if (mode === 'fill') { c.drawImage(img, dx, dy, dw, dh); return; }
  var sc = mode === 'cover'
    ? Math.max(dw / iw, dh / ih)
    : Math.min(dw / iw, dh / ih);
  var fw = iw * sc, fh = ih * sc;
  var ox = dx + (dw - fw) / 2, oy = dy + (dh - fh) / 2;
  if (mode === 'cover') {
    c.save();
    c.beginPath(); c.rect(dx, dy, dw, dh); c.clip();
    c.drawImage(img, ox, oy, fw, fh);
    c.restore();
  } else {
    c.drawImage(img, ox, oy, fw, fh);
  }
}

function syncVecteezyInputs() {
  var wIn = document.getElementById('vecteezyW');
  var hIn = document.getElementById('vecteezyH');
  if (wIn) {
    wIn.value = Math.round(vecteezyZone.w);
    document.getElementById('vecteezyWVal').textContent = Math.round(vecteezyZone.w) + 'px';
  }
  if (hIn) {
    hIn.value = Math.round(vecteezyZone.h);
    document.getElementById('vecteezyHVal').textContent = Math.round(vecteezyZone.h) + 'px';
  }
}


/* ============================================================
   4. DESSIN CANVAS
   ============================================================ */

var canvas = document.getElementById('bgCanvas');
var ctx    = canvas.getContext('2d');
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = 'high';

function drawCanvas() {
  ctx.clearRect(0, 0, NW, NH);
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, NW, NH);

  if (bgImg) ctx.drawImage(bgImg, 0, 0, NW, NH);

  /* Calques fixes : carte → forme → avis */
  [3, 1, 0].forEach(function(i) {
    var z = ZONES[i];
    if (images[i]) drawFit(ctx, images[i], z.x, z.y, z.w, z.h, fits[i]);
    else            drawZonePlaceholder(ctx, z);
  });

  /* Vecteezy (position dynamique) */
  if (images[2]) drawFit(ctx, images[2], vecteezyZone.x, vecteezyZone.y, vecteezyZone.w, vecteezyZone.h, fits[2]);
  else           drawZonePlaceholder(ctx, { x: vecteezyZone.x, y: vecteezyZone.y, w: vecteezyZone.w, h: vecteezyZone.h, color: ZONES[2].color, label: 'Vecteezy' });

  drawTextesOrange(ctx);
  drawTexteAvance(ctx);
  drawTexteAvance2(ctx);
}

function drawZonePlaceholder(c, z) {
  c.save();
  c.globalAlpha = 0.07; c.fillStyle = z.color; c.fillRect(z.x, z.y, z.w, z.h);
  c.globalAlpha = 0.5;  c.strokeStyle = z.color; c.lineWidth = 3;
  c.setLineDash([12, 8]); c.strokeRect(z.x + 1, z.y + 1, z.w - 2, z.h - 2); c.setLineDash([]);
  c.fillStyle = z.color; c.globalAlpha = 1;
  var fs = Math.max(20, Math.min(28, z.h * 0.22));
  c.font = '600 ' + fs + 'px sans-serif';
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(z.label, z.x + z.w / 2, z.y + z.h / 2);
  c.restore();
}

function draw() {
  drawCanvas();
  updateSVG();
}


/* ============================================================
   5. SVG — ROUTES
   ============================================================ */

var svg    = document.getElementById('routesSVG');
var SVG_NS = 'http://www.w3.org/2000/svg';

function updateSVG() {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  tracedRoutes.forEach(function(r) {
    var color = r.color || '#e97c1a';

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
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', '3.5');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(line);
  });
}

function selectColor(color) {
  couleurSelectionnee = color;
  document.getElementById('btnOrange').classList.toggle('active', color === '#e97c1a');
  document.getElementById('btnRouge').classList.toggle('active',  color === '#ff0000');
}

function tracerRoute() {
  var dEl = document.getElementById('villeDepart');
  var aEl = document.getElementById('villeArrivee');
  var d = dEl.value, a = aEl.value;
  if (!d || !a)  { alert('Sélectionnez départ et arrivée'); return; }
  if (d === a)   { alert('Départ = Arrivée'); return; }
  var key = d + '-' + a, keyR = a + '-' + d;
  var pts = ROUTES[key] || ROUTES[keyR];
  if (!pts) { alert('Route non disponible : ' + d + ' ↔️ ' + a); return; }
  if (tracedRoutes.some(function(r) { return r.key === key || r.key === keyR; })) {
    alert('Route déjà tracée'); return;
  }
  tracedRoutes.push({
    key:       key,
    label:     dEl.options[dEl.selectedIndex].text + ' → ' + aEl.options[aEl.selectedIndex].text,
    pointsStr: pts,
    color:     couleurSelectionnee
  });
  renderRouteList();
  updateSVG();
}

function effacerTout()     { tracedRoutes = []; renderRouteList(); updateSVG(); }
function supprimerRoute(i) { tracedRoutes.splice(i, 1); renderRouteList(); updateSVG(); }

function renderRouteList() {
  var list = document.getElementById('rlist');
  list.innerHTML = '';
  tracedRoutes.forEach(function(r, i) {
    var emoji = r.color === '#e97c1a' ? '🟠' : '🔴';
    var div = document.createElement('div');
    div.className = 'rtag';
    div.innerHTML = '<span>' + emoji + ' ' + r.label + '</span><button onclick="supprimerRoute(' + i + ')">✕</button>';
    list.appendChild(div);
  });
}

/* Init selects villes */
(function initVilleSelects() {
  var d = document.getElementById('villeDepart');
  var a = document.getElementById('villeArrivee');
  VILLES.forEach(function(v) {
    var o1 = document.createElement('option'); o1.value = v.id; o1.textContent = v.nom; d.appendChild(o1);
    var o2 = document.createElement('option'); o2.value = v.id; o2.textContent = v.nom; a.appendChild(o2);
  });
})();


/* ============================================================
   6. IMAGES — SLOTS
   ============================================================ */

document.getElementById('bgInput').addEventListener('change', function(e) {
  var f = e.target.files[0]; if (!f) return;
  var img = new Image();
  img.onload = function() { bgImg = img; draw(); };
  img.src = URL.createObjectURL(f);
  this.value = '';
});

var bgDrop = document.getElementById('bgDrop');
bgDrop.addEventListener('dragover',  function(e) { e.preventDefault(); bgDrop.classList.add('over'); });
bgDrop.addEventListener('dragleave', function()  { bgDrop.classList.remove('over'); });
bgDrop.addEventListener('drop', function(e) {
  e.preventDefault(); bgDrop.classList.remove('over');
  var f = e.dataTransfer.files[0]; if (!f || !f.type.startsWith('image/')) return;
  var dt = new DataTransfer(); dt.items.add(f);
  var el = document.getElementById('bgInput'); el.files = dt.files; el.dispatchEvent(new Event('change'));
});

var activeSlot = -1;
function triggerSlot(i) { activeSlot = i; document.getElementById('slotInput').click(); }

document.getElementById('slotInput').addEventListener('change', function(e) {
  if (activeSlot < 0) return;
  var i = activeSlot, f = e.target.files[0]; if (!f) return;
  var img = new Image(), url = URL.createObjectURL(f);
  img.onload = function() {
    images[i] = img;
    var th = document.getElementById('thumb-' + i);
    th.src = url; th.style.display = 'block'; th.nextElementSibling.style.display = 'none';
    document.getElementById('card-' + i).classList.add('filled');
    document.querySelector('#card-' + i + ' .slot-btn').textContent = '↺ Changer';
    draw();
  };
  img.src = url; this.value = '';
});

function setFit(i, mode) {
  fits[i] = mode;
  ['cover', 'contain', 'fill'].forEach(function(m) {
    var b = document.getElementById('fit-' + i + '-' + m);
    if (b) b.classList.toggle('active', m === mode);
  });
  draw();
}


/* ============================================================
   7. TEXTE ZONE ORANGE
   ============================================================ */

function wrapText(c, texte, maxW) {
  var finalLines = [];
  texte.split('\n').forEach(function(paragraph) {
    if (paragraph.trim() === '') { finalLines.push(''); return; }
    var words = paragraph.split(' '), current = '';
    words.forEach(function(w) {
      var test = current ? current + ' ' + w : w;
      if (c.measureText(test).width > maxW && current) { finalLines.push(current); current = w; }
      else current = test;
    });
    if (current) finalLines.push(current);
  });
  return finalLines;
}

function drawTextesOrange(c) {
  if (!textesOrange.length) return;
  textesOrange.forEach(function(t, index) {
    var arabic = isArabicText(t.texte);
    if (arabic) t.police = 'GE-SS-Two-Bold';
    c.save();
    c.font         = t.taille + 'px ' + getFontString(t.police);
    c.fillStyle    = t.couleur;
    c.direction    = arabic ? 'rtl' : 'ltr';
    c.textAlign    = arabic ? 'right' : 'center';
    c.textBaseline = 'middle';
    c.shadowColor  = 'transparent'; c.shadowBlur = 0; c.shadowOffsetX = 0; c.shadowOffsetY = 0;
    var maxW = ZONE_ORANGE.w - 40, lh = t.taille * 1.5;
    var lines = wrapText(c, t.texte, maxW);
    if (arabic) lines = lines.reverse();
    var startY = t.posY - (lines.length - 1) * lh / 2;
    lines.forEach(function(line, li) { c.fillText(line, t.posX, startY + li * lh); });
    if (texteDragActif === index) {
      c.strokeStyle = '#00ff00'; c.lineWidth = 2; c.setLineDash([5, 5]);
      var rx = arabic ? t.posX - maxW - 10 : t.posX - maxW / 2 - 10;
      c.strokeRect(rx, t.posY - t.taille, maxW + 20, t.taille * 2.5);
      c.setLineDash([]);
    }
    c.restore();
  });
}

function ajouterTexteOrange() {
  var texte = document.getElementById('texteOrange').value;
  if (!texte.trim()) { alert('Veuillez entrer un texte'); return; }
  if (textOrangeEditionActif !== null) {
    mettreAJourTexteOrangeEdition();
    deselectionnerTexteOrange();
  } else {
    var police = document.getElementById('policeOrange').value;
    if (isArabicText(texte)) { police = 'GE-SS-Two-Bold'; document.getElementById('policeOrange').value = police; }
    textesOrange.push({
      id:      Date.now(),
      texte:   texte,
      taille:  parseInt(document.getElementById('tailleOrange').value),
      couleur: document.getElementById('couleurTexteOrange').value,
      police:  police,
      posX:    ZONE_ORANGE.x + ZONE_ORANGE.w / 2,
      posY:    ZONE_ORANGE.y + ZONE_ORANGE.h / 2
    });
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
    var content = document.createElement('div');
    content.className = 'texte-item-content';
    content.innerHTML =
      '<div class="texte-item-text" title="' + t.texte + '">' + t.texte + '</div>' +
      '<div class="texte-item-info"><span style="color:' + t.couleur + '">■</span><span>' + t.taille + 'px</span></div>';
    content.style.cursor = 'pointer';
    content.onclick = function(e) { e.stopPropagation(); selectionnerTexteOrange(index); };
    var btnDel = document.createElement('button');
    btnDel.textContent = '✕';
    btnDel.onclick = function(e) { e.stopPropagation(); supprimerTexteOrange(index); };
    div.appendChild(content);
    div.appendChild(btnDel);
    liste.appendChild(div);
  });
}

function selectionnerTexteOrange(index) {
  _blockerMiseAJour = true;
  textOrangeEditionActif = index;
  var t = textesOrange[index];
  document.getElementById('texteOrange').value        = t.texte;
  document.getElementById('tailleOrange').value       = t.taille;
  document.getElementById('tailleValue').textContent  = t.taille + ' px';
  document.getElementById('couleurTexteOrange').value = t.couleur;
  document.getElementById('policeOrange').value       = isArabicText(t.texte) ? 'GE-SS-Two-Bold' : t.police;
  document.getElementById('btnAjouterTexteOrange').textContent = '✎ Mettre à jour';
  _blockerMiseAJour = false;
  rendreListeTextesOrange();
  draw();
}

function mettreAJourTexteOrangeEdition() {
  if (textOrangeEditionActif === null || _blockerMiseAJour) return;
  var t = textesOrange[textOrangeEditionActif];
  var texte = document.getElementById('texteOrange').value;
  t.texte   = texte;
  t.taille  = parseInt(document.getElementById('tailleOrange').value);
  t.couleur = document.getElementById('couleurTexteOrange').value;
  t.police  = isArabicText(texte) ? 'GE-SS-Two-Bold' : document.getElementById('policeOrange').value;
  if (isArabicText(texte)) document.getElementById('policeOrange').value = 'GE-SS-Two-Bold';
  rendreListeTextesOrange();
  draw();
}

function deselectionnerTexteOrange() {
  textOrangeEditionActif = null;
  document.getElementById('texteOrange').value = '';
  document.getElementById('btnAjouterTexteOrange').textContent = '➕ Ajouter texte';
  document.getElementById('tailleValue').textContent = '32 px';
  document.getElementById('tailleOrange').value = '32';
  rendreListeTextesOrange();
  draw();
}

function supprimerTexteOrange(index) {
  textesOrange.splice(index, 1);
  if (textOrangeEditionActif === index) deselectionnerTexteOrange();
  else rendreListeTextesOrange();
  draw();
}

function effacerTousTextes() {
  textesOrange = [];
  deselectionnerTexteOrange();
  rendreListeTextesOrange();
  draw();
}

/* Listeners zone orange */
document.getElementById('tailleOrange').addEventListener('input', function() {
  document.getElementById('tailleValue').textContent = this.value + ' px';
  if (textOrangeEditionActif !== null) mettreAJourTexteOrangeEdition();
});
document.getElementById('couleurTexteOrange').addEventListener('change', function() {
  if (textOrangeEditionActif !== null) mettreAJourTexteOrangeEdition();
});
document.getElementById('policeOrange').addEventListener('change', function() {
  if (textOrangeEditionActif !== null) mettreAJourTexteOrangeEdition();
});
document.getElementById('texteOrange').addEventListener('input', function() {
  if (textOrangeEditionActif !== null) mettreAJourTexteOrangeEdition();
});


/* ============================================================
   8. TEXTE AVANCÉ — FONCTIONS GÉNÉRIQUES
   ============================================================ */

function resolveAlign(alignment, arabic) {
  if (!arabic) return alignment || 'left';
  if (alignment === 'left')  return 'right';
  if (alignment === 'right') return 'left';
  return 'center';
}

/* Dessine une ligne avec coloration mot par mot */
function drawColoredLine(c, words, x, y, taille, colorStyles, alignment, arabic) {
  var line      = words.join(' ');
  var lineWidth = c.measureText(line).width;
  var curX      = x;
  if (alignment === 'center') curX = x - lineWidth / 2;
  else if (alignment === 'right' || (arabic && alignment === 'left')) curX = x - lineWidth;
  var display = arabic ? words.slice().reverse() : words;
  display.forEach(function(word) {
    var color = '#ffffff';
    colorStyles.forEach(function(s) {
      if (word.toLowerCase().includes(s.mot.toLowerCase()) ||
          s.mot.toLowerCase().includes(word.toLowerCase())) { color = s.couleur; }
    });
    c.fillStyle = color;
    var saved = c.textAlign; c.textAlign = 'left';
    c.fillText(word + ' ', curX, y);
    c.textAlign = saved;
    curX += c.measureText(word + ' ').width;
  });
}

/* Dessine un objet texteAvance générique sur le canvas */
function drawTexteAvanceGeneric(c, t) {
  if (!t.visible || !t.texte) return;
  var arabic = isArabicText(t.texte);
  var lh     = (t.lineHeight !== undefined ? t.lineHeight : 1.5) * t.taille;
  c.save();
  c.font         = t.taille + 'px ' + autoPolice(t.texte, t.police);
  c.direction    = arabic ? 'rtl' : 'ltr';
  c.textAlign    = resolveAlign(t.alignment, arabic);
  c.textBaseline = 'top';
  c.shadowColor  = 'transparent'; c.shadowBlur = 0; c.shadowOffsetX = 0; c.shadowOffsetY = 0;
  var maxW = 400, curY = t.posY;
  t.texte.split('\n').forEach(function(paragraph) {
    if (paragraph.trim() === '') { curY += lh; return; }
    var words = paragraph.split(' '), lineWords = [];
    words.forEach(function(w) {
      var test = lineWords.length > 0 ? lineWords.join(' ') + ' ' + w : w;
      if (c.measureText(test).width > maxW && lineWords.length > 0) {
        drawColoredLine(c, lineWords, t.posX, curY, t.taille, t.colorStyles, t.alignment, arabic);
        curY += lh; lineWords = [w];
      } else { lineWords.push(w); }
    });
    if (lineWords.length > 0) {
      drawColoredLine(c, lineWords, t.posX, curY, t.taille, t.colorStyles, t.alignment, arabic);
      curY += lh;
    }
  });
  c.restore();
}

/* Barre flottante de colorisation (partagée) */
(function initFloatingColorBar() {
  function buildBar(textarea, onApply) {
    var selStart = 0, selEnd = 0;
    var bar = document.createElement('div');
    bar.style.cssText = [
      'position:fixed', 'display:none', 'align-items:center', 'gap:6px',
      'background:#1a1a28', 'border:1px solid #333', 'border-radius:10px',
      'padding:6px 10px', 'z-index:9999', 'box-shadow:0 4px 18px rgba(0,0,0,0.55)'
    ].join(';');

    [{ couleur: '#e97c1a', label: 'Orange' }, { couleur: '#ff2222', label: 'Rouge' }].forEach(function(c) {
      var btn = document.createElement('button');
      btn.title = c.label;
      btn.style.cssText = [
        'background:' + c.couleur, 'border:none', 'width:28px', 'height:28px',
        'border-radius:7px', 'cursor:pointer', 'font-size:0',
        'transition:transform 0.12s, box-shadow 0.12s'
      ].join(';');
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.18)';
        this.style.boxShadow = '0 0 0 2px ' + c.couleur + '66';
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      });
      btn.addEventListener('mousedown', function(e) {
        e.preventDefault();
        var mot = textarea.value.substring(selStart, selEnd).trim();
        if (!mot) return;
        onApply(mot, c.couleur);
        cacherBarre();
      });
      bar.appendChild(btn);
    });

    document.body.appendChild(bar);

    function afficherBarre(x, y) {
      bar.style.display = 'flex';
      var bw = 100, bh = 44;
      bar.style.left = Math.min(x, window.innerWidth - bw - 10) + 'px';
      bar.style.top  = (y - bh - 8 < 0 ? y + 14 : y - bh - 8) + 'px';
    }
    function cacherBarre() { bar.style.display = 'none'; }

    textarea.addEventListener('mouseup', function(e) {
      selStart = this.selectionStart; selEnd = this.selectionEnd;
      if (this.value.substring(selStart, selEnd).trim()) afficherBarre(e.clientX, e.clientY);
      else cacherBarre();
    });
    textarea.addEventListener('keyup', function() {
      selStart = this.selectionStart; selEnd = this.selectionEnd;
      if (!this.value.substring(selStart, selEnd).trim()) cacherBarre();
    });
    document.addEventListener('mousedown', function(e) {
      if (!bar.contains(e.target) && e.target !== textarea) cacherBarre();
    });
    textarea.addEventListener('blur', function() {
      setTimeout(function() { if (!bar.matches(':hover')) cacherBarre(); }, 150);
    });
  }

  buildBar(document.getElementById('texteAvance'),  function(mot, couleur) { appliquerCouleurSelection(mot, couleur); });
  buildBar(document.getElementById('texteAvance2'), function(mot, couleur) { appliquerCouleurSelection2(mot, couleur); });
})();


/* ============================================================
   9. TEXTE AVANCÉ 1
   ============================================================ */

function drawTexteAvance(c) { drawTexteAvanceGeneric(c, texteAvance); }

function mettreAJourTexteAvance() {
  var texte  = document.getElementById('texteAvance').value;
  var taille = parseInt(document.getElementById('texteSize').value);
  var police = document.getElementById('policeTexteAvance').value;
  document.getElementById('texteSizeVal').textContent = taille + ' px';
  if (isArabicText(texte)) { police = 'GE-SS-Two-Bold'; document.getElementById('policeTexteAvance').value = 'GE-SS-Two-Bold'; }
  texteAvance.texte   = texte;
  texteAvance.taille  = taille;
  texteAvance.police  = police;
  texteAvance.visible = texte.trim() !== '';
  draw();
}

function definirAlignement(align) {
  texteAvance.alignment = align;
  ['btnAlignGauche', 'btnAlignCentre', 'btnAlignDroite'].forEach(function(id) {
    var a    = id === 'btnAlignGauche' ? 'left' : id === 'btnAlignCentre' ? 'center' : 'right';
    var actif = align === a;
    var btn  = document.getElementById(id);
    btn.classList.toggle('active', actif);
    btn.style.background  = actif ? '#1e1020' : '#111118';
    btn.style.color       = actif ? '#e97c1a' : '#444';
    btn.style.borderColor = actif ? '#3a2010' : '#1e1e2e';
  });
  draw();
}

function appliquerCouleurSelection(mot, couleur) {
  var found = false;
  texteAvance.colorStyles.forEach(function(s) {
    if (s.mot.toLowerCase() === mot.toLowerCase()) { s.couleur = couleur; found = true; }
  });
  if (!found) texteAvance.colorStyles.push({ mot: mot, couleur: couleur });
  rendreListeMots();
  draw();
}

function colorerTexteSelectionne() {
  var ta  = document.getElementById('texteAvance');
  var mot = ta.value.substring(ta.selectionStart, ta.selectionEnd).trim();
  if (!mot) { alert('Veuillez sélectionner du texte à colorer'); return; }
  appliquerCouleurSelection(mot, document.getElementById('couleurMotSelection').value);
}

function rendreListeMots() {
  var list = document.getElementById('listeMotsColores');
  list.innerHTML = '';
  texteAvance.colorStyles.forEach(function(s, index) {
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;align-items:center;margin-bottom:5px;padding:6px;border-radius:5px;border:1px solid #222;background:#0f0f1a;';
    div.innerHTML =
      '<span style="flex:1;font-size:11px;color:#ccc;">' + s.mot + '</span>' +
      '<div style="width:20px;height:20px;background:' + s.couleur + ';border-radius:3px;margin:0 8px;"></div>' +
      '<button onclick="supprimerColoration(' + index + ')" style="background:none;border:none;color:#555;cursor:pointer;padding:2px 6px;">✕</button>';
    list.appendChild(div);
  });
}

function supprimerColoration(index) { texteAvance.colorStyles.splice(index, 1); rendreListeMots(); draw(); }

function effacerTexteAvance() {
  texteAvance = {
    texte: '', taille: 36, visible: false, colorStyles: [],
    posX: 540, posY: 1600, alignment: 'left', police: 'Poppins-Bold',
    lineHeight: 0.8
  };
  document.getElementById('texteAvance').value        = '';
  document.getElementById('texteSize').value          = '36';
  document.getElementById('texteSizeVal').textContent = '36 px';
  document.getElementById('policeTexteAvance').value  = 'Poppins-Bold';
  definirAlignement('left');
  rendreListeMots();
  draw();
}


/* ============================================================
   10. TEXTE AVANCÉ 2
   ============================================================ */

function drawTexteAvance2(c) { drawTexteAvanceGeneric(c, texteAvance2); }

function mettreAJourTexteAvance2() {
  var texte  = document.getElementById('texteAvance2').value;
  var taille = parseInt(document.getElementById('texteSize2').value);
  var police = document.getElementById('policeTexteAvance2').value;
  document.getElementById('texteSizeVal2').textContent = taille + ' px';
  if (isArabicText(texte)) { police = 'GE-SS-Two-Bold'; document.getElementById('policeTexteAvance2').value = 'GE-SS-Two-Bold'; }
  texteAvance2.texte   = texte;
  texteAvance2.taille  = taille;
  texteAvance2.police  = police;
  texteAvance2.visible = texte.trim() !== '';
  draw();
}

function definirAlignement2(align) {
  texteAvance2.alignment = align;
  ['btnAlignGauche2', 'btnAlignCentre2', 'btnAlignDroite2'].forEach(function(id) {
    var a    = id === 'btnAlignGauche2' ? 'left' : id === 'btnAlignCentre2' ? 'center' : 'right';
    var actif = align === a;
    var btn  = document.getElementById(id);
    btn.classList.toggle('active', actif);
    btn.style.background  = actif ? '#1e1020' : '#111118';
    btn.style.color       = actif ? '#e97c1a' : '#444';
    btn.style.borderColor = actif ? '#3a2010' : '#1e1e2e';
  });
  draw();
}

function appliquerCouleurSelection2(mot, couleur) {
  var found = false;
  texteAvance2.colorStyles.forEach(function(s) {
    if (s.mot.toLowerCase() === mot.toLowerCase()) { s.couleur = couleur; found = true; }
  });
  if (!found) texteAvance2.colorStyles.push({ mot: mot, couleur: couleur });
  rendreListeMots2();
  draw();
}

function colorerTexteSelectionne2() {
  var ta  = document.getElementById('texteAvance2');
  var mot = ta.value.substring(ta.selectionStart, ta.selectionEnd).trim();
  if (!mot) { alert('Veuillez sélectionner du texte à colorer'); return; }
  appliquerCouleurSelection2(mot, document.getElementById('couleurMotSelection2').value);
}

function rendreListeMots2() {
  var list = document.getElementById('listeMotsColores2');
  list.innerHTML = '';
  texteAvance2.colorStyles.forEach(function(s, index) {
    var div = document.createElement('div');
    div.style.cssText = 'display:flex;align-items:center;margin-bottom:5px;padding:6px;border-radius:5px;border:1px solid #222;background:#0f0f1a;';
    div.innerHTML =
      '<span style="flex:1;font-size:11px;color:#ccc;">' + s.mot + '</span>' +
      '<div style="width:20px;height:20px;background:' + s.couleur + ';border-radius:3px;margin:0 8px;"></div>' +
      '<button onclick="supprimerColoration2(' + index + ')" style="background:none;border:none;color:#555;cursor:pointer;padding:2px 6px;">✕</button>';
    list.appendChild(div);
  });
}

function supprimerColoration2(index) { texteAvance2.colorStyles.splice(index, 1); rendreListeMots2(); draw(); }

function effacerTexteAvance2() {
  texteAvance2 = {
    texte: '', taille: 36, visible: false, colorStyles: [],
    posX: 540, posY: 1750, alignment: 'left', police: 'Poppins-Bold'
  };
  document.getElementById('texteAvance2').value        = '';
  document.getElementById('texteSize2').value          = '36';
  document.getElementById('texteSizeVal2').textContent = '36 px';
  document.getElementById('policeTexteAvance2').value  = 'Poppins-Bold';
  definirAlignement2('left');
  rendreListeMots2();
  draw();
}


/* ============================================================
   11. DRAG & DROP (texte orange + textes avancés)
   ============================================================ */

var composition = document.getElementById('composition');

composition.addEventListener('mousedown', function(e) {
  var rect = canvas.getBoundingClientRect();
  var mx = e.clientX - rect.left, my = e.clientY - rect.top;
  var sx = rect.width / NW, sy = rect.height / NH;

  /* Texte avancé 1 */
  if (texteAvance.visible && texteAvance.texte) {
    if (Math.abs(mx - texteAvance.posX * sx) < 150 && Math.abs(my - texteAvance.posY * sy) < 80) {
      textAvanceDragActif = true; isDragging = true;
      dragOffsetAdvanceX = mx - texteAvance.posX * sx;
      dragOffsetAdvanceY = my - texteAvance.posY * sy;
      composition.style.cursor = 'grabbing'; draw(); return;
    }
  }

  /* Texte avancé 2 */
  if (texteAvance2.visible && texteAvance2.texte) {
    if (Math.abs(mx - texteAvance2.posX * sx) < 150 && Math.abs(my - texteAvance2.posY * sy) < 80) {
      textAvance2DragActif = true; isDragging = true;
      dragOffsetAdvance2X = mx - texteAvance2.posX * sx;
      dragOffsetAdvance2Y = my - texteAvance2.posY * sy;
      composition.style.cursor = 'grabbing'; draw(); return;
    }
  }

  /* Textes zone orange */
  for (var i = textesOrange.length - 1; i >= 0; i--) {
    var t = textesOrange[i];
    if (Math.abs(mx - t.posX * sx) < 200 && Math.abs(my - t.posY * sy) < 60) {
      texteDragActif = i; isDragging = true;
      dragOffsetX = mx - t.posX * sx;
      dragOffsetY = my - t.posY * sy;
      composition.style.cursor = 'grabbing'; draw(); return;
    }
  }
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) return;
  var rect = canvas.getBoundingClientRect();
  var mx = e.clientX - rect.left, my = e.clientY - rect.top;
  var sx = rect.width / NW, sy = rect.height / NH;

  if (textAvanceDragActif) {
    texteAvance.posX = Math.max(50, Math.min(NW - 50, (mx - dragOffsetAdvanceX) / sx));
    texteAvance.posY = Math.max(50, Math.min(NH - 50, (my - dragOffsetAdvanceY) / sy));
    draw(); return;
  }

  if (textAvance2DragActif) {
    texteAvance2.posX = Math.max(50, Math.min(NW - 50, (mx - dragOffsetAdvance2X) / sx));
    texteAvance2.posY = Math.max(50, Math.min(NH - 50, (my - dragOffsetAdvance2Y) / sy));
    draw(); return;
  }

  if (texteDragActif !== null) {
    var t = textesOrange[texteDragActif];
    t.posX = Math.max(ZONE_ORANGE.x + 30,       Math.min(ZONE_ORANGE.x + ZONE_ORANGE.w - 30, (mx - dragOffsetX) / sx));
    t.posY = Math.max(ZONE_ORANGE.y + t.taille, Math.min(ZONE_ORANGE.y + ZONE_ORANGE.h - t.taille, (my - dragOffsetY) / sy));
    draw();
  }
});

document.addEventListener('mouseup', function() {
  if (textAvanceDragActif || textAvance2DragActif || texteDragActif !== null) {
    textAvanceDragActif  = false;
    textAvance2DragActif = false;
    texteDragActif       = null;
    isDragging           = false;
    composition.style.cursor = 'default';
    draw();
  }
});

/* Support tactile */
composition.addEventListener('touchstart', function(e) {
  var t = e.touches[0];
  composition.dispatchEvent(new MouseEvent('mousedown', { clientX: t.clientX, clientY: t.clientY }));
});
document.addEventListener('touchmove', function(e) {
  if (!isDragging) return;
  var t = e.touches[0];
  document.dispatchEvent(new MouseEvent('mousemove', { clientX: t.clientX, clientY: t.clientY }));
});
document.addEventListener('touchend', function() {
  document.dispatchEvent(new MouseEvent('mouseup', {}));
});


/* ============================================================
   12. VECTEEZY — POSITION & TAILLE
   ============================================================ */

function appliquerPositionVecteezy(index) {
  vecteezyPositionActive = index;
  var p = VECTEEZY_POSITIONS[index];
  vecteezyZone = { x: p.x, y: p.y, w: p.w, h: p.h };

  var wIn = document.getElementById('vecteezyW');
  var hIn = document.getElementById('vecteezyH');
  if (wIn) { wIn.value = Math.round(p.w); document.getElementById('vecteezyWVal').textContent = Math.round(p.w) + 'px'; }
  if (hIn) { hIn.value = Math.round(p.h); document.getElementById('vecteezyHVal').textContent = Math.round(p.h) + 'px'; }

  VECTEEZY_POSITIONS.forEach(function(_, i) {
    var btn = document.getElementById('btnVPos' + i);
    if (btn) {
      btn.style.background  = i === index ? '#a8e060' : '#1a2a0a';
      btn.style.color       = i === index ? '#0d1a05' : '#a8e060';
      btn.style.borderColor = i === index ? '#a8e060' : '#2a4010';
      btn.style.fontWeight  = i === index ? '800'     : '600';
    }
  });

  draw();
}

function onVecteezyWidthChange(val) {
  vecteezyZone.w = parseInt(val);
  document.getElementById('vecteezyWVal').textContent = val + 'px';
  draw();
}

function onVecteezyHeightChange(val) {
  vecteezyZone.h = parseInt(val);
  document.getElementById('vecteezyHVal').textContent = val + 'px';
  draw();
}

function resetVecteezyPosition() {
  appliquerPositionVecteezy(vecteezyPositionActive);
}


/* ============================================================
   13. TÉLÉCHARGEMENT & RESET
   ============================================================ */

function downloadImage() {
  var svgClone = svg.cloneNode(true);
  svgClone.setAttribute('width', NW);
  svgClone.setAttribute('height', NH);
  svgClone.setAttribute('viewBox', '0 0 ' + NW + ' ' + NH);
  var svgBlob = new Blob([new XMLSerializer().serializeToString(svgClone)], { type: 'image/svg+xml;charset=utf-8' });
  var svgURL  = URL.createObjectURL(svgBlob);
  var out = document.createElement('canvas');
  out.width = NW; out.height = NH;
  var oc = out.getContext('2d');
  oc.imageSmoothingEnabled = true;
  oc.imageSmoothingQuality = 'high';
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

function resetAll() {
  bgImg  = null;
  images = [null, null, null, null];
  fits   = ['cover', 'cover', 'cover', 'contain'];
  tracedRoutes        = [];
  couleurSelectionnee = '#e97c1a';
  textesOrange           = [];
  texteDragActif         = null;
  textOrangeEditionActif = null;

  [0, 1, 2, 3].forEach(function(i) {
    var th = document.getElementById('thumb-' + i);
    th.src = ''; th.style.display = 'none'; th.nextElementSibling.style.display = '';
    document.getElementById('card-' + i).classList.remove('filled');
    document.querySelector('#card-' + i + ' .slot-btn').textContent = '+ Choisir image';
    var def = i === 3 ? 'contain' : 'cover';
    ['cover', 'contain', 'fill'].forEach(function(m) {
      var b = document.getElementById('fit-' + i + '-' + m);
      if (b) b.classList.toggle('active', m === def);
    });
  });

  document.getElementById('villeDepart').value        = '';
  document.getElementById('villeArrivee').value       = '';
  document.getElementById('texteOrange').value        = '';
  document.getElementById('tailleOrange').value       = '32';
  document.getElementById('couleurTexteOrange').value = '#ffffff';
  document.getElementById('policeOrange').value       = 'Poppins-Bold';
  document.getElementById('tailleValue').textContent  = '32 px';
  document.getElementById('btnAjouterTexteOrange').textContent = '➕ Ajouter texte';

  appliquerPositionVecteezy(0);
  selectColor('#e97c1a');
  renderRouteList();
  rendreListeTextesOrange();
  effacerTexteAvance();
  effacerTexteAvance2();
  draw();
}


/* ============================================================
   14. EVENT LISTENERS
   ============================================================ */

/* Texte avancé 1 */
document.getElementById('texteAvance').addEventListener('input',         mettreAJourTexteAvance);
document.getElementById('texteSize').addEventListener('input',           mettreAJourTexteAvance);
document.getElementById('policeTexteAvance').addEventListener('change',  mettreAJourTexteAvance);
document.getElementById('btnColorerSelection').addEventListener('click', colorerTexteSelectionne);
document.getElementById('btnEffacerTexteAvance').addEventListener('click', effacerTexteAvance);
document.getElementById('btnAlignGauche').addEventListener('click',  function() { definirAlignement('left'); });
document.getElementById('btnAlignCentre').addEventListener('click',  function() { definirAlignement('center'); });
document.getElementById('btnAlignDroite').addEventListener('click',  function() { definirAlignement('right'); });

/* Texte avancé 2 */
document.getElementById('texteAvance2').addEventListener('input',         mettreAJourTexteAvance2);
document.getElementById('texteSize2').addEventListener('input',           mettreAJourTexteAvance2);
document.getElementById('policeTexteAvance2').addEventListener('change',  mettreAJourTexteAvance2);
document.getElementById('btnColorerSelection2').addEventListener('click', colorerTexteSelectionne2);
document.getElementById('btnEffacerTexteAvance2').addEventListener('click', effacerTexteAvance2);
document.getElementById('btnAlignGauche2').addEventListener('click', function() { definirAlignement2('left'); });
document.getElementById('btnAlignCentre2').addEventListener('click', function() { definirAlignement2('center'); });
document.getElementById('btnAlignDroite2').addEventListener('click', function() { definirAlignement2('right'); });

/* Routes */
document.getElementById('btnTracer').addEventListener('click', tracerRoute);
document.getElementById('btnClear').addEventListener('click',  effacerTout);

/* Zone orange */
document.getElementById('btnAjouterTexteOrange').addEventListener('click', ajouterTexteOrange);
document.getElementById('btnEffacerTousTextes').addEventListener('click',  effacerTousTextes);

/* Vecteezy */
document.getElementById('btnResetVecteezy').addEventListener('click', resetVecteezyPosition);
document.getElementById('vecteezyW').addEventListener('input', function() { onVecteezyWidthChange(this.value); });
document.getElementById('vecteezyH').addEventListener('input', function() { onVecteezyHeightChange(this.value); });


/* ============================================================
   15. INITIALISATION
   ============================================================ */

appliquerPositionVecteezy(0);
definirAlignement('left');
definirAlignement2('left');
draw();