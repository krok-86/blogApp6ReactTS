import styled from "styled-components";

const NewUserStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
  .user-value {  
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 0px 20px 20px 20px;
    margin: 5px;
    color: #757575;    
    border: 2px solid #d5dde0;
    border-radius: 20px;    
  }
  .user-value:hover {
    box-shadow: 1px 2px 3px gray;
    border: 2px solid transparent;    
  }
  .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: #72a0c6;    
  }
  .user-img-wrap {
    display:flex;
    justify-content: center;
  }
  .user-input {
    width: 60%;
    margin: 10px;
    border-radius: 20px;
    padding: 10px;
    background-color: #ececec; 
    border: 2px solid #d5dde0;
    outline:none;
  }
  .user-input:hover {
    box-shadow: 1px 2px 3px gray;
    border: 2px solid transparent;
  }
    .user-button {
   min-width: 30%;
  } 
  .user-img {
    width: 100%;
    /* margin-top: 3px; */
    border-radius: 20px;
  }     
  .user-avatar-wrap {
    display: flex;
    justify-content: enter;
    align-items: center;
    max-width: 200px;
    margin-bottom: 20px;
    /* border: 1px solid red; */
  }
  .error {
    border: 1px solid red;
  }
  .form-buttons {
    display: flex;
    flex-flow: row nowrap;
  }
`
export default NewUserStyled;