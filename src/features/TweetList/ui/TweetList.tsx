import React, {ReactElement, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {getRequest} from '../../../network/Network';
import {BasicStyle, ITweet} from '../../../types';
import {Tweet} from '../../Tweet/ui/Tweet';

interface ITweetListProps {
  tweets: Array<ITweet>;
}

function TweetListComponent({tweets}: ITweetListProps): ReactElement {
  [tweets, setDataTweets] = useState<Array<ITweet>>([]);

  function onSuccess(data: any): void {
    setDataTweets(data as Array<ITweet>);
  }

  function onError(error: any): void {
    console.log(error);
  }
  useEffect(() => {
    getRequest(
      'https://thoughtworks-ios.herokuapp.com/user/jsmith/tweets',
      onSuccess,
      onError,
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={tweet => <Tweet tweet={tweet.item} />}
      />
    </View>
  );
}

const mapStateToProps = (state: any) =>
  ({
    tweets: [],
  } as ITweetListProps);

export const TweetList = connect(mapStateToProps)(TweetListComponent);

const styles: Partial<BasicStyle> = StyleSheet.create<Partial<BasicStyle>>({
  container: {
    flex: 1,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
