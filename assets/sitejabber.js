(function (src, callback) {
  var s, r, t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState == 'complete')) {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
})('https://biz.sitejabber.com/js/widget.min.1596662299.js', function () {
  new STJR.ReviewBadgeWidget({ id: 'reviewBadgeWidget', url: 'familygiftsco.com', type: 'large' }).render();
});
