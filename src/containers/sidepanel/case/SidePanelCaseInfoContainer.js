import { connect } from 'react-redux'
import { showCaseSettings, hideCaseSettings } from '../../../actions'
import SideCaseInfoPanel from '../../../components/sidepanel/SideCaseInfoPanel'

const mapStateToProps = (state) => {
  let caseInfo = {}
  let currentCase = state.caseData.currentCase
  let caseMenu = state.caseData.caseSettingsMenu
  let caseData = currentCase.data || {}

  caseInfo.isCaseSettingsMenuVisible = caseMenu.isCaseSettingsMenuVisible
  caseInfo.name = caseData.name || ''
  caseInfo.caseSettingsMenuPosition = {top: caseMenu.top, left: caseMenu.left}

  return caseInfo
}

const mapDispatchToProps = {
  showCaseSettings: showCaseSettings,
  hideCaseSettings: hideCaseSettings
}

const SidePanelCaseInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCaseInfoPanel)

export default SidePanelCaseInfoContainer
