var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');

var CountDown = React.createClass({
	
	render: () => {	
		<Nav/>	
		return (
			<div>
				<Clock totalSeconds = {129}/>
			</div>
		);
	}
	
});

module.exports = CountDown;