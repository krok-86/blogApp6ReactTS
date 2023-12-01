import { useEffect } from "react";
import PostsStyled from "./PostsStyled";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import PostItem from "../PostItem/PostItem";
import { fetchPosts, fetchRemovePost } from "../../redux/slices/posts";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../../hook";

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
          {isAuth && (
            <div className="post-user">              
              {/* <div className="post-user-info">
                <div>Log in: {userData?.name}</div>
                <div>email: {userData?.email}</div>
              </div> */}
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
                handleClick={() => deletePost(obj.id.toString())}
              />
            ))}
            <div className="post-button-area">
              <Link to="/createPost">
                <Button className="post-add-button" name= "Add new post"/>
              </Link>
              <Link to={!isAuth ? "/auth" : '#'}>
                <Button className="post-add-button"  name={isAuth ? userData?.name : "Log in"}/>
              </Link>
              <Link to={!isAuth ? "/registration" : '#'}>
                <Button className="post-add-button"  name={isAuth ? userData?.name : "Sign up"}/>
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </PostsStyled>
  );
};
export default Posts;
