import { connect } from 'react-redux'
import { hideAdvancedSearchPanel } from '../../actions'
import GRButton from '../../components/ui/GRButton'

const mapStateToProps = (state, ownProps) => ({
  text: 'Action'
})

const mapDispatchToProps = {
  onClick: hideAdvancedSearchPanel
}

const AdvancedSearchActionButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GRButton)

export default AdvancedSearchActionButtonContainer
