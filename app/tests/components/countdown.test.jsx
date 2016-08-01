var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  })

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', () => {
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
      }, 1001);

    })

    it('should count down to 0 and never go negative', () => {
      var countdown=TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
      }, 2001);
    })

  })

})
