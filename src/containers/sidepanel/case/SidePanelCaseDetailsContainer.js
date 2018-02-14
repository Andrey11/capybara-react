import React from 'react'
import { connect } from 'react-redux'
import { loadCase, closeCase } from '../../../actions'
import SideCasePanel from '../../../components/sidepanel/SideCasePanel'
import SidePanelCaseFolderDetailsContainer from './SidePanelCaseFolderDetailsContainer'
import SidePanelCaseLabelDetailsContainer from './SidePanelCaseLabelDetailsContainer'

import GRTreeItem from '../../../components/ui/list/GRTreeItem'
import GRLoader from '../../../components/ui/GRLoader'

import '../../../components/ui/list/GRTreeItem.css'


const mapStateToProps = (state) => {
  let children = []
  let isLoading = state.caseData.currentCase.isLoading
  let shouldLoadCase = state.caseData.currentCase.shouldLoadCase
  let currentCase = state.caseData.currentCase.data ||
  {
    name: '',
    folders: [],
    labels: []
  }


  children.push(<GRLoader key='caseloader' isLoading={isLoading} />)

  let caze = (
    <GRTreeItem key={'casedetails'}
      className="CaseDetailsItem"
      title={currentCase.name || ''} />)

  children.push(caze)

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
