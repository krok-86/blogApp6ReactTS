import styled from "styled-components";

const PostItemStyled = styled.div`
  .post-value {
    padding: 0px 20px 20px 20px;
    margin: 5px;
    color: #757575;
    border: 2px solid #d5dde0;
    border-radius: 20px;
  }
  .post-value:hover {
    box-shadow: 1px 2px 3px gray;
    border: 2px solid transparent;
  }
  .post-text {
    word-break: break-word;
    padding: 10px;
    white-space: pre-wrap;
  }
  .post-title {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border: none;
  }
  .post-info {
    display: grid;
    grid-template-columns: 60px 1fr 1fr 1fr 60px 60px;
    border-top: 1px solid #72a0c6;
  }
`;
export default PostItemStyled;
