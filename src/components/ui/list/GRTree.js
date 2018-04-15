import React, { Component } from 'react'
import { connect } from 'react-redux'
import GRTreeTrigger from './GRTreeTrigger'
import Collapsible from 'react-collapsible'
import PropTypes from 'prop-types'

class GRTree extends Component {

  constructor(props) {
    super(props)
    this.onOpening = this.onOpening.bind(this)
    this.onClosing = this.onClosing.bind(this)
  }

  onOpening() {
    this.props.onOpening()
  }

  onClosing() {
    this.props.onClosing()
  }

  render() {
    return (
      <Collapsible
        trigger={
          <GRTreeTrigger
            title={this.props.title}
            isOpen={this.props.open}
            triggerIcon={this.props.triggerIcon}
          />
        }
        open={this.props.open}
        onOpening={this.onOpening}
        onClosing={this.onClosing}>
        { this.props.children }
      </Collapsible>
    )
  }
}

GRTree.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  triggerIcon: PropTypes.object,
  open: PropTypes.bool,
  onOpening: PropTypes.func,
  onClosing: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default connect()(GRTree)
