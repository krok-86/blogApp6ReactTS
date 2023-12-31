import { FC, useEffect } from "react";

import { successToast, errorToast } from "../../utils/toasts/toasts";
import { useAppDispatch, useAppSelector } from "../../hook";

import PostsHead from "./PostsHead/PostsHead";
import PostItem from "../PostItem/PostItem";

import { fetchPosts, fetchRemovePost } from "../../redux/slices/posts";
import { logout } from "../../redux/slices/auth";

import PostsStyled from "./Posts.styled";
import { Flex } from "antd";
import { LocalStorageUtil } from "../../utils/localStorage/localStorage";

const Posts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const userData = useAppSelector((state) => state.auth.data);
  const isAuth = useAppSelector((state) => state.auth.data); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const onClickLogOut = () => {
    if (window.confirm("Do you really want to go out?")) {
      dispatch(logout());
      LocalStorageUtil.removeItem("token");
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
        <div className="post-body">
          <PostsHead
            isAuth={isAuth}
            userData={userData}
            onClickLogOut={onClickLogOut}
          />
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
