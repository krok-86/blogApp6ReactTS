import styled from "styled-components";

const NewPostStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  .user-head {
    display: flex;
  }
  .post-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}
  .post-arrow-back {
    color: ${props => props.theme.colorPrimary};
  }
  .user-text-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  ::placeholder {    
    color: ${props => props.theme.colorTextPlaceHolder};
    opacity: .7;
  }
  .custom-select{
    &__control {
      cursor: pointer;
      background-color: ${props => props.theme.backgroundColorPost}!important;
      color: ${props => props.theme.colorTextPost}!important;
      border: ${props => props.theme.borderPost}!important;
      
      /* &--menu-is-open {        
        color: red;
        background-color: red;
      } */
      
    }
    &__multi-value {
      background-color: green !important;
    }
    &__menu {
        background-color: ${props => props.theme.backgroundColorPost}!important;
        color: ${props => props.theme.colorTextPost}!important;
      }
    &__option {
      cursor: pointer;
      /* background-color: gray !important;
      color: green !important; */
      &--is-focused {
        background-color: #cfacf5 !important;
      }
    }
}
  .post-select {
    margin: 10px 0;
    width: 100%;    
    color:${props => props.theme.colorTextPost};    
  }  
  .post-author {
    color: ${props => props.theme.colorTextInfo};
    text-align: end;
  }  
  .post-buttons-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .post-save-button {    
    color: ${props => props.theme.colorText}
  }  
`
export default NewPostStyled;
