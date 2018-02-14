import React from 'react';
import PropTypes from 'prop-types'

import './SideCollapsedPanel.css'


const SideCollapsedPanel = ({ text }) => {

  return (
    <div className='SideCollapsedPanel'>
      { text }
    </div>
  )

}

SideCollapsedPanel.propTypes = {
  text: PropTypes.string
}

export default SideCollapsedPanel
