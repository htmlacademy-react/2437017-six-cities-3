export type CommentData = {
  id: string;
  date: string;
  user: user;
  comment: string;
  rating: number;
};

type user = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type NewCommentData = {
  comment: string;
  rating: number;
};
