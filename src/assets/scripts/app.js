const theme = document.querySelector('#theme');

theme.addEventListener('click', function () {
  document.body.classList.toggle('invert');
  if (document.body.classList.contains('invert')) {
    localStorage.setItem('website_theme', 'invert');
  } else {
    localStorage.setItem('website_theme', 'default');
  }
});

function retrieve_theme() {
  var theme = localStorage.getItem('website_theme');
  if (theme != null) {
    document.body.classList.remove('default', 'invert');
    document.body.classList.add(theme);
  }
}

retrieve_theme();

window.addEventListener(
  'storage',
  function () {
    retrieve_theme();
  },
  false
);
