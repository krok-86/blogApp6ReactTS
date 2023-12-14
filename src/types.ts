export interface IRegistrationForm {
  name?: string;
  email?: string;
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

export type UrlsType = {
  AUTH: string;
  REG: string;
  MAIN_PAGE:string;
  CREATE_POST: string;
  POST_EDIT: string;
}

export type ThemeType = {
  white: {
    colorPrimary?: string;
    colorSecondary: string;
    backgroundColor: string;
    colorText: string;
    colorTextPost: string;
    colorTextInfo: string;
    colorTextPlaceHolder: string;
    backgroundColorPosts: string;
    backgroundColorPost: string;
    backgroundImg: string;
    borderPosts: string;
    borderPost: string;
  },
  black: {
    colorPrimary?: string;
    colorSecondary: string;
    backgroundColor: string;
    colorText: string;
    colorTextPost: string;
    colorTextInfo: string;
    colorTextPlaceHolder: string;
    backgroundColorPosts: string;
    backgroundColorPost: string;
    backgroundImg: string;
    borderPosts: string;
    borderPost: string;  
  },
}