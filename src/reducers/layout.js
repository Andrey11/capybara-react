import { combineReducers } from 'redux'

const sidePanelInitialState = {
  displayMode: 'MAXIMIZED',
  headerButtonIcon: 'chevron-left',
  sidePanelWidth: 250,
  sidePanelMaximizedWidth: 250,
  sidePanelCaseNodeOpen: true,
  sidePanelPoliciesNodeOpen: true,
  sidePanelSavedSearchNodeOpen: true,
  sidePanelRecentSearchNodeOpen: true
}

const mainPanelInitialState = {
  test: 'test'
}

function sidePanel (state = sidePanelInitialState, action) {

  switch (action.type) {
    case 'MINIMIZE_SIDE_PANEL':
      return Object.assign({}, state, {
        displayMode: 'MINIMIZED',
        headerButtonIcon: 'chevron-right',
        sidePanelWidth: 36 })

    case 'MAXIMIZE_SIDE_PANEL':
      return Object.assign({}, state, {
        displayMode: 'MAXIMIZED',
        headerButtonIcon: 'chevron-left',
        sidePanelWidth: state.sidePanelMaximizedWidth })

    // case 'TOGGLE_SIDE_PANEL_DISPLAY_MODE':
    //   return Object.assign({}, state, {
    //     displayMode: state.displayMode === 'MINIMIZED' ? 'MAXIMIZED' : 'MINIMIZED',
    //     headerButtonIcon: state.displayMode === 'MINIMIZED' ? 'chevron-left' : 'chevron-right',
    //     sidePanelWidth: state.displayMode === 'MINIMIZED' ? state.sidePanelMaximizedWidth : 36 })

    case 'SIDE_PANEL_RESIZE':
      return Object.assign({}, state, { sidePanelMaximizedWidth: action.size })

    case 'SIDE_PANEL_SEARCH_HEADER_COLLAPSED':
    /**
     * action.stateParam = {sidePanelComponentNodeOpen: boolean}
     * Where sidePanelComponentNodeOpen is one of:
     * - sidePanelCaseNodeOpen
     * - sidePanelPoliciesNodeOpen
     * - sidePanelSavedSearchNodeOpen
     * - sidePanelRecentSearchNodeOpen
     */
      return Object.assign({}, state, action.stateParam)

    default:
      return state
  }
}

function mainPanel (state = mainPanelInitialState, action) {

  switch (action.type) {
    case 'MINIMIZE_SIDE_PANEL':
      return Object.assign({}, state, {
        displayMode: 'MINIMIZED',
        buttonText: '>>>',
        sidePanelWidth: 36 })

    default:
      return state
  }
}

const layout = combineReducers({
  sidePanel,
  mainPanel
})

export default layout
