import React from 'react';
import './SearchBarPanel.css';
import AdvancedSearchButton from '../containers/advancedsearch/AdvancedSearchButtonContainer';
import PropTypes from 'prop-types';

const SearchBarPanel = ({ test }) => {

  return (
    <div className='SearchBarPanel'>
      <input type='text' placeholder='Search here' />
      <span>DATE SELECTOR DROPDOWN | </span>
      <AdvancedSearchButton />
    </div>
  )
}

SearchBarPanel.propTypes = {
  test: PropTypes.string
}

export default SearchBarPanel
