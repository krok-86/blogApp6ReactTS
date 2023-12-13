import { FC } from "react";
import { Post } from "../../../types";

import PostEditHeadStyled from "./PostEditHead.styled";
import { LeftOutlined } from "@ant-design/icons";
import { Badge } from "antd";

import { Link } from "react-router-dom";
import { URLS } from "../../../constants";

type PostEdit = {
    postData?: Post,
    date?: string,
}

const postEditHead:FC<PostEdit> = ({postData, date,}) => {//need fix?
    return (
        <PostEditHeadStyled>               
        <div className="post-head">
          <div className="post-wrap">
            <Link to={URLS.MAIN_PAGE} className="post-arrow-back">
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
        </PostEditHeadStyled>
    );
};
export default postEditHead;