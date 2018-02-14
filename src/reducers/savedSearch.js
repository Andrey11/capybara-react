import { combineReducers } from 'redux'

function currentSavedSearch (state = {}, action) {
  return state;
}

const recentSavedSearchInitialState = {
  savedSearches: [
    {name: 'Saved Search 1', id: 'savedSearchId1'},
    {name: 'Saved Search 2', id: 'savedSearchId2'},
    {name: 'Saved Search 3', id: 'savedSearchId3'}
  ]
};

function recent (state = recentSavedSearchInitialState, action) {
  return state;
}


const savedSearchData = combineReducers({
  currentSavedSearch,
  recent,
})

export default savedSearchData
