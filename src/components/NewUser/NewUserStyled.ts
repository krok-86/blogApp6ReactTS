import styled from "styled-components";

const NewUserStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    /* padding-top: 5rem; */   
    margin-top: 10rem;
    background-color: white;
    max-width: 450px;
    border: 1px solid #d5dde0;
    border-radius: 10px;

    .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 15px 50px;
    color: #1677ff;
  }

  .user-text-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
     
  }
.user-header-wrap {
  display: flex;
  align-items: center;
}

.form-go-back {
  margin-bottom: 10px;
  text-decoration: none;
  color: #1677ff; 
  &__grey {
    color: grey;
  }
  &:hover {
    opacity: 0.8;
  }
}
  /* .user-img-wrap {
    display:flex;
    justify-content: center;    
  }

  .user-value {  
    display: flex;
    
    width: 500px;
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
  .user-head {
    display: flex;
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
    width: 40%;
    aspect-ratio: 3/2;
    object-fit: contain; 
    mix-blend-mode: color-burn;   
   
  }     
  .user-avatar-wrap {
    display: flex;
    justify-content: enter;
    align-items: center;
    max-width: 200px;
    margin-bottom: 20px;
  }
  .error {
    border: 1px solid red;
  }
  .form-buttons {
    display: flex;
    flex-flow: row nowrap;
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
}   */
`
export default NewUserStyled;