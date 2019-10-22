import { createStore, combineReducers, applyMiddleware } from 'redux'
import sentimentStatsRecuer from './reducers/sentimentStatsReducer'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import testSaga from './sagas/testSaga'
import durationStatsSaga from './sagas/durationStatsSaga'
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const rootReducer = combineReducers({sentimentStats: sentimentStatsRecuer})
// This would produce the following state object

const middleWare = applyMiddleware(...middlewares);


const store = createStore(rootReducer, middleWare)


sagaMiddleware.run(durationStatsSaga);




export default store;