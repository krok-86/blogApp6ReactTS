import styled from "styled-components";

const PostsStyled = styled.div`
  .posts-area {
    width: 350px;
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
    flex-flow: row wrap;
  } 
  .post-add-button {    
    color: ${props => props.theme.colorText}
  }
  .post-logOut-button{
    color: ${props => props.theme.colorText}
    
  }
  /* .danger {
    background-color: ${props => props.theme.colorSecondary};
    &:hover {
      background-color: ${props => props.theme.colorSecondary} !important;
    }
    &:active {
      background-color: ${props => props.theme.colorSecondary} !important;
    } */
  /* } */
  @media (min-width: 768px) {
    .posts-area {
    width: 716px;
  }
}
`;

export default PostsStyled;
