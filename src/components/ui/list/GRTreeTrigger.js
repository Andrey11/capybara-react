import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class GRTreeTrigger extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='gr__tree-trigger'>
        { this._getTriggerOptionalIcon(this.props.triggerIcon) }
        <div className='gr__tree-trigger-text'>
          {this.props.title}
        </div>
        <FontAwesomeIcon
          className={this._getIconCls(this.props.isOpen)}
          icon={faChevronUp} />
      </div>
    )
  }

  _getTriggerOptionalIcon(triggerIcon) {
    if (triggerIcon) {
      return (<FontAwesomeIcon icon={triggerIcon} fixedWidth/>)
    }

    return null
  }

  _getIconCls(isOpen) {
    return 'gr__tree-trigger-icon' + (isOpen ? ' open' : '')
  }
}

GRTreeTrigger.propTypes = {
  triggerIcon: PropTypes.object,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

GRTreeTrigger.defaultProps = {
  triggerIcon: null,
  title: '',
  isOpen: true,
}

export default connect()(GRTreeTrigger)
