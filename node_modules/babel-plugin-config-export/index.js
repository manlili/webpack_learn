'use strict';
const babelValue = require('babel-value');

const getConfig = (parseResult, configName) => {
	const configs = parseResult.metadata && parseResult.metadata.exportedConfigs;
	return (configs && configs[configName]) || null;
};

module.exports = configName => {
	const plugin = () => {
		const visitor = {
			ExportNamedDeclaration(path, state) {
				const declaration = path.node.declaration;
				if (declaration.type === 'VariableDeclaration' && declaration.kind === 'const') {
					declaration.declarations.forEach(declarator => {
						if (declarator.id.name === configName) {
							const metadata = state.file.metadata;

							metadata.exportedConfigs = metadata.exportedConfigs || {};

							metadata.exportedConfigs[configName] = babelValue(declarator.init);
						}
					});
				}
			}
		};

		return {visitor};
	};

	plugin.getConfig = parseResult => getConfig(parseResult, configName);

	return plugin;
};

module.exports.getConfig = getConfig;
