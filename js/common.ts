// @author Chris Zavala
// Attempt to add the listener for the brand logo
window.addEventListener('DOMContentLoaded', function() {
	document.querySelector(".nav-logo").addEventListener("click", goBackHome);
	document.querySelector(".nav-logo-text").addEventListener("click", goBackHome);
});
function goBackHome() {
	window.location.pathname = ('templates/home.html');
}
