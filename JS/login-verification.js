const isLoggedIn = localStorage.getItem('password');

if (isLoggedIn == null || isLoggedIn == undefined) {
  alert('Mohon untuk login terlebih dahulu');
  window.location.href = 'index.html';
}