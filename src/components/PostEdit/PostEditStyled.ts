import styled from "styled-components";

const PostEditStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;

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
  justify-content: space-between;
}
.post-topic {
  padding: 5px;
  margin: 5px;
}
.user-head {
    display: flex;
  }
  .user-text-wrap {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.post-button-area {
    width: 50px;
    height: 50px;
    text-decoration: none;
    border-radius: 50%;
    display: inline-block;
    padding: 8px 16px;
    background-color: #779fc4;
    color: white;
    font-size: 24px;
    :hover {
    background-color: #ddd;
    color: black;
  }
}
`
export default PostEditStyled;
