export default() => {
	window.addEventListener('load', function() {
		document.body.classList.add('loaded');
		console.log('hi')
	});
}