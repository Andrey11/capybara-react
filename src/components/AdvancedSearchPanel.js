import React from 'react';
import AdvancedSearchCancelButtonContainer from '../containers/advancedsearch/AdvancedSearchCancelButtonContainer'
import AdvancedSearchActionButtonContainer from '../containers/advancedsearch/AdvancedSearchActionButtonContainer'
import PropTypes from 'prop-types';

const AdvancedSearchPanel = ({
  visible,
  blockCls, elementCls, hiddenCls, visibleCls }) => {

  let modifierCls = visible ? visibleCls : hiddenCls;
  let panelCls = [blockCls, elementCls, modifierCls].join(' ');

  return (
    <div className={panelCls}>
      <div className='panel__advanced-search-header'>
        <AdvancedSearchCancelButtonContainer />
      </div>
      <div className='panel__advanced-search-body'>
        Advanced SEARCH
      </div>
      <div className='panel__advanced-search-footer'>
        <AdvancedSearchActionButtonContainer />
        <AdvancedSearchCancelButtonContainer />
      </div>
    </div>
  )
}

AdvancedSearchPanel.propTypes = {
  visible: PropTypes.bool.isRequired
}

AdvancedSearchPanel.defaultProps = {
  blockCls: 'panel',
  elementCls: 'panel__advanced-search',
  hiddenCls: 'panel--hidden',
  visibleCls: 'panel--visible',
}

export default AdvancedSearchPanel
