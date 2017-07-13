var React = require('react');
var CountdownForm = React.createClass({

	onSubmit: function (e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;


		if (strSeconds.match(/^\d+$/)) {
			this.refs.seconds.value='';
			var numSeconds = parseInt(strSeconds,10);

			if (numSeconds > 0) {
				this.props.onSetCountdown(numSeconds);
			}
		}
	},
	render: function () {

 		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="enter time in seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});

module.exports = CountdownForm;