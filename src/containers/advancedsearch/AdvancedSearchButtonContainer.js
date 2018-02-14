import { connect } from 'react-redux'
import { showAdvancedSearchPanel } from '../../actions'
import GRButton from '../../components/ui/GRButton'

const mapStateToProps = (state, ownProps) => ({
  text: 'Advanced Search'
})

const mapDispatchToProps = {
  onClick: showAdvancedSearchPanel
}

const AdvancedSearchButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GRButton)

export default AdvancedSearchButtonContainer
