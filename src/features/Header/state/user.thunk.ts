import {createAsyncThunk} from '@reduxjs/toolkit';

import {getRequest} from '../../../network/Network';
import {IUser} from '../../../types';
import {AxiosError} from 'axios';

export const fetchUser = createAsyncThunk(
  'user',
  async (username: string, thunkAPI) => {
    try {
      const response = await getRequest(`user/${username}`);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`),
        );
      }
      return response.data as IUser;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
