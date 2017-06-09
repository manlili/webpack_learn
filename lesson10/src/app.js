import Layer from './components/layer/layer.js';
const App = function () {
	let dom = document.getElementById('app');
	let layer = new Layer();
	dom.innerHTML = layer.template;
}

new App();
