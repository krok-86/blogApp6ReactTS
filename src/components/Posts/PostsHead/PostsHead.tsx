import { FC } from "react";

import { Link } from "react-router-dom";

import { IRegistrationForm } from "../../../types";
import {
  ADD_BUTTON,
  LOG_IN_BUTTON,
  LOG_OUT_BUTTON,
  POSTS_TITLE,
  SIGN_UP_BUTTON,
  URLS,
} from "../../../constants";

import PostsHeadStyled from "./PostsHead.styled";
import { Button } from "antd";
import {
  AppstoreAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

type PostsHeadType = {
  isAuth: IRegistrationForm | null;
  userData: IRegistrationForm | null;
  onClickLogOut?: () => void;
};

const PostsHead: FC<PostsHeadType> = ({ isAuth, userData, onClickLogOut }) => {
  return (
    <PostsHeadStyled>
      <div className="posts-head">{POSTS_TITLE}</div>
      <div className="post-button-area">
        <Link to={URLS.CREATE_POST}>
          <Button className="post-add-button" type="primary">
            <AppstoreAddOutlined />
            {ADD_BUTTON}
          </Button>
        </Link>
        {!isAuth ? (
          <Link to={URLS.AUTH}>
            <Button className="post-add-button" type="primary">
              <LoginOutlined />
              {LOG_IN_BUTTON}
            </Button>
          </Link>
        ) : (
          <div className="post-user-data"> {userData?.name} </div>
        )}
        {!isAuth ? (
          <Link to={URLS.REG}>
            <Button className="post-add-button" type="primary">
              {SIGN_UP_BUTTON}
            </Button>
          </Link>
        ) : (
          <div className="post-user-data"> {userData?.email} </div>
        )}
        {isAuth && (
          <Button
            onClick={onClickLogOut}
            className="post-logOut-button danger"
            type="primary"
          >
            <LogoutOutlined /> {LOG_OUT_BUTTON}
          </Button>
        )}
      </div>
    </PostsHeadStyled>
  );
};
export default PostsHead;
