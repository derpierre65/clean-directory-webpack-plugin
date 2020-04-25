const path = require('path');

class CleanDirectoryWebpackPlugin {
	constructor(options = {}) {
		this._options = options;
	}

	apply(compiler) {
		compiler.hooks.beforeRun.tap('CleanDirectoryWebpackPlugin', () => {
			let paths = this._options.paths || [compiler.options.output.path];
			const fs = require('fs');
			for (let delPath of paths) {
				delPath = path.resolve(compiler.options.context, delPath);
				fs.rmdirSync(delPath, { recursive: true });
			}
		});
	}
}

module.exports = CleanDirectoryWebpackPlugin;
