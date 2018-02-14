import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelNodeSelected,
         onSidePanelSearchHeaderCollapsed
       } from '../../actions'
import GRTree from '../../components/ui/list/GRTree'
import GRTreeItem from '../../components/ui/list/GRTreeItem'

const SidePanelSavedSearchContainer = ({ title,
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
  nodeProps.title = 'Saved Search Node'
  nodeProps.open = state.layout.sidePanel.sidePanelSavedSearchNodeOpen;
  let childrenList = state.savedSearchData.recent.savedSearches;
  nodeProps.children = childrenList.map((savedSearch) => {
    return (
      <GRTreeItem
        title={savedSearch.name}
        id={savedSearch.id}
        onClick={onSidePanelNodeSelected}
        key={savedSearch.id} />
    );
  });

  return nodeProps;
};

const mapDispatchToProps = {
  onOpening: () => onSidePanelSearchHeaderCollapsed({sidePanelSavedSearchNodeOpen: true}),
  onClosing: () => onSidePanelSearchHeaderCollapsed({sidePanelSavedSearchNodeOpen: false}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelSavedSearchContainer)
