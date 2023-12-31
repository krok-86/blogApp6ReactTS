import styled from "styled-components";

const NewPostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  
  ::placeholder {
    color: ${(props) => props.theme.colorTextPlaceHolder};
    opacity: 0.7;
  }
  .custom-select {
    &__single-value {
      color: ${(props) => props.theme.colorTextPost}!important;
    }
    &__control {
      cursor: pointer;
      background-color: ${(props) => props.theme.backgroundColorPost}!important;
      color: ${(props) => props.theme.colorTextPost}!important;
      border: ${(props) => props.theme.borderPost}!important;
    }    
    &__menu {
      background-color: ${(props) => props.theme.backgroundColorPost}!important;
      color: ${(props) => props.theme.colorTextPost}!important;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        background-color: #cfacf5 !important;
      }
      &--is-selected {
        background-color: #cfacf5 !important;
        color: white !important;
        opacity: 0.5 !important;
      }
    }
  }
  .post-select {
    margin: 10px 0;
    width: 100%;
    color: ${(props) => props.theme.colorTextPost};
  }
  .post-author {
    color: ${(props) => props.theme.colorTextInfo};
    text-align: end;
  }
  .post-buttons-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .post-save-button {
    color: ${(props) => props.theme.colorText};
  }
`;
export default NewPostStyled;
