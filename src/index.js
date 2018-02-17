import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import capybaraApp from './reducers'
import registerServiceWorker from './registerServiceWorker'
import { loadState, saveState} from './localStorage'

import './styles/css/main.css'

const persistedState = loadState()
const store = createStore(
  capybaraApp,
  persistedState,
  applyMiddleware(thunk)
)

store.subscribe( () => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
