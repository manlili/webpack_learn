import layerCss from "./layer.css";
import template from "./layer.html";
function layer () {
	return {
		name: 'layer',
		layerCss: layerCss,
		template: template
	}
}
export default layer;