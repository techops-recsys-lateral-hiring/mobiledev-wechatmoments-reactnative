import renderer from 'react-test-renderer';
import React from 'react';

import {Tweet} from './Tweet';
import {ITweet} from '../../../types';

describe('Tweet', () => {
  const testTweet: ITweet = {
    sender: {
      nick: 'john',
      username: 'John Smith',
      avatar: 'test-image.url',
    },
    content: 'tweet content',
    images: [{url: 'image1.url'}, {url: 'image2.url'}],
  };
  it('should render component', () => {
    const component = renderer.create(<Tweet tweet={testTweet} />);
    const containerElement = component.root.findByProps({
      testID: 'tweet-wrapper',
    });
    expect(containerElement).toBeTruthy();
  });
  it('should render the right content', () => {
    const component = renderer.create(<Tweet tweet={testTweet} />);
    const element = component.root.findByProps({
      testID: 'tweet-content',
    });
    expect(element.props.children).toBe('tweet content');
  });
  it('should render the images container if the tweet has images', () => {
    const component = renderer.create(<Tweet tweet={testTweet} />);
    const containerElement = component.root.findByProps({
      testID: 'tweet-images-wrapper',
    });
    expect(containerElement).toBeTruthy();
  });
});
