import {createAsyncThunk} from '@reduxjs/toolkit';

import {getRequest} from '../../../network/Network';
import {ITweet} from '../../../types';
import {AxiosError} from 'axios';

export const fetchUserTweets = createAsyncThunk(
  'userTweets',
  async (username: string, thunkAPI) => {
    try {
      const response = await getRequest(
        `https://thoughtworks-ios.herokuapp.com/user/${username}/tweets`,
      );
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`),
        );
      }
      return response.data as Array<ITweet>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
