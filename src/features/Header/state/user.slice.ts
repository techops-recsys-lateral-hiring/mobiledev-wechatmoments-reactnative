import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {IUser, RequestStatus} from '../../../types';
import {fetchUser} from './user.thunk';

interface IUserState {
  data: IUser;
  status: RequestStatus;
}

const initialState: IUserState = {
  data: {},
  status: RequestStatus.IDLE,
};
const userSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder.addCase(fetchUser.pending, nextState => {
      nextState.data = {};
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchUser.fulfilled, (nextState, action) => {
      nextState.data = action.payload;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(fetchUser.rejected, nextState => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export default userSlice.reducer;
