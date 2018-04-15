import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class GRMenu extends Component {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onMenuClose: PropTypes.func
  }

  static defaultProps = {
    visible: false,
    onMenuClose: () => {}
  }

  constructor(props) {
    super(props);

    this.hide = this.hide.bind(this);
  }

  hide () {
    this.unBindWindowEvent()
    this.props.onMenuClose();
  }

  bindWindowEvent = () => {
    window.addEventListener('resize', this.hide);
    window.addEventListener('contextmenu', this.hide);
    window.addEventListener('mousedown', this.hide);
    window.addEventListener('click', this.hide);
    window.addEventListener('scroll', this.hide);
  };

  unBindWindowEvent = () => {
    window.removeEventListener('resize', this.hide);
    window.removeEventListener('contextmenu', this.hide);
    window.removeEventListener('mousedown', this.hide);
    window.removeEventListener('click', this.hide);
    window.removeEventListener('scroll', this.hide);
  };

  onMouseEnter = () => window.removeEventListener('mousedown', this.hide);

  onMouseLeave = () => window.addEventListener('mousedown', this.hide);


  render() {

    if (!this.props.visible) {
      return null;
    }

    this.bindWindowEvent()

    return (
      <div
        className={'gr__menu ' + this.props.className}
        style={this.props.style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <ul>
          <li>Dummy1</li>
          <li>Dummy2</li>
          <li>Dummy3</li>
          <li>Dummy4</li>
        </ul>
      </div>
    )
  }
}

export default connect()(GRMenu)
