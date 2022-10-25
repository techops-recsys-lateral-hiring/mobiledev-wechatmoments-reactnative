import {configureStore} from '@reduxjs/toolkit';

import tweetsReducer from './features/TweetList/state/tweets.slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
