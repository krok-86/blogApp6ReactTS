import React from "react";
import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getPostById } from "../../api/postApi";
import { useDispatch } from "react-redux";
import { sendUpdatedPost } from "../../redux/slices/posts";

const PostEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const result = await getPostById(id);
        setPostData(result.data);
      } catch (err) {
        errorToast(err.response.data.message);
        console.log(">>>>>>", err);
      }
    };
    fetchDataId(id);
  }, []);

  const updatePost = (event) => {
    try {
      const newPost = { ...postData, post: event.target?.value };
      setPostData(newPost);
    } catch (err) {
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const sendPost = async () => {
    try {
      await dispatch(sendUpdatedPost({id, postText: postData.post})).unwrap();
      successToast("The post has been edited");
      navigate("/");
    } catch (err) {
      errorToast(err.data);
    }
  };

  const date =
    postData?.createdAt &&
    format(new Date(postData.createdAt), "MMM d, yyyy", { locale: enGB });

  return (
    <PostEditStyled>
      <div className="post-area">
        <div className="post-head">Edit form</div>
        <div className="post-body">
          <div className="post-title">Post content:</div>
          <textarea
            className="post-input"
            type="text"
            value={postData.post}
            onChange={updatePost}
            placeholder="Add new post"
            rows="1"
          >
            {postData.post}
          </textarea>
          <div className="post-info">
            <div className="post-number">post #{postData.id}</div>
            {!!postData?.topics?.length && (
              <div className="post-topic">
                Topic:
                {postData?.topics?.map((item) => (
                  <div key={item.id}>{item?.title}</div>
                ))}
              </div>
            )}
            <div className="post-number">Date:{date}</div>
            {postData.user?.name?.length && (
              <div className="post-number">Author: {postData.user?.name}</div>
            )}
            <Button handleClick={sendPost} name="save" />
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
