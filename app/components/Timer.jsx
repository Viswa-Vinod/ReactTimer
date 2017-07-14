var React = require('react');
var Nav = require('Nav');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
		getInitialState: function () {
			return {
				count: 0,
				timerStatus: 'paused'
			}
		},
		componentDidUpdate: function (prevProps, prevState) {
			// console.log('prevState: ' + prevState.timerStatus);
			// console.log('currentState: ' + this.state.timerStatus);

			if(this.state.timerStatus !== prevState.timerStatus) {
				switch(this.state.timerStatus) {
					case 'started':
						this.startTimer();
					break;
					
					case 'stopped':
					this.setState({count: 0});

					case 'paused':
						clearInterval(this.timer);
						this.timer = undefined;
					break;
				}
			}
		},
		componentWillUnmount: function () {
			clearInterval(this.timer);
			this.timer = undefined;
		},
		startTimer: function() {
			this.timer = setInterval(() => {
				var newCount = this.state.count + 1;
				// console.log('newCount: ' + newCount);
				this.setState({
					count: newCount >= 0 ? newCount : 0
				});
				
				// if (newCount === 0) {
				// 	this.setState({
				// 		timerStatus: 'paused'
				// 	})
				// }

			}, 1000);
		},
		handleStatusChange: function (newStatus) {
			// console.log('got new status: ' + newStatus)
			if (newStatus==='stopped') {
				newStatus = 'paused';
				this.setState({count:0});	
			} 
			this.setState({
				timerStatus : newStatus
			})
		},
		render: function () {
			var {count, timerStatus} = this.state;
			// console.log('on load: ' + timerStatus)
			 
			return (
				<div>
					<h1 className = "page-title"> Timer App </h1>
					<Clock totalSeconds = {count}/>
					<Controls onStatusChange= {this.handleStatusChange} 
					countdownStatus= {timerStatus}/>
				</div>
			);
		}		
});

module.exports = Timer;
