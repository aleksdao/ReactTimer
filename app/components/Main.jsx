const React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <div>
            <Nav></Nav>
            <p>Main.jsx Rendered</p>
            {this.props.children}
          </div>
        </div>

      </div>

    )
  }
})

module.exports = Main;
