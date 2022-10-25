// Infer the `RootState` and `AppDispatch` types from the store itself
import {store} from '../store';

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export enum RequestStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESSFULL = 'successfull',
  FAILED = 'failed',
}
