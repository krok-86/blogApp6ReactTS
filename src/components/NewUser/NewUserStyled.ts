import styled from "styled-components";

const NewUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  background-color: ${props => props.theme.backgroundColorPosts};
  max-width: 450px;
  border: ${props => props.theme.borderPosts};
  border-radius: 10px;

  .user-text-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  .user-header-wrap {
    display: flex;
    align-items: center;
  }
  .user-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 900;
    padding: 5px;
    margin: 15px 50px;
    color: ${props => props.theme.colorPrimary};
  }
  
    .ant-form-item-required{
      ::text {
        color: red;
     /* color: red; */
      }
    }
    .newUser-text {
      ::placeholder {    
    color: ${props => props.theme.colorTextPlaceHolder};
    opacity: .7;
  }  
    }
  /* input {
    background-color: ${props => props.theme.backgroundColorPost};
    color: ${props => props.theme.colorTextInfo};
    border: ${props => props.theme.borderPost};
  } */
  
  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
  }
  .user-button {    
    color: ${props => props.theme.colorText}
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
`;
export default NewUserStyled;
