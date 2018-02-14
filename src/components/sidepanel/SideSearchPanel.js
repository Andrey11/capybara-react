import React from 'react';
import SidePanelHeaderContainer from '../../containers/sidepanel/SidePanelHeaderContainer'
import SidePanelVisibleFunctionsContainer from '../../containers/sidepanel/SidePanelVisibleFunctionsContainer'
import SideCollapsedPanel from './SideCollapsedPanel'
import PropTypes from 'prop-types'

import './SideSearchPanel.css'


const SideSearchPanel = ({ isMinimized }) => {

  return (
    <div className='SideSearchPanel'>
      <SidePanelHeaderContainer
        title='SEARCH'
        showBackButton={false}
      />
      { isMinimized ? (
        <SideCollapsedPanel text='SEARCH' />
      ) : (
        <SidePanelVisibleFunctionsContainer />
      ) }
    </div>
  )
}

SideSearchPanel.propTypes = {
  isMinimized: PropTypes.bool.isRequired
}

export default SideSearchPanel
