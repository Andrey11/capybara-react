import { combineReducers } from 'redux'

import headerFilter from './headerFilter'
import bodyFilter from './bodyFilter'
import layout from './layout'
import roleEntitlements from './roleEntitlements'
import caseData from './case'
import policyData from './policy'
import savedSearchData from './savedSearch'
import recentSearchData from './recentSearch'
import sidePanelState from './sidePanelState'
import advancedSearch from './advancedSearch'
import searchResults from './searchResults'



const capybaraApp = combineReducers({
  roleEntitlements,
  headerFilter,
  bodyFilter,
  layout,
  caseData,
  policyData,
  savedSearchData,
  recentSearchData,
  sidePanelState,
  advancedSearch,
  searchResults
})

export default capybaraApp
