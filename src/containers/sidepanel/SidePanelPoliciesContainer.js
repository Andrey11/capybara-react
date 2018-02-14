import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelNodeSelected,
         onSidePanelSearchHeaderCollapsed
       } from '../../actions'
import GRTree from '../../components/ui/list/GRTree'
import GRTreeItem from '../../components/ui/list/GRTreeItem'

const SidePanelPoliciesContainer = ({ title,
    open,
    children,
    onOpening,
    onClosing }) => {
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
  nodeProps.title = 'Policies Node'
  nodeProps.open = state.layout.sidePanel.sidePanelPoliciesNodeOpen;
  let childrenList = state.policyData.recent.policies;
  nodeProps.children = childrenList.map((policyItem) => {
    return (
      <GRTreeItem
        title={policyItem.name}
        id={policyItem.id}
        onClick={onSidePanelNodeSelected}
        key={policyItem.id} />
    );
  });

  return nodeProps;
};

const mapDispatchToProps = {
  onOpening: () => onSidePanelSearchHeaderCollapsed({sidePanelPoliciesNodeOpen: true}),
  onClosing: () => onSidePanelSearchHeaderCollapsed({sidePanelPoliciesNodeOpen: false}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelPoliciesContainer)
