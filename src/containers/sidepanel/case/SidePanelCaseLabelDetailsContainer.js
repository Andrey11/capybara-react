import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelHeaderCollapsed } from '../../../actions'
import GRTree from '../../../components/ui/list/GRTree'
import GRTreeItem from '../../../components/ui/list/GRTreeItem'
import { faBookmark } from '@fortawesome/fontawesome-free-solid'
const emptyCaseData = {
  name: '',
  folders: [],
  labels: []
}

const SidePanelCaseLabelDetailsContainer = ({
    children,
    open,
    onOpening,
    onClosing }) => {

  return (
    <GRTree
      key={'labels'}
      title="LABELS"
      open={open}
      children={children}
      onOpening={onOpening}
      onClosing={onClosing}
      triggerIcon={faBookmark}
    />
  )
}

const mapStateToProps = (state) => {
  let nodeProps = {};
  let currentCase = state.caseData.currentCase.data || emptyCaseData
  let caseLabels = currentCase.labels

  nodeProps.open = state.caseData.currentCase.labelNodeOpen

  nodeProps.children = caseLabels.map((label) => {
    return (
      <GRTreeItem
        title={label.labelName}
        id={label.labelId}
        // onClick={() => onSidePanelCaseNodeSelected(caseItem.id)}
        key={label.labelId} />
    )
  })

  return nodeProps;
}

const mapDispatchToProps = {
  onOpening: () => onSidePanelHeaderCollapsed({labelNodeOpen: true}),
  onClosing: () => onSidePanelHeaderCollapsed({labelNodeOpen: false}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelCaseLabelDetailsContainer)
