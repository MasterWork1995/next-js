export interface IPost {
  id: string;
  title: string;
  description: string;
}

export interface IPosts {
  posts: IPost[];
}

export interface IPostSingle {
  post: IPost;
}
