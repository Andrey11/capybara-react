import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onButtonClick } from '../../actions'
import PropTypes from 'prop-types'

import './GRButton.css'

export const GRButtonTypes = ({
  ICON: 'ICON',
  TEXT: 'TEXT',
  TEXT_ICON: 'TEXT_ICON'
})

class GRButton extends Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    // if (this.props.action) {
      // this.props.dispatch(this.props.onClick())
    this.props.onClick()
    // }
  }

  render() {

    if (this.props.type === GRButtonTypes.ICON) {
      return (
          <div
            className='grbutton grbutton_icon'
            onClick={this.onClickHandler}>
            <span className='grbutton_inner'>
              <i className={'fas ' + this.props.icon}></i>
              {this.props.text}
            </span>
          </div>
      )
    } else if (this.props.type === GRButtonTypes.TEXT) {
      return (
          <div
            className='grbutton'
            onClick={this.onClickHandler}>
            <span className='grbutton_inner'>
              {this.props.text}
            </span>
          </div>
      )
    }

    // <div
    //   className='grbutton grbutton_icon'
    //   onClick={this.onClickHandler}>
    //   <span className='grbutton_inner'>
    //     <i className={'fas ' + this.props.icon}></i>
    //     {this.props.text}
    //   </span>
    // </div>
    return (
        <div
          className='grbutton'
          onClick={this.onClickHandler}>
          <span className='grbutton_inner'>
            {this.props.text}
          </span>
        </div>
    )

  }
}



GRButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([
    GRButtonTypes.ICON,
    GRButtonTypes.TEXT,
    GRButtonTypes.TEXT_ICON
  ]),
  onClick: PropTypes.func,
  action: PropTypes.func
}

GRButton.defaultProps = {
  text: '',
  icon: '',
  disabled: false,
  type: GRButtonTypes.TEXT_ICON,
  action: null,
  onClick: onButtonClick
}

export default connect()(GRButton)
