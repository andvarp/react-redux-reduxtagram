import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

export const histoy = syncHistoryWithStore(browserHistory, store);

export default store;
