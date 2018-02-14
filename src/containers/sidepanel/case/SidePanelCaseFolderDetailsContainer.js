import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelHeaderCollapsed } from '../../../actions'
import GRTree from '../../../components/ui/list/GRTree'
import GRTreeItem from '../../../components/ui/list/GRTreeItem'

const emptyCaseData = {
  name: '',
  folders: [],
  labels: []
}

const SidePanelCaseFolderDetailsContainer = ({
    children,
    open,
    onOpening,
    onClosing }) => {

  return (
    <GRTree
      key={'folders'}
      title="FOLDERS"
      open={open}
      children={children}
      onOpening={onOpening}
      onClosing={onClosing}
    />
  )
}

const mapStateToProps = (state) => {
  let nodeProps = {};
  let currentCase = state.caseData.currentCase.data || emptyCaseData
  let caseFolders = currentCase.folders

  nodeProps.open = state.caseData.currentCase.folderNodeOpen

  nodeProps.children = caseFolders.map((folder) => {
    return (
      <GRTreeItem
        title={folder.folderName}
        id={folder.folderId}
        // onClick={() => onSidePanelCaseNodeSelected(caseItem.id)}
        key={folder.folderId} />
    )
  })

  return nodeProps;
}

const mapDispatchToProps = {
  onOpening: () => onSidePanelHeaderCollapsed({folderNodeOpen: true}),
  onClosing: () => onSidePanelHeaderCollapsed({folderNodeOpen: false}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelCaseFolderDetailsContainer)
