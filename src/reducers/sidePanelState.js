import { combineReducers } from 'redux'
import { SET_ACTIVE_SIDE_PANEL, SIDE_PANEL_NODE_SELECTED } from '../actions'

const activePanelInitialState = {
  name: 'SEARCH',
  selectedItem: null
}

function activePanel (state = activePanelInitialState, action) {
  switch (action.type) {
    case SET_ACTIVE_SIDE_PANEL:
      return Object.assign({}, state, {
        name: action.panelName,
        selectedItem: null
      });
    case SIDE_PANEL_NODE_SELECTED:
      return Object.assign({}, state, {
        selectedItem: action.nodeId
      });
    default:
      return state;
  }
}


function selectedItem (state = {}, action) {

  switch (action.type) {
    // case SET_ACTIVE_SIDE_PANEL:
    //   return Object.assign({}, state, {
    //     activePanelName: action.activePanelName
    //   });
    case SIDE_PANEL_NODE_SELECTED:
      return Object.assign({}, state, {
        id: action.nodeId,
        activePanelName: action.activePanelName
      });
    // case LOAD_CASE:
    //   if (action.activePanelName !== CASE) {
    //     return state;
    //   }
    //   return Object.assign({}, state, {
    //     activePanelName: action.activePanelName
    //   });
    default:
      return state;
  }
}

const sidePanelState = combineReducers({
  activePanel,
  selectedItem,
})

export default sidePanelState
