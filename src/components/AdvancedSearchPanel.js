import React from 'react';
import './AdvancedSearchPanel.css';
import AdvancedSearchCancelButtonContainer from '../containers/advancedsearch/AdvancedSearchCancelButtonContainer'
import AdvancedSearchActionButtonContainer from '../containers/advancedsearch/AdvancedSearchActionButtonContainer'
import PropTypes from 'prop-types';

const AdvancedSearchPanel = ({ visible }) => {

  let visibilityClass = visible ? ' AdvancedSearchPanelShow' : ' AdvancedSearchPanelHide';

  return (
    <div className={'AdvancedSearchPanel' + visibilityClass}>
      <div className='AdvancedSearchPanelHeader'>
        <AdvancedSearchCancelButtonContainer />
      </div>
      <div className='AdvancedSearchPanelBody'>
        Advanced SEARCH
      </div>
      <div className='AdvancedSearchPanelFooter'>
        <AdvancedSearchActionButtonContainer />
        <AdvancedSearchCancelButtonContainer />
      </div>
    </div>
  )
}

AdvancedSearchPanel.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default AdvancedSearchPanel
