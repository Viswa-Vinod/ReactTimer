var webpackConfig = require('./webpack.config.js');
module.exports = function(config){
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'], //tells karma to use mocha framework
		files:['app/tests/**/*.test.jsx'],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack','sourcemap']
		},
		reporters: ['mocha'],  //shows check marks or cross marks indicating test results
		client: {
			mocha: {
				timeout: '5000' //if testing is not over within 5s then terminate testing
			}
		},
		webpack: webpackConfig
	});
};