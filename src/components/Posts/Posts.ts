import { useEffect } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import PostItem from "../PostItem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchRemovePost } from "../../redux/slices/posts";
import { logout, selectIsAuth } from "../../redux/slices/auth";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  const isAuth = useSelector(selectIsAuth);

  const onClickLogOut = () => {
    if (window.confirm("Do you really want to go out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePost = async (id) => {
    try {
      await dispatch(fetchRemovePost(id)).unwrap();
      successToast("Post is deleted");
    } catch (err) {
      console.log(">>>>>>>>>>>>>>>>", err);
      errorToast(err.data);
    }
  };

  return (
    <PostsStyled>
      <div className="posts-area">
        <div className="posts-head">Posts:</div>
        <div className="post-body">
          {isAuth && (
            <div className="post-user">              
              <div className="post-user-info">
                <div>Log in: {userData?.name}</div>
                <div>email: {userData?.email}</div>
              </div>
              <div onClick={onClickLogOut} className="post-user-logOut">
                Log out
              </div>
            </div>
          )}
          <div className="post-value">
            {posts.map((obj) => (
              <PostItem
                key={obj.id}
                post={obj}
                userData={userData}
                handleClick={() => deletePost(obj.id)}
              />
            ))}
            <div className="post-button-area">
              <Link to="/createPost">
                <Button className="post-add-button" name="Add new post" />
              </Link>
              <Link to="/auth">
                <Button className="post-add-button" name="Log in" />
              </Link>
              <Link to="/registration">
                <Button className="post-add-button" name="Sign up" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
