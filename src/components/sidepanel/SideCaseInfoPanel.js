import React from 'react'
import PropTypes from 'prop-types'
import { faEllipsisV } from '@fortawesome/fontawesome-free-solid'
import Button, { GRButtonTypes } from '../ui/GRButton'
import Menu from '../ui/GRMenu'

const SideCaseInfoPanel = ({
  name,
  showCaseSettings,
  hideCaseSettings,
  isCaseSettingsMenuVisible,
  caseSettingsMenuPosition }) => {

  return (
    <div className='sidepanel-case-info'>
      <span className='case-name'>{name}</span>
      <Button
        type={GRButtonTypes.ICON}
        icon={faEllipsisV}
        onClick={showCaseSettings}
      />
      <Menu
        className='case-settings-menu'
        style={caseSettingsMenuPosition}
        onMenuClose={hideCaseSettings}
        visible={isCaseSettingsMenuVisible}/>
    </div>
  )

}

SideCaseInfoPanel.propTypes = {
  name: PropTypes.string,
  isCaseSettingsMenuVisible: PropTypes.bool,
  showCaseSettings: PropTypes.func,
  hideCaseSettings: PropTypes.func,
  caseSettingsMenuPosition: PropTypes.object
}

export default SideCaseInfoPanel
