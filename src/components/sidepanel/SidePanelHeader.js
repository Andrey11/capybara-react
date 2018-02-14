import React from 'react'
import Button, {GRButtonTypes} from '../ui/GRButton'
import PropTypes from 'prop-types'

import './SidePanelHeader.css'

const SidePanelHeader = ({
  isMinimized,
  title,
  icon,
  showBackButton,
  onBackButtonClick,
  maximizeSidePanel,
  minimizeSidePanel}) => {
  if (isMinimized) {
    return (
      <div className='SidePanelHeader'>
        <Button
          type={GRButtonTypes.ICON}
          icon={icon}
          onClick={maximizeSidePanel} />
      </div>
    )
  }
   return (
     <div className='SidePanelHeader'>
       { showBackButton ? (
         <Button
           type={GRButtonTypes.ICON}
           icon='fa-arrow-left'
           onClick={onBackButtonClick} />
       ) : (
         null
       ) }
       <span className='SidePanelHeader_text'>{title}</span>
       <Button
         type={GRButtonTypes.ICON}
         icon={icon}
         onClick={minimizeSidePanel} />
     </div>
   )
}

SidePanelHeader.propTypes = {
  isMinimized: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  maximizeSidePanel: PropTypes.func,
  minimizeSidePanel: PropTypes.func,
  onBackButtonClick: PropTypes.func,
  showBackButton: PropTypes.bool
}


SidePanelHeader.defaultProps = {
  title: 'TITLE',
  showBackButton: false
}

export default SidePanelHeader
