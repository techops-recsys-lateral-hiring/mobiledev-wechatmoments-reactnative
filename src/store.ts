import {configureStore} from '@reduxjs/toolkit';

import tweetsReducer from './features/TweetList/state/tweets.slice';
import userReducer from './features/Header/state/user.slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
  },
});
