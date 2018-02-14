import React from 'react'
import { connect } from 'react-redux'
import { onSidePanelNodeSelected,
         onSidePanelSearchHeaderCollapsed
       } from '../../actions'
import GRTree from '../../components/ui/list/GRTree'
import GRTreeItem from '../../components/ui/list/GRTreeItem'

const SidePanelRecentSearchContainer = ({ title,
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
  nodeProps.title = 'Recent Search Node'
  nodeProps.open = state.layout.sidePanel.sidePanelRecentSearchNodeOpen;
  let childrenList = state.recentSearchData.recent.recentSearches;
  nodeProps.children = childrenList.map((recentSearch) => {
    return (
      <GRTreeItem
        title={recentSearch.name}
        id={recentSearch.id}
        onClick={onSidePanelNodeSelected}
        key={recentSearch.id} />
    );
  });

  return nodeProps;
};

const mapDispatchToProps = {
  onOpening: () => onSidePanelSearchHeaderCollapsed({sidePanelRecentSearchNodeOpen: true}),
  onClosing: () => onSidePanelSearchHeaderCollapsed({sidePanelRecentSearchNodeOpen: false}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelRecentSearchContainer)
