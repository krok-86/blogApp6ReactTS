import styled from "styled-components";

const PostsStyled = styled.div`
  .posts-area {
    width: 350px;
    height: 100%;
    border: ${(props) => props.theme.borderPosts};
    border-radius: 20px;
    margin: 20px auto;
    background-color: ${(props) => props.theme.backgroundColorPosts};
  }
  .post-body {
    padding: 5px;
    margin: 5px;
  }
  @media (min-width: 768px) {
    .posts-area {
      width: 716px;
    }
  }
`;
export default PostsStyled;
