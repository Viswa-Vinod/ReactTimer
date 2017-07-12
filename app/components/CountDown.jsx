var React = require('react');
var Nav = require('Nav');

var CountDown = React.createClass({
	
	render: () => {	
		<Nav/>	
		return (
			<p> Countdown component rendered </p>
		);
	}
	
});

module.exports = CountDown;