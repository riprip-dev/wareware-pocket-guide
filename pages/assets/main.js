function openWindow(element) {
	const el = document.getElementById(element);
	el.style.scale = "1";
	el.style.transition = "scale 0.6s linear(0, 0.141 4.4%, 0.938 16.7%, 1.149 24.3%, 1.154 29.9%, 1.017 43.1%, 0.977 51%, 1.003 76.9%, 1)";
}

function closeWindow(element) {
	const el = document.getElementById(element);
	el.style.scale = "0";
	el.style.transition = "scale 0.2s";
}
