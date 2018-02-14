import { combineReducers } from 'redux'
import {
  SET_CASE_TO_LOAD,
  LOAD_CASE,
  CASE_LOADED,
  CASE_ITEM_SELECTED,
  RESET_CURRENT_CASE,
  SIDE_PANEL_CASE_HEADER_COLLAPSED
} from '../actions'

const initCase = {
  caseId: null,
  isLoading: false,
  shouldLoadCase: false,
  selectedItem: null,
  folderNodeOpen: true,
  labelNodeOpen: true,
  data: null
}

function currentCase (state = initCase, action) {

  switch (action.type) {
    case SET_CASE_TO_LOAD: {
      return Object.assign({}, state, {
        caseId: action.caseId,
        selectedItem: null,
        shouldLoadCase: true,
        folderNodeOpen: true,
        labelNodeOpen: true,
        data: null
      })
    }
    case RESET_CURRENT_CASE: {
      return Object.assign({}, state, {
        caseId: null,
        shouldLoadCase: false,
        isLoading: false,
        selectedItem: null,
        folderNodeOpen: true,
        labelNodeOpen: true,
        data: null
      })
    }
    case LOAD_CASE:
      return Object.assign({}, state, {
        caseId: action.caseId,
        shouldLoadCase: false,
        isLoading: true
      })
    case CASE_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      })
    case CASE_ITEM_SELECTED:
      return Object.assign({}, state, {
        selectedItem: action.selectedItem
      })
    case SIDE_PANEL_CASE_HEADER_COLLAPSED:
      return Object.assign({}, state, action.stateParam)
    default:
      return state
  }
}

const recentCasesInitialState = {
  cases: [
    {name: 'Case 1', id: 'caseId1'},
    {name: 'Case 2', id: 'caseId2'},
    {name: 'Case 3', id: 'caseId3'}
  ]
}

function recent (state = recentCasesInitialState, action) {
  return state
}


const caseData = combineReducers({
  currentCase,
  recent,
})

export default caseData
