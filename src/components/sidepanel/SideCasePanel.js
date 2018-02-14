import React, { Component } from 'react'
import SidePanelHeaderContainer from '../../containers/sidepanel/SidePanelHeaderContainer'
import SideCollapsedPanel from './SideCollapsedPanel'
import PropTypes from 'prop-types'

import './SideCasePanel.css'

class SideCasePanel extends Component {

  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    if (this.props.shouldLoadCase) {
      this.props.loadCase()
    }
  }

  render() {

    const { isMinimized, onBackButtonClick, children } = this.props

    return (
      <div>
        <SidePanelHeaderContainer
          title='CASE'
          showBackButton={true}
          onBackButtonClick={onBackButtonClick}
        />
        { isMinimized ? (
          <SideCollapsedPanel text='CASE' />
        ) : (
          children
        ) }
      </div>
    )
  }
}

SideCasePanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  isMinimized: PropTypes.bool.isRequired,
  loadCase: PropTypes.func.isRequired,
  onBackButtonClick: PropTypes.func,
  shouldLoadCase: PropTypes.bool.isRequired
}

export default SideCasePanel
