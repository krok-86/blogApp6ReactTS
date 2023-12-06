import styled from "styled-components";

const PostEditStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

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
  .post-info {
    text-align: center;
    /* color: ${props => props.theme.colorTextInfo}; */
  }
  .post-badge {
    text-align: end;
    margin-right: 10px;
  }
  .post-badges {
    display: flex;
    justify-content: flex-end;
    color: green;
  }
  /* .post-body {
    padding: 5px;
    margin: 5px;
    color: #757575;
  }   */
  .post-button-wrap {
    display: flex;
    justify-content: flex-end;
  }  
`;
export default PostEditStyled;
