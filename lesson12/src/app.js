import Layer from './components/layer/layer.js';
const App = function () {
	let dom = document.getElementById('app');
	let layer = new Layer();
	dom.innerHTML = layer.template({
		name: 'ejs模板',
		arr: ['1', '2', '3']
	});
}

new App();
