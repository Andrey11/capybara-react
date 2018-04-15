import React from 'react';
import SearchBarPanel from './SearchBarPanel'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import AdvancedSearchPanelContainer from '../containers/advancedsearch/AdvancedSearchPanelContainer'

import PropTypes from 'prop-types'

const MainPanel = ({ mode }) => {
  return (
    <div>
      {/* main search + search results view */}
      <AdvancedSearchPanelContainer className='panel' />
      <SearchBarPanel />
      <SearchResultsContainer />
    </div>
  )
}

MainPanel.propTypes = {
  mode: PropTypes.string.isRequired
}

export default MainPanel
