import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelCaseNodeSelected,
         onSidePanelSearchHeaderCollapsed
       } from '../../actions'
import GRTree from '../../components/ui/list/GRTree'
import GRTreeItem from '../../components/ui/list/GRTreeItem'
// import GRTreeItemContainer from '../ui/list//GRTreeItemContainer'

const SidePanelCaseContainer = ({
    title,
    open,
    children,
    onOpening,
    onClosing,
    onSidePanelCaseNodeSelected }) => {

  return (
    <GRTree
      title={title}
      open={open}
      children={children}
      onOpening={onOpening}
      onClosing={onClosing} />
    );
}

const mapStateToProps = (state, ownProps) => {
  let nodeProps = {};
  nodeProps.title = 'Case Node'
  nodeProps.open = state.layout.sidePanel.sidePanelCaseNodeOpen;
  let childrenList = state.caseData.recent.cases;
  nodeProps.children = childrenList.map((caseItem) => {
    return (
      <GRTreeItem
        title={caseItem.name}
        id={caseItem.id}
        onClick={() => onSidePanelCaseNodeSelected(caseItem.id)}
        key={caseItem.id} />
    );
  });

  return nodeProps;
};

const mapDispatchToProps = {
  onOpening: () => onSidePanelSearchHeaderCollapsed({sidePanelCaseNodeOpen: true}),
  onClosing: () => onSidePanelSearchHeaderCollapsed({sidePanelCaseNodeOpen: false}),
  onSidePanelCaseNodeSelected: onSidePanelCaseNodeSelected
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelCaseContainer)
