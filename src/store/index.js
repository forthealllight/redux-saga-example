import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';
const logger=createLogger();
export default function configureStore(initialState) {
  // 注意：必须满足 redux@>=3.1.0 才可以将 middleware 作为 createStore 的最后一个参数传递
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, initialState, applyMiddleware(logger,sagaMiddleware)),
     runSaga: sagaMiddleware.run
   }
}
