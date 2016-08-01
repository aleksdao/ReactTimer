var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter number of seconds"/>
          <button type="submit" className="button expanded">Start</button>
        </form>
      </div>

    )
  }
});

module.exports = CountdownForm;
