import { FC } from "react";

import { format } from "date-fns";
import { enGB } from "date-fns/esm/locale";

import { Link } from "react-router-dom";

import { IRegistrationForm, Post } from "../../types";

import {
  AUTHOR_TITLE,
  CREATED_AT_TITLE,
  POSTS_ID_TITLE,
  TOPIC_TITLE,
  URLS,
} from "../../constants";

import PostItemStyled from "./PostItem.styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface IPostItem {
  post: Post;
  userData: IRegistrationForm | null;
  handleClick?: () => void;
}

const PostItem: FC<IPostItem> = ({ post, handleClick }) => {
  const date =
    post.createdAt &&
    format(new Date(post.createdAt), "MMM d, yyyy", {
      locale: enGB,
    });

  return (
    <PostItemStyled>
      <div className="post-value">
        <div className="post-info">
          <div>
            {POSTS_ID_TITLE}
            {post.id}
          </div>
          <div>
            {TOPIC_TITLE}
            {post?.topics?.map((item) => (
              <div key={item.id}>{item?.title}</div>
            ))}
          </div>
          <div>
            <div>{CREATED_AT_TITLE}</div>
            <div>{date || ""}</div>
          </div>
          <div>
            {AUTHOR_TITLE} {post?.user?.name}
          </div>
          <>
            <DeleteOutlined onClick={handleClick} className="post-icon" />
            <Link to={`${URLS.POST_EDIT}${post.id}`}>
              <EditOutlined className="post-icon" />
            </Link>
          </>
        </div>
        <pre className="post-text">{post.post}</pre>
      </div>
    </PostItemStyled>
  );
};
export default PostItem;
