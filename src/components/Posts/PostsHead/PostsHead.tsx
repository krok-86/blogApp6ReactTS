import { Link } from "react-router-dom";
import PostsHeadStyled from "./PostsHeadStyled";
import { Button } from "antd";
import { AppstoreAddOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { FC } from "react";
import { IRegistrationForm } from "../../../types";

type Posts = {
  isAuth?: IRegistrationForm,
  userData?: IRegistrationForm,
  onClickLogOut?: () => void,
}

const PostsHead:FC<Posts> = ({isAuth, userData, onClickLogOut}) => {
  return (
  <PostsHeadStyled>
 <div className="post-button-area">
              <Link to="/createPost">
                <Button className="post-add-button" type="primary">
                  <AppstoreAddOutlined />
                  Add new post
                </Button>
              </Link>              
              {!isAuth  ? 
              <Link to="/auth">              
                <Button className="post-add-button" type="primary">
                  <LoginOutlined />
                  Log in
                </Button>                 
              </Link> : <div className="post-user-data"> {userData?.name} </div>
              }
              {!isAuth  ?
              <Link to="/registration">
                <Button className="post-add-button" type="primary">                  
                  Sign up
                </Button>
              </Link> : <div className="post-user-data"> userData?.email </div>
              }
              {isAuth && (
                <Button
                  onClick={onClickLogOut}
                  className="post-logOut-button danger"
                  type="primary"
                >
                  <LogoutOutlined /> Log out
                </Button>
              )}
            </div>
  </PostsHeadStyled>
  );
};
export default PostsHead;
