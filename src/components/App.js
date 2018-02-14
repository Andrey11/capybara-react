import React from 'react'
import SidePanelContainer from '../containers/sidepanel/SidePanelContainer'
import MainPanelContainer from '../containers/MainPanelContainer'
import SplitPane from 'react-split-pane';
import PropTypes from 'prop-types'

const App = ({ allowResizeSidePanel, sidePanelWidth, onSidePanelResize }) => {
  return (
    <SplitPane
      split="vertical"
      allowResize={allowResizeSidePanel}
      minSize={36}
      size={sidePanelWidth}
      defaultSize={300}
      onChange={onSidePanelResize}>

      <SidePanelContainer />
      <MainPanelContainer />

    </SplitPane>
  )
}

App.propTypes = {
  allowResizeSidePanel: PropTypes.bool.isRequired,
  sidePanelWidth: PropTypes.number.isRequired,
  onSidePanelResize: PropTypes.func.isRequired
}

export default App
