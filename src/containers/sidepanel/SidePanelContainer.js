import React from 'react'
import { connect } from 'react-redux'

import SidePanel from '../../components/sidepanel/SidePanel'
import SidePanelSearchContainer from './SidePanelSearchContainer'
import SidePanelCaseDetailsContainer from './case/SidePanelCaseDetailsContainer'


const mapStateToProps = (state) => {
  let activePanelName = state.sidePanelState.activePanel.name;

  if (activePanelName === 'CASE') {
    return {activePanel: <SidePanelCaseDetailsContainer />}
  }

  return {activePanel: <SidePanelSearchContainer />}
};

const SidePanelContainer = connect(
  mapStateToProps
)(SidePanel)

export default SidePanelContainer
