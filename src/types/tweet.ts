interface Image {
  url: string;
}

interface Sender {
  username: string;
  nick: string;
  avatar: string;
}

interface Comment {
  content: string;
  sender: Sender;
}

export interface ITweet {
  sender: Sender;
  images?: Array<Image>;
  content?: string;
  comments?: Array<Comment>;
}
