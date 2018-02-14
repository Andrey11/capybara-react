const bodyFilterInitialState = {
  panel: 'SEARCH_RESULTS_PANEL',
  advancedSearchPanelVisible: false
};

const bodyFilter = (state = bodyFilterInitialState, action) => {
  switch (action.type) {
    case 'SHOW_ADVANCED_SEARCH_PANEL':
      return Object.assign({}, state, {
        advancedSearchPanelVisible: true
      });
    case 'HIDE_ADVANCED_SEARCH_PANEL':
      return Object.assign({}, state, {
        advancedSearchPanelVisible: false
      });

    case 'SHOW_SEARCH_RESULTS_PANEL':
      return Object.assign({}, state, {
        panel: 'SEARCH_RESULTS_PANEL'
      });
    default:
      return state
  }
}

export default bodyFilter
