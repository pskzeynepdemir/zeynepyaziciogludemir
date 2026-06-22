// Mobil menü aç/kapa
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    var links = document.querySelector('.navlinks');
    if (links) links.classList.toggle('open');
  }
});

// Yazılar sayfası: Denemeler / Öyküler sekmeleri
document.addEventListener('click', function (e) {
  var tab = e.target.closest('.tab');
  if (!tab) return;
  var target = tab.getAttribute('data-tab');
  document.querySelectorAll('.tab').forEach(function (t) {
    t.classList.toggle('active', t === tab);
  });
  document.querySelectorAll('[data-panel]').forEach(function (panel) {
    panel.style.display = panel.getAttribute('data-panel') === target ? '' : 'none';
  });
});
