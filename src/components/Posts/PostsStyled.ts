import styled from "styled-components";

const PostsStyled = styled.div`
  .posts-area {
    width: 716px;
    height: 100%;
    border: 2px solid #d5dde0;
    border-radius: 20px;
    margin: 20px auto;
    background-color: white;
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
    color: #1677ff;    
  }
  .post-body {
    border-top: 1px solid #add5f5;
    padding: 5px;
    margin: 5px;
  }
  .post-user {
    /* display: flex;
    justify-content: end;
    align-items: center; */
    /* font-size: 10px; */
    /* margin: 10px;     */
  }
  .post-user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 12px;    
    color:#72a0c6; 
  }
  .post-user-logOut {
    /* display: flex;
    justify-content: center;
    align-items: center;     */
    /* padding: 5px;
    margin: 5px; */
    /* min-width: 45px;    */
    border-radius: 10px;
    border: none;
    /* cursor:  pointer;    */
    background-color: #f56855;
    color: white;
    &:hover{
        opacity: 0.7;
    }
  }
  .post-value {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    /* max-width: 95%; */
    object-fit: contain; 
  }
  .post-button-area {
    display: flex;
    justify-content: space-between;
  } 
  .post-add-button {    
    background-color: #1677ff;
    color: white;    
  }
`;

export default PostsStyled;
