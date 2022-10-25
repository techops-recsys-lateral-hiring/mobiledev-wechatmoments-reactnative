import React, {ReactElement, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {BasicStyle, ITweet, RootState} from './../../../types';
import {Tweet} from './../../../features/Tweet/ui/Tweet';
import {useAppDispatch} from './../../../hooks';
import {fetchUserTweets} from './../../../features/TweetList/state/tweets.thunk';

interface ITweetListProps {
  tweets: Array<ITweet>;
}

function TweetListComponent({tweets}: ITweetListProps): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserTweets('jsmith'));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={tweet => <Tweet tweet={tweet.item} />}
      />
    </View>
  );
}

const mapStateToProps = (state: RootState) =>
  ({
    tweets: state.tweets.data,
  } as ITweetListProps);

export const TweetList = connect(mapStateToProps)(TweetListComponent);

const styles: Partial<BasicStyle> = StyleSheet.create<Partial<BasicStyle>>({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
