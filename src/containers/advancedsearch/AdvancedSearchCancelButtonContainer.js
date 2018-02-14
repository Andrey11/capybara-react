import { connect } from 'react-redux'
import { hideAdvancedSearchPanel } from '../../actions'
import GRButton from '../../components/ui/GRButton'

const mapStateToProps = (state, ownProps) => ({
  text: 'Cancel'
})

const mapDispatchToProps = {
  onClick: hideAdvancedSearchPanel
}

const AdvancedSearchCancelButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GRButton)

export default AdvancedSearchCancelButtonContainer
