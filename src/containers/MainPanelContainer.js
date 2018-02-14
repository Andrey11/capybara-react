import { connect } from 'react-redux'
import MainPanel from '../components/MainPanel'

const mapStateToProps = (state) => ({
  mode: state.bodyFilter.panel
})

const MainPanelContainer = connect(
  mapStateToProps
)(MainPanel)

export default MainPanelContainer
