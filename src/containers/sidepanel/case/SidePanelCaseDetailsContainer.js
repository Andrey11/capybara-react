import React from 'react'
import { connect } from 'react-redux'
import { loadCase, closeCase } from '../../../actions'
import SideCasePanel from '../../../components/sidepanel/SideCasePanel'
import SidePanelCaseInfoContainer from './SidePanelCaseInfoContainer'
import SidePanelCaseFolderDetailsContainer from './SidePanelCaseFolderDetailsContainer'
import SidePanelCaseLabelDetailsContainer from './SidePanelCaseLabelDetailsContainer'

import GRLoader from '../../../components/ui/GRLoader'


const mapStateToProps = (state) => {
  let children = []
  let isLoading = state.caseData.currentCase.isLoading
  let shouldLoadCase = state.caseData.currentCase.shouldLoadCase

  children.push(<GRLoader key='caseloader' isLoading={isLoading} />)

  children.push(<SidePanelCaseInfoContainer key='caseinfo'/>)

  children.push(<SidePanelCaseFolderDetailsContainer key='123' />)

  children.push(<SidePanelCaseLabelDetailsContainer key='345' />)

  return {
    isMinimized: state.layout.sidePanel.displayMode === 'MINIMIZED',
    isLoading: isLoading,
    children: children,
    shouldLoadCase: shouldLoadCase
  }
}

const mapDispatchToProps = {
  loadCase: loadCase,
  onBackButtonClick: closeCase
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCasePanel)
// )(SidePanelCaseDetailsContainer)
