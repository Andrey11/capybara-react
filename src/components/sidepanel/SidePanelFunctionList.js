import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SidePanelFunctionList extends Component {

  componentDidMount() {
    if (this.props.shouldLoad) {
      this.props.loadEntitlements();
    }
  }

  render() {

    const { nodes, shouldLoad } = this.props;

    if (shouldLoad) {
      return <div>LOADING</div>
    }

    return (
      <div>
        { nodes }
      </div>
    );
  }
}

SidePanelFunctionList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.element).isRequired
}

SidePanelFunctionList.defaultProps = {
  nodes: []
}

export default SidePanelFunctionList
