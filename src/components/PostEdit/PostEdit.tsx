import React from "react";
import PostEditStyled from "./PostEditStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Button from "../Buttons/Button";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getPostById } from "../../api/postApi";
import { sendUpdatedPost } from "../../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Post } from "../../types";
import { Badge, Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LeftOutlined } from "@ant-design/icons";

// type FieldType = {
//   onClick?: () => void,
// };

const PostEdit = () => {
  const userData = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({} as Post);

  console.log(userData?.id);
  console.log(postData.user?.id);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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
      console.log(postData);
      setPostData(newPost);
    } catch (err) {
      console.log(">>>>>>>>>>>>>>>>", err);
    }
  };

  const sendPost = async () => {
    if (!id) return;
    try {
      await dispatch(
        sendUpdatedPost({ id, postText: postData.post || "" })
      ).unwrap();
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
        <div className="user-head">
          <div className="post-wrap">
            <Link to="/">
              <LeftOutlined />
            </Link>
          </div>
          <div className="user-text-wrap">
            <div className="post-head">Edit post</div>
          </div>
        </div>
        <div className="post-metadata">created {date} by {postData.user?.name} </div>
        {postData?.topics?.map((item) => ( <div className="topic-badge" key={item.id}>
        <Badge
        // className="site-badge-count-109"
        count={item?.title}
        style={{ backgroundColor: '#1677ff' }}
      />
      </div>
                ))}
        <div className="post-body">
          {/* <div className="post-title">Post content:</div> */}
          <Form.Item>
            <TextArea
              rows={4}
              readOnly={postData.user?.id !== userData?.id}
              value={postData.post}
              onChange={updatePost}
              placeholder="Add new post"
            />
          </Form.Item>
          {/* <textarea
            readOnly={postData.user?.id !== userData?.id}
            className="post-input"
            value={postData.post}
            onChange={updatePost}
            placeholder="Add new post"
            rows={1}
          >
            {postData.post}
          </textarea> */}
          <div className="post-info">
            {/* <div className="post-number">post #{postData.id}</div> */}
            {/* {!!postData?.topics?.length && (
              <div className="post-topic">
                Topic:
                {postData?.topics?.map((item) => (
                  <div key={item.id}>{item?.title}</div>
                ))}
              </div>
            )} */}
            {/* <div className="post-number">Date:{date}</div>
            {postData.user?.name?.length && (
              <div className="post-number">Author: {postData.user?.name}</div>
            )} */}

            <Form.Item>
              {/* <Button handleClick={sendPost} name="save" /> */}
              <Button type="primary" onClick={sendPost} htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </PostEditStyled>
  );
};
export default PostEdit;
