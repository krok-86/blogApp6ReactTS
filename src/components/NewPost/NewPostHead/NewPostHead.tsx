import { FC } from "react";

import NewPostHeadStyled from "./NewPostHead.styled";
import { LeftOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { NEW_POST_TITLE, URLS } from "../../../constants";


const NewPostHead:FC = () => {//need fix?
    return (
<NewPostHeadStyled>
<div className="user-head">
          <div className="post-wrap">
            <Link to={URLS.MAIN_PAGE} className="post-arrow-back">
              <LeftOutlined />
            </Link>
          </div>
          <div className="user-text-wrap">
            <div className="post-head-global">{NEW_POST_TITLE}</div>
          </div>
        </div>
</NewPostHeadStyled>
    );
};
export default NewPostHead;