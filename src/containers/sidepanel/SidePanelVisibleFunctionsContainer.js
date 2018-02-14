import React from 'react'
import { connect } from 'react-redux'
import { loadRoleEntitlements } from '../../actions'
import SidePanelFunctionList from '../../components/sidepanel/SidePanelFunctionList'
import SidePanelCaseContainer from './SidePanelCaseContainer'
import SidePanelPoliciesContainer from './SidePanelPoliciesContainer'
import SidePanelSavedSearchContainer from './SidePanelSavedSearchContainer'
import SidePanelRecentSearchContainer from './SidePanelRecentSearchContainer'


const mapStateToProps = (state, ownProps) => {
  let nodes = state.roleEntitlements.entitlements;

  if (nodes.length === 0) {
    return { shouldLoad: true };
  }


  let containers = nodes;
  let data = [];
  for (var i=0; i<containers.length; i++) {
    let node = containers[i];

    if (node === 'CASE') {
      data.push( <SidePanelCaseContainer key='SidePanelCaseContainer' /> );
    }
    else if (node === 'POLICIES') {
      data.push( <SidePanelPoliciesContainer key='SidePanelPoliciesContainer' />)
    }
    else if (node === 'SAVED_SEARCH') {
      data.push( <SidePanelSavedSearchContainer key='SidePanelSavedSearchContainer' /> );
    }
    else if (node === 'RECENT_SEARCH') {
      data.push( <SidePanelRecentSearchContainer key='SidePanelRecentSearchContainer' /> );
    }
  }

  if (data.length !== 0) {
    return {
      shouldLoad: false,
      nodes: data
    };
  }
};

const mapDispatchToProps = {
  loadEntitlements: loadRoleEntitlements
}

const SidePanelVisibleFunctionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelFunctionList)

export default SidePanelVisibleFunctionsContainer
