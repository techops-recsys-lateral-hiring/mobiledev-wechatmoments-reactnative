import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {ITweet, RequestStatus} from '../../../types';
import {fetchUserTweets} from './tweets.thunk';

interface ITweetsState {
  data: Array<ITweet>;
  status: RequestStatus;
}

const initialState: ITweetsState = {
  data: [],
  status: RequestStatus.IDLE,
};
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ITweetsState>) => {
    builder.addCase(fetchUserTweets.pending, nextState => {
      nextState.data = [];
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchUserTweets.fulfilled, (nextState, action) => {
      nextState.data = action.payload;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(fetchUserTweets.rejected, nextState => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export default tweetsSlice.reducer;
