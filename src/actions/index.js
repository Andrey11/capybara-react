export const LOAD_ROLE_ENTITLEMENTS = 'LOAD_ROLE_ENTITLEMENTS'
export const loadRoleEntitlements = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_ROLE_ENTITLEMENTS
  })
}

export const SHOW_ADVANCED_SEARCH_PANEL = 'SHOW_ADVANCED_SEARCH_PANEL'
export const showAdvancedSearchPanel = () => (dispatch, getState) => {
  dispatch({
    type: SHOW_ADVANCED_SEARCH_PANEL
  })
}

export const HIDE_ADVANCED_SEARCH_PANEL = 'HIDE_ADVANCED_SEARCH_PANEL'
export const hideAdvancedSearchPanel = () => (dispatch, getState) => {
  dispatch({
    type: HIDE_ADVANCED_SEARCH_PANEL
  })
}

export const SUBMIT_ADVANCED_SEARCH = 'SUBMIT_ADVANCED_SEARCH'
export const performSearch = () => (dispatch, getState) => {
  dispatch({
    type: SUBMIT_ADVANCED_SEARCH
  })
}

export const MAXIMIZE_SIDE_PANEL = 'MAXIMIZE_SIDE_PANEL'
export const maximizeSidePanel = () => (dispatch, getState) => {
  dispatch({
    type: MAXIMIZE_SIDE_PANEL
  })
}

export const MINIMIZE_SIDE_PANEL = 'MINIMIZE_SIDE_PANEL'
export const minimizeSidePanel = () => (dispatch, getState) => {
  dispatch({
    type: MINIMIZE_SIDE_PANEL
  })
}

export const SIDE_PANEL_RESIZE = 'SIDE_PANEL_RESIZE'
export const onSidePanelResize = size => (dispatch, getState) => {
  dispatch({
    type: SIDE_PANEL_RESIZE,
    size
  })
}

export const SET_ACTIVE_SIDE_PANEL = 'SET_ACTIVE_SIDE_PANEL'
export const onSetActiveSidePanel = (name, options) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_SIDE_PANEL,
    panelName: name,
    options: options
  })
}

export const SIDE_PANEL_SEARCH_HEADER_COLLAPSED = 'SIDE_PANEL_SEARCH_HEADER_COLLAPSED'
export const onSidePanelSearchHeaderCollapsed = stateParam => (dispatch, getState) => {
  dispatch({
    type: SIDE_PANEL_SEARCH_HEADER_COLLAPSED,
    stateParam: stateParam
  })
}

export const SIDE_PANEL_CASE_HEADER_COLLAPSED = 'SIDE_PANEL_CASE_HEADER_COLLAPSED'
export const onSidePanelHeaderCollapsed = stateParam => (dispatch, getState) => {
  dispatch({
    type: SIDE_PANEL_CASE_HEADER_COLLAPSED,
    stateParam: stateParam
  })
}

export const SIDE_PANEL_NODE_SELECTED = 'SIDE_PANEL_NODE_SELECTED'
export const LOAD_CASE = 'LOAD_CASE'
export const CASE_ITEM_SELECTED = 'CASE_ITEM_SELECTED'
export const CASE_LOADED = 'CASE_LOADED'
export const onSidePanelNodeSelected = nodeId => (dispatch, getState) => {
  dispatch({
    type: SIDE_PANEL_NODE_SELECTED,
    nodeId: nodeId
  })
}

export const BUTTON_CLICKED = 'BUTTON_CLICKED'
export const onButtonClick = data => (dispatch, getState) => {
  dispatch({
    type: BUTTON_CLICKED,
    data
  })
}

export const SIDE_PANEL_CASE_PANEL_CLOSE = 'SIDE_PANEL_CASE_PANEL_CLOSE'
export const onSidePanelCasePanelClose = () => (dispatch, getState) => {
  dispatch({
    type: SIDE_PANEL_CASE_PANEL_CLOSE
  })
}

export const SET_CASE_TO_LOAD = 'SET_CASE_TO_LOAD'
export const onSidePanelCaseNodeSelected = nodeId => (dispatch, getState) => {
  dispatch({
    type: SET_CASE_TO_LOAD,
    caseId: nodeId
  })
  dispatch(onSetActiveSidePanel('CASE'))
}


export const SHOW_CASE_SETTINGS_MENU = 'SHOW_CASE_SETTINGS_MENU'
export const showCaseSettings = (event, source) => (dispatch, getState) => {
  dispatch({
    type: SHOW_CASE_SETTINGS_MENU,
    top: event.currentTarget.offsetTop,
    left: event.currentTarget.offsetLeft
  })
}

export const HIDE_CASE_SETTINGS_MENU = 'HIDE_CASE_SETTINGS_MENU'
export const hideCaseSettings = (opt) => (dispatch, getState) => {
  dispatch({
    type: HIDE_CASE_SETTINGS_MENU
  })
}

export const CLOSE_CASE = 'CLOSE_CASE'
export const closeCase = () => (dispatch, getState) => {
  dispatch(resetCurrentCase())
  dispatch(onSetActiveSidePanel('SEARCH'))
}


export const RESET_CURRENT_CASE = 'RESET_CURRENT_CASE'
export const resetCurrentCase = () => (dispatch, getState) => {
  dispatch({
    type: RESET_CURRENT_CASE
  })
}

export const loadCase = id => (dispatch, getState) => {
  let caseId = id || getState().caseData.currentCase.caseId
  dispatch({
    type: LOAD_CASE,
    caseId: caseId
  })
  setTimeout(() => dispatch(loadCaseData(caseId)), 700)
}

const loadCaseData = caseId => ({
  type: CASE_LOADED,
  data: getCaseById(caseId)
})

const getCaseById = caseId => {
  let cases = {
    caseId1 : {
      id: 'caseId1',
      name: 'Case 1',
      folders: [{
        folderId: 'folderId1',
        folderName: 'Folder 1'
      },{
        folderId: 'folderId2',
        folderName: 'Folder 2'
      }],
      labels: [{
        labelId: 'labelId1',
        labelName: 'Label 1'
      },{
        labelId: 'labelId2',
        labelName: 'Label 2'
      }]
    },
    caseId2 : {
      id: 'caseId2',
      name: 'Case 2',
      folders: [{
        folderId: 'folderId1',
        folderName: 'Folder 1'
      },{
        folderId: 'folderId2',
        folderName: 'Folder 2'
      }],
      labels: [{
        labelId: 'labelId1',
        labelName: 'Label 1'
      },{
        labelId: 'labelId2',
        labelName: 'Label 2'
      }]
    },
    caseId3 : {
      id: 'caseId3',
      name: 'Case 3',
      folders: [{
        folderId: 'folderId1',
        folderName: 'Folder 1'
      },{
        folderId: 'folderId2',
        folderName: 'Folder 2'
      }],
      labels: [{
        labelId: 'labelId1',
        labelName: 'Label 1'
      },{
        labelId: 'labelId2',
        labelName: 'Label 2'
      }]
    }
  }

  return cases[caseId]
}
