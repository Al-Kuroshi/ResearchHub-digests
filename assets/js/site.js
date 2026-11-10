// Progressive enhancement only: the pages read fine without this file.
(function () {
  var rail = document.querySelector(".rail");
  if (!rail) return;

  // On narrow screens the contents start folded, out of the reader's way.
  var details = rail.querySelector("details");
  if (details && window.matchMedia("(max-width: 1180px)").matches) details.open = false;

  // Mark the section being read: the last one whose top has passed the
  // upper third of the screen. Recomputed on scroll (once per frame) and
  // after jumping to an anchor, so it is never left stale.
  var links = {};
  rail.querySelectorAll('a[href^="#"]').forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var sections = Object.keys(links).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (!sections.length) return;

  var current = null, queued = false;
  function update() {
    queued = false;
    var line = window.innerHeight / 3, best = sections[0].id;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) best = s.id; });
    if (best === current) return;
    if (current && links[current]) links[current].removeAttribute("aria-current");
    links[best].setAttribute("aria-current", "location");
    current = best;
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  window.addEventListener("hashchange", function () { setTimeout(update, 400); });
  update();
})();
