import { combineReducers } from 'redux'

function currentPolicy (state = {}, action) {
  return state;
}

const recentPolicyInitialState = {
  policies: [
    {name: 'Policy 1', id: 'policyId1'},
    {name: 'Policy 2', id: 'policyId2'},
    {name: 'Policy 3', id: 'policyId3'}
  ]
};

function recent (state = recentPolicyInitialState, action) {
  return state;
}


const policyData = combineReducers({
  currentPolicy,
  recent,
})

export default policyData
