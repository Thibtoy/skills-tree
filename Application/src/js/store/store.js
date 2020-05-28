import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import treeMiddleware from './middlewares/tree'
import authMiddleware from './middlewares/auth'
import appMiddleware from './middlewares/app'
import rootReducer from './root'

const loggerMiddleware = createLogger()

export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
      applyMiddleware(
        loggerMiddleware,
        appMiddleware,
        authMiddleware,
        treeMiddleware
      )
  );
};