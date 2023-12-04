import styled from "styled-components";

const NewPostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  .post-select {
    margin: 10px 0;
  }
  .post-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .post-button {
    height: 40px;
    min-width: 80px;
    border-radius: 10px;
    border: none;
    background-color: #72a0c6;
    color: white;
    &__clear {
      background-color: #e59d95;
    }
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
