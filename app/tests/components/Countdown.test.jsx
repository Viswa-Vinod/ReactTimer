var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountDown = require('CountDown');

describe('CountDown', () => {
	it('should exist', () => {
		expect('CountDown').toExist();
	});

	describe('handleSetCountdown', () => {
		//done parameter tells mocha that there is an async test in setTimeout
		//and that it should wait till the async call is finished to end the test
		it('should set state to started and count down', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(()=>{
				expect(countdown.state.count).toBe(9);
				done();
			},1001);
		});

		it('should not set count to negative value', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown/>);
			countdown.handleSetCountdown(1);
			
			setTimeout(()=>{
				expect(countdown.state.count).toBe(0);
				done();
			},3001);
		});

		it('should pause countdown on pause status', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown/>);
			
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');

			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			},1001)

		});
		it('should rest count on stopped status', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown/>);
			
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			},1001)

		});
	});
});