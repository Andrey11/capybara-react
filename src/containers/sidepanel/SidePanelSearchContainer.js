import { connect } from 'react-redux'
import SideSearchPanel from '../../components/sidepanel/SideSearchPanel'

const mapStateToProps = (state) => ({
  isMinimized: state.layout.sidePanel.displayMode === 'MINIMIZED'
});

const SidePanelSearchContainer = connect(
  mapStateToProps
)(SideSearchPanel)

export default SidePanelSearchContainer
