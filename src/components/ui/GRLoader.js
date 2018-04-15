import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import PropTypes from 'prop-types'

class GRLoader extends PureComponent {

  render() {

    if (!this.props.isLoading) {
      return null;
    }

    return (
      <div className='gr__loader'>
        <FontAwesomeIcon
          className='fa-spin'
          icon={faSpinner}
          size={this.props.size} spin
        />
      </div>
    )
  }
}

GRLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'])
}

GRLoader.defaultProps = {
  isLoading: false,
  size: 'lg'
}

export default connect()(GRLoader)
