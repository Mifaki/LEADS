const isLoggedIn = localStorage.getItem('password');
console.log(isLoggedIn);

if (isLoggedIn == null || isLoggedIn == undefined) {
  alert('Mohon untuk login terlebih dahulu');
  window.location.href = 'login.html';
}