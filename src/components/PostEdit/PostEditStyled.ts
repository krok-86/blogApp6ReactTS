import styled from "styled-components";

const PostEditStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  .post-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post-body {
    padding: 5px;
    margin: 5px;
    color: #757575;
  }
  .post-title {
    margin: 5px 5px 10px 5px;
  }
  .post-info {
    display: flex;
    justify-content: flex-end;
  }
  .post-topic {
    padding: 5px;
    margin: 5px;
  }
  .post-metadata {
    text-align: center;
    color: grey;
  }
  .user-head {
    display: flex;
    justify-content: space-evenly;
  }
  .user-text-wrap {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
  .topic-badge {
    text-align: end;
    margin-right: 10px;
  }
`;
export default PostEditStyled;
