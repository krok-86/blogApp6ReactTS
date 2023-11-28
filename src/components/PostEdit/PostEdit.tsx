import React from "react";
import PostEditStyled from "./PostEditStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { successToast, errorToast } from "../Utilities/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getPostById } from "../../api/postApi";
import { sendUpdatedPost } from "../../redux/slices/posts";
import { useAppDispatch } from "../../hook";
import {Post} from '../../types';

const PostEdit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({} as Post);

  useEffect(() => {
    const fetchDataId = async () => {
      if (!id) return;
      try {
        const result = await getPostById(id);
        setPostData(result.data);
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log(">>>>>>", err);
      }
    };
    fetchDataId();
  }, []);

  const updatePost = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const newPost = { ...postData, post: event.target?.value };
      setPostData(newPost);
    } catch (err) {
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const sendPost = async () => {
    if (!id ) return;
    try {
      await dispatch(sendUpdatedPost({id, postText: postData.post || ''})).unwrap();
      successToast("The post has been edited");
      navigate("/");
    } catch (err: any) {
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
            value={postData.post}
            onChange={updatePost}
            placeholder="Add new post"
            rows={1}
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
