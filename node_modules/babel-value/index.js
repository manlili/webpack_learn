'use strict';
function buildError(node, message) {
	const error = new Error(message);
	const loc = node.loc || node._loc;

	if (loc) {
		error.loc = loc.start;
	}

	return error;
}

function computeValue(node) {
	if (node.type === 'StringLiteral' || node.type === 'NumericLiteral' || node.type === 'BooleanLiteral') {
		return node.value;
	}

	if (node.type === 'NullLiteral') {
		return null;
	}

	if (node.type === 'Identifier' && node.name === 'undefined') {
		return undefined;
	}

	if (node.type === 'RegExpLiteral') {
		return new RegExp(node.pattern, node.flags);
	}

	if (node.type === 'TemplateLiteral') {
		if (node.expressions.length !== 0) {
			throw buildError(node, 'Template literals may not contain any computed values');
		}

		return node.quasis[0].value.cooked;
	}

	if (node.type === 'ObjectExpression') {
		return node.properties.reduce(objectExpressionReducer, {});
	}

	if (node.type === 'ArrayExpression') {
		return node.elements.map(computeValue);
	}

	throw buildError(node, `unsupported ${node.type}. Must not contain computed values.`);
}

function id(node) {
	if (node.type !== 'Identifier') {
		throw buildError(node, 'Expected an Identifier');
	}

	return node.name;
}

function objectExpressionReducer(acc, node) {
	acc[id(node.key)] = computeValue(node.value);
	return acc;
}

module.exports = function (path) {
	const isPath = typeof path.get === 'function';

	return computeValue(isPath ? path.node : path);
};
