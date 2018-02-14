import { LOAD_ROLE_ENTITLEMENTS } from '../actions'

const CAPYBARA = window.Capybara;

function roleEntitlements (state = {entitlements: []}, action) {

  switch (action.type) {
    case LOAD_ROLE_ENTITLEMENTS:
      return Object.assign({}, state, { entitlements: CAPYBARA.roleEntitlements });

    default:
      return state;
  }
}

export default roleEntitlements
