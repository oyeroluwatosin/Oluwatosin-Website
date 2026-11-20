// "Copy link" button on standalone pages (#share).
(function () {
  var btn = document.getElementById('share');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var url = location.href.split('#')[0];
    function done(msg) { btn.textContent = msg; setTimeout(function () { btn.textContent = 'Copy link'; }, 1600); }
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      navigator.share({ title: document.title, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () { done('Link copied'); }, function () { done(url); });
    } else { done(url); }
  });
})();
