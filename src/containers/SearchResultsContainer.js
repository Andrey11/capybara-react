import { connect } from 'react-redux'
import SearchResultsPanel from '../components/SearchResultsPanel'

const mapStateToProps = (state) => ({
  results: state.searchResults.meassages
})

const SearchResultsContainer = connect(
  mapStateToProps
)(SearchResultsPanel)

export default SearchResultsContainer
