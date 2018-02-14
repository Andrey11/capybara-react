import { combineReducers } from 'redux'

function currentRecentSearch (state = {}, action) {
  return state;
}

const recentSavedSearchInitialState = {
  recentSearches: [
    {name: 'Recent Searches 1', id: 'recentSearchId1'},
    {name: 'Recent Searches 2', id: 'recentSearchId2'},
    {name: 'Recent Searches 3', id: 'recentSearchId3'}
  ]
};

function recent (state = recentSavedSearchInitialState, action) {
  return state;
}


const recentSearchData = combineReducers({
  currentRecentSearch,
  recent,
})

export default recentSearchData
