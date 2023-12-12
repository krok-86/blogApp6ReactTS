import PostsStyled from "./PostsStyled";

import { FC, useEffect } from "react";

import { Link } from "react-router-dom";

import { successToast, errorToast } from "../../utils/toasts/toasts";
import { useAppDispatch, useAppSelector } from "../../hook";

import PostItem from "../PostItem/PostItem";

import { fetchPosts, fetchRemovePost } from "../../redux/slices/posts";
import { logout} from "../../redux/slices/auth";

import { Flex } from "antd";
import { Button } from "antd";
import {
  AppstoreAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import PostsHead from "./PostsHead/PostsHead";
import { IRegistrationForm } from "../../types";

const Posts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const userData = useAppSelector((state) => state.auth.data);
  const isAuth = useAppSelector((state<IRegistrationForm>) => state.auth.data);//fix
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const onClickLogOut = () => {
    if (window.confirm("Do you really want to go out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");//fix
    }
  };  

  const deletePost = async (id: string) => {
    try {
      await dispatch(fetchRemovePost(id)).unwrap();
      successToast("Post is deleted");
    } catch (err: any) {
      console.log("deletePost", err);
      errorToast(err.data);
    }
  };

  return (
    <PostsStyled>
      <div className="posts-area">
        <div className="posts-head">Posts:</div>//fix
        <div className="post-body">
         <PostsHead
         isAuth = {isAuth}
         userData = {userData}        
         onClickLogOut = {onClickLogOut}
         />
        {/* <Link to="/createPost">
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
              </Link> : <div className="post-user-data"> {userData?.email} </div>
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
            </div> */}
         
          <Flex gap="middle" vertical>
            {posts.map((obj) => (
              <PostItem
                key={obj.id}
                post={obj}
                userData={userData}
                handleClick={() => obj?.id && deletePost(obj.id.toString())}
              />
            ))}
          </Flex>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
