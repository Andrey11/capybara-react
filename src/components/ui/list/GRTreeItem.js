import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GRButton from '../GRButton'

class GRTreeItem extends Component {

  constructor(props) {
    super(props);

    this.onGRTreeItemClicked = this.onGRTreeItemClicked.bind(this);
  }

  onGRTreeItemClicked (e) {
    if (this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.dispatch(this.props.onClick(this.props.id))
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.onGRTreeItemClicked}>
        {this.props.title}
        <GRButton text="HELLO" />
      </div>
    )
  }
}

GRTreeItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

GRTreeItem.defaultProps = {
  className: 'gr-ui__tree-item'
}

export default connect()(GRTreeItem)
