
export const loadState = () => {
  try {
    const stateData = localStorage.getItem('state');
    if (stateData === null) {
      return undefined;
    }
    return JSON.parse(stateData);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    let caseId = state.caseData.currentCase.caseId || null
    let folderNodeOpen = state.caseData.currentCase.folderNodeOpen === true
    let labelNodeOpen = state.caseData.currentCase.labelNodeOpen === true

    let shouldLoadCase = caseId !== null
    let stateToSave = Object.assign({}, state, {
      caseData: {
        currentCase: {
          caseId: caseId,
          shouldLoadCase: shouldLoadCase,
          isLoading: false,
          selectedItem: null,
          folderNodeOpen: folderNodeOpen,
          labelNodeOpen: labelNodeOpen,
          data: null
        },
        recent: {
          ...state.caseData.recent
        }
      }
    })
    const stateData = JSON.stringify(stateToSave);
    localStorage.setItem('state', stateData);
  } catch (error) {

  }
}
