import styled from "styled-components";

const PostsHeadStyled = styled.div`
  .posts-head {
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 0px 5px #144683;
    font-size: 50px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: ${(props) => props.theme.colorPrimary};
    border-bottom: ${(props) => props.theme.borderPost};
  }
  .post-button-area {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }
  .post-add-button {
    color: ${(props) => props.theme.colorText};
  }
  .post-user-data {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colorPrimary};
  }
  .post-logOut-button {
    color: ${(props) => props.theme.colorText};
  }
`;
export default PostsHeadStyled;
