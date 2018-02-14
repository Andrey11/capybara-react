import { connect } from 'react-redux'
import AdvancedSearchPanel from '../../components/AdvancedSearchPanel'

const mapStateToProps = (state) => ({
  visible: state.bodyFilter.advancedSearchPanelVisible
})

const AdvancedSearchPanelContainer = connect(
  mapStateToProps
)(AdvancedSearchPanel)

export default AdvancedSearchPanelContainer
