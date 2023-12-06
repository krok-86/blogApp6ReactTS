import styled from "styled-components";

const PostsStyled = styled.div`
  .posts-area {
    width: 716px;
    height: 100%;
    border: ${props => props.theme.borderPosts};
    border-radius: 20px;
    margin: 20px auto;
    background-color: ${props => props.theme.backgroundColorPosts};
  }
  .posts-head {
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 0px 5px #144683;
    font-size: 50px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: ${props => props.theme.colorPrimary};
  }
  .post-body {
    border-top: ${props => props.theme.borderPost};
    padding: 5px;
    margin: 5px;
  }  
  .post-button-area {
    display: flex;
    justify-content: space-between;
  } 
  .post-add-button {    
    color: ${props => props.theme.colorText}
  }
  .post-logOut-button{
    color: ${props => props.theme.colorText}
    
  }
`;

export default PostsStyled;
