import { connect } from 'react-redux'
import { onSidePanelResize } from '../actions'
import App from '../components/App'

const mapStateToProps = (state) => ({
  allowResizeSidePanel: state.layout.sidePanel.displayMode === 'MAXIMIZED',
  sidePanelWidth: state.layout.sidePanel.displayMode === 'MINIMIZED' ? 36 : state.layout.sidePanel.sidePanelMaximizedWidth,
})

const mapDispatchToProps = {
  onSidePanelResize: onSidePanelResize
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
