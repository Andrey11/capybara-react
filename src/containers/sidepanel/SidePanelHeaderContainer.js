import { connect } from 'react-redux'
import {
  maximizeSidePanel,
  minimizeSidePanel,
  onButtonClick
} from '../../actions'
import SidePanelHeader from '../../components/sidepanel/SidePanelHeader'

const mapStateToProps = (state, ownProps) => {
  
  return {
    isMinimized: state.layout.sidePanel.displayMode === 'MINIMIZED',
    icon: state.layout.sidePanel.headerButtonIcon,
    showBackButton: ownProps.showBackButton,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    maximizeSidePanel: () => dispatch(maximizeSidePanel()),
    minimizeSidePanel: () => dispatch(minimizeSidePanel()),
    onBackButtonClick: ownProps.onBackButtonClick || onButtonClick,
  }
}

const SidePanelHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelHeader)

export default SidePanelHeaderContainer
