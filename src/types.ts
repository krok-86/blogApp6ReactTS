export interface IRegistrationForm {
  name?: string;
  email: string;
  password?: string;
  id?: string;
}

export interface IRegistrationFormData {
  payload?: {
    data: string;
  };
  userData: IRegistrationForm;
  token?: string;
}

export interface IEditPost {
  id: string;
  postText: string;
}

export interface IRejectValue {
  data: string;
}

export type TopicType = {
  id: number;
  title: string;
};

export type Post = {
  id?: number;
  post?: string;
  postText?: string;
  userId?: number | string;
  createdAt?: string;
  topics?: TopicType[];
  user?: IRegistrationForm;
};

export type PostData = {
  data: Post;
};

export type SelectorType = {
  label: string;
  value: string;
};
