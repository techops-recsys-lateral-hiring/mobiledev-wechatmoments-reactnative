import {ITweet} from '../../../types';

export const mockTweets: Array<ITweet> = [
  {
    content: '沙发！',
    images: [
      {
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDy7HZaHxn15wWj6pXE4uMKAqHTC_uBgBlIzeeQSj2QaGgUzUmHg',
      },
      {
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlJRALAf-76JPOLohBKzBg8Ab4Q5pWeQhF5igSfBflE_UYbqu7',
      },
      {
        url: 'http://i.ytimg.com/vi/rGWI7mjmnNk/hqdefault.jpg',
      },
    ],
    sender: {
      username: 'jport',
      nick: 'Joe Portman',
      avatar:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w',
    },
    comments: [
      {
        content: 'Good.',
        sender: {
          username: 'outman',
          nick: 'Super hero',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w',
        },
      },
      {
        content: 'Like it too',
        sender: {
          username: 'inman',
          nick: 'Doggy Over',
          avatar:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJm8UXZ0mYtjv1a48RKkFkdyd4kOWLJB0o_l7GuTS8-q8VF64w',
        },
      },
    ],
  },
];
