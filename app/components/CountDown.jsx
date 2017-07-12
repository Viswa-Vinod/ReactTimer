var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');
var CoundownForm = require('CountdownForm');

var CountDown = React.createClass({
	getInitialState: function () {
		return {count: 0};
	},
	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds
		})
	},
	render: function () {	
		var {count} = this.state;	
		return (
			<div>
				<Clock totalSeconds = {count}/>
				<CoundownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		);
	}
	
});

module.exports = CountDown;