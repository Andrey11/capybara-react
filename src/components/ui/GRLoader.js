import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './GRLoader.css'

class GRLoader extends Component {

  render() {

    if (!this.props.isLoading) {
      return null;
    }

    return (
      <div className='grloader'>
        <i className='fas fa-spinner'></i>
      </div>
    )
  }

}

GRLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

GRLoader.defaultProps = {
  isLoading: false
}

export default connect()(GRLoader)
