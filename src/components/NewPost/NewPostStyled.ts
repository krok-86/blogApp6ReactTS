import styled from "styled-components";

const NewPostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  .post-select {
    margin: 10px 0;
  }
  .post-buttons-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .post-button-save {
    background-color: #1677ff;
    color: white;    
  }
  .post-button-clear {
    background-color: #f56855;;
    color: white;    
  }
  .post-author {
    color: grey;
    text-align: end;
  }
  input {
    width: 100%;
  }

  .user-head {
    display: flex;
  }
  .post-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}
  .user-text-wrap {
    width: 100%;
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
export default NewPostStyled;
