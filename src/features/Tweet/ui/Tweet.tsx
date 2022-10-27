import React, {ReactElement} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {BasicStyle, ITweet} from '../../../types';

interface ITweetProps {
  tweet: ITweet;
}

export function Tweet({tweet}: ITweetProps): ReactElement {
  if (!tweet.sender) {
    return <></>;
  }
  return (
    <View testID="tweet-wrapper" style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: tweet?.sender?.avatar || '',
          width: 40,
          height: 40,
        }}
      />
      <View style={styles.tweetContainer}>
        <View>
          <Text style={styles.sender}>
            {tweet?.sender?.nick || tweet?.sender?.username}
          </Text>
          {tweet?.content && (
            <Text testID="tweet-content" style={styles.text}>
              {tweet.content}
            </Text>
          )}
        </View>
        {tweet?.images?.length && (
          <View testID="tweet-images-wrapper" style={styles.imagesWrapper}>
            {tweet.images.map((image, index) => (
              <Image
                testID="tweet-image"
                key={image?.url || `image-${index}`}
                style={styles.image}
                source={{
                  uri: image?.url || '',
                  width: 64,
                  height: 64,
                }}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

interface AdditionalStyle {
  imagesWrapper: ViewStyle;
  tweetContainer: ViewStyle;
  sender: TextStyle;
}

const styles: Partial<BasicStyle> & AdditionalStyle = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyle
>({
  container: {
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  image: {
    marginRight: 16,
    backgroundColor: '#e4f0f5',
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
    paddingBottom: 8,
  },
  tweetContainer: {
    flexShrink: 1,
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 1,
    color: '#a1a1a1',
  },
  sender: {
    color: '#4152c9',
    fontWeight: '600',
  },
});
