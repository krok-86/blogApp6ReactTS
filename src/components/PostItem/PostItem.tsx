import PostItemStyled from "./PostItemStyled";
import { format } from "date-fns";
import { enGB } from "date-fns/esm/locale";
import { Link } from "react-router-dom";
import { FC } from "react";
import { IRegistrationForm, Post } from "../../types";
import { Button } from "antd";
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
          <div>Post #{post.id}</div>
          <div>
            Topic:
            {post?.topics?.map((item) => (
              <div key={item.id}>{item?.title}</div>
            ))}
          </div>
          <div>
            <div>Created at</div>
            <div>{date || ""}</div>
          </div>
          <div>Author {post?.user?.name}</div>
          <>
            <DeleteOutlined onClick={handleClick} className="post-icon" />
            <Link to={`/postEdit/${post.id}`}>
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
