import styled from "styled-components";

const NewUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  background-color: ${(props) => props.theme.backgroundColorPosts};
  max-width: 450px;
  border: ${(props) => props.theme.borderPosts};
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
    color: ${(props) => props.theme.colorPrimary};
  }
  .ant-form-item-required {
    ::text {
      color: red;      
    }
  }
  .newUser-text {
    ::placeholder {
      color: ${(props) => props.theme.colorTextPlaceHolder};
      opacity: 0.7;
    }
  }
  .button-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
  }
  .user-button {
    color: ${(props) => props.theme.colorText};
  }
  .form-go-back {
    margin-bottom: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colorPrimary};
    &__grey {
      color: grey;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .ant-input {
    background-color: ${(props) => props.theme.backgroundColorPost} !important;
    color: ${(props) => props.theme.colorTextInfo} !important;
    /* border-color: ${(props) => props.theme.borderAuthBefore} !important;
    border-color: ${(props) => props.theme.borderAuthAfter} !important; */
    &-affix-wrapper {
      background-color: ${(props) => props.theme.backgroundColorPost} !important;
      
    }
    &-password-icon {
      color: ${(props) => props.theme.colorTextInfo} !important;
  }
}
  .ant-form-item-label {
    label {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colorTextInfo};
    background-color: ${(props) => props.theme.colorTextInfo} !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px
      ${(props) => props.theme.backgroundColorPost};
  }
`;
export default NewUserStyled;
