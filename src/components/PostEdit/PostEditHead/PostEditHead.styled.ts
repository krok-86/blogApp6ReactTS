import styled from "styled-components";

const PostEditHeadStyled = styled.div`
.post-head {
    display: flex;
    justify-content: space-evenly;
  }
  .post-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-text-wrap {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .post-arrow-back {
    color: ${props => props.theme.colorPrimary};
  }
  .post-info {
    text-align: center;
    color: ${props => props.theme.colorTextInfo};
  }
  .post-badges {
    text-align: end;
    margin-right: 10px;   
  }
  .post-badge {
    display: flex;
    justify-content: flex-end;   
  }
`
export default PostEditHeadStyled;