import React, { FC } from "react";
import PostEditStyled from "./PostEditStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getPostById } from "../../api/postApi";
import { sendUpdatedPost } from "../../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Post, PostData } from "../../types";
import { Badge, Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { LeftOutlined } from "@ant-design/icons";

const PostEdit: FC = () => {
  const userData = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState<Post>();
  
  // console.log(userData?.id);
  // console.log(postData?.user?.id);

  useEffect(() => {
    const fetchDataId = async () => {
      if (!id) return;
      try {
        const result = await getPostById(id);
        console.log(result.data)
        setPostData(result.data);
      } catch (err: any) {
        errorToast(err.response.data.message);
        console.log("getPostById", err);
      }
    };
    fetchDataId();
  }, []);

  const updatePost = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const newPost = { ...postData, post: event.target?.value };//type?
      setPostData(newPost);
    } catch (err) {
      console.log("updatePost", err);
    }
  };

  const sendPost = async () => {
    if (!id) return;
    try {
      await dispatch(
        sendUpdatedPost({ id, postText: postData?.post || "" })
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

  console.log(postData?.topics);

  return (
    <PostEditStyled>
      <div className="post-area-global">
        <div className="post-head">
          <div className="post-wrap">
            <Link to="/" className="post-arrow-back">
              <LeftOutlined />
            </Link>
          </div>
          <div className="user-text-wrap">
            <div className="post-head-global">Edit post</div>
          </div>
        </div>
        <div className="post-info">
          created {date} by {postData?.user?.name}{" "}
        </div>
        <div className="post-badges">
          {postData?.topics?.map((item) => (
            <div className="post-badge" key={item.id}>
              <Badge className="post-badge" count={item?.title} />
            </div>
          ))}
        </div>
        <div className="post-body">
          <Form.Item>
            <TextArea
              className="post-textArea"
              rows={4}
              readOnly={postData?.user?.id !== userData?.id}
              value={postData?.post}
              onChange={updatePost}
              placeholder="Add new post"
            />
          </Form.Item>
          <div className="post-button-wrap">
            <Form.Item>
              <Button
                className="post-color-text"
                type="primary"
                onClick={sendPost}
                htmlType="submit"
              >
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
