import { connect } from 'react-redux'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
import {
  maximizeSidePanel,
  minimizeSidePanel,
  onButtonClick
} from '../../actions'
import SidePanelHeader from '../../components/sidepanel/SidePanelHeader'

const getIconClass = (cls) => {
  return cls === 'chevron-left' ? faChevronLeft : faChevronRight;
}

const mapStateToProps = (state, ownProps) => {

  return {
    isMinimized: state.layout.sidePanel.displayMode === 'MINIMIZED',
    icon: getIconClass(state.layout.sidePanel.headerButtonIcon),
    showBackButton: ownProps.showBackButton,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    maximizeSidePanel: () => dispatch(maximizeSidePanel()),
    // maximizeSidePanel: maximizeSidePanel,
    minimizeSidePanel: () => dispatch(minimizeSidePanel()),
    onBackButtonClick: ownProps.onBackButtonClick || onButtonClick,
  }
}

const SidePanelHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelHeader)

export default SidePanelHeaderContainer
