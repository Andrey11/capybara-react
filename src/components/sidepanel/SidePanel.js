import PropTypes from 'prop-types'

const SidePanel = ({ activePanel }) => (
  activePanel
)

SidePanel.propTypes = {
  activePanel: PropTypes.element.isRequired
}

export default SidePanel
