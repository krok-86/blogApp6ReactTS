import { FC } from "react";
import NewPostHeadStyled from "./NewPostHeadStyled";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { newPostTitle } from "../../../constants";

const NewPostHead:FC = () => {//need fix?
    return (
<NewPostHeadStyled>
<div className="user-head">
          <div className="post-wrap">
            <Link to="/" className="post-arrow-back">
              <LeftOutlined />
            </Link>
          </div>
          <div className="user-text-wrap">
            <div className="post-head-global">{newPostTitle}</div>
          </div>
        </div>
</NewPostHeadStyled>
    );
};
export default NewPostHead;