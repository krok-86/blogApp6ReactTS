import { useEffect } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
// import Button from "../Buttons/Button";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import PostItem from "../PostItem/PostItem";
import { fetchPosts, fetchRemovePost } from "../../redux/slices/posts";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Flex } from "antd";
import { Button } from "antd";
import { AppstoreAddOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const Posts = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector((state) => state.posts);
  const userData = useAppSelector((state) => state.auth.data);
  const isAuth = useAppSelector(selectIsAuth);

  const onClickLogOut = () => {
    if (window.confirm("Do you really want to go out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePost = async (id: string) => {
    try {
      await dispatch(fetchRemovePost(id)).unwrap();
      successToast("Post is deleted");
    } catch (err: any) {
      console.log(">>>>>>>>>>>>>>>>", err);
      errorToast(err.data);
    }
  };

  return (
    <PostsStyled>
      <div className="posts-area">
        <div className="posts-head">Posts:</div>
        <div className="post-body">
       
            <div className="post-user">              
              {/* <div className="post-user-info">
                <div>Log in: {userData?.name}</div>
                <div>email: {userData?.email}</div>
              </div> */}
                <div className="post-button-area">
              <Link to="/createPost">
                <Button className="post-add-button"><AppstoreAddOutlined />Add new post</Button>
              </Link>
              <Link to={!isAuth ? "/auth" : '#'}>
                <Button className="post-add-button"><LoginOutlined />{isAuth ? userData?.name : "Log in"}</Button>
              </Link>
              <Link to={!isAuth ? "/registration" : '#'}>
                <Button className="post-add-button"> {isAuth ? userData?.email : "Sign up"}</Button>
              </Link>  
              {isAuth && (        
              <Button onClick={onClickLogOut} className="post-user-logOut">
               <LogoutOutlined /> Log out 
              </Button>
              )}
            </div>
            </div>
         
              <Flex gap="middle" vertical>
          {/* <div className="post-value"> */}
            {posts.map((obj) => (
              <PostItem
                key={obj.id}
                post={obj}
                userData={userData}
                handleClick={() => deletePost(obj.id.toString())}
              />
            ))}          
            </Flex>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
