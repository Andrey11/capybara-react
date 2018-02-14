import React from 'react'
import PropTypes from 'prop-types'

const GRButtonOld = ({ text, onClick }) => {
  return (
    <button type="button" onClick={e => {
      e.preventDefault()
      onClick(e)
    }}>
      {text}
    </button>
  )
}

GRButtonOld.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['ICON', 'TEXT', 'ICON_TEXT']),
  onClick: PropTypes.func.isRequired
}

GRButtonOld.defaultProps = {
  text: '',
  icon: '',
  disabled: false,
  type: 'ICON_TEXT'
}

export default GRButtonOld
