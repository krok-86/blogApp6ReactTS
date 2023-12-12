import styled from "styled-components";

const PostEditStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  
  .post-body {
    padding: 5px;
    margin: 5px;    
  }
  .post-textArea {
    background-color: ${props => props.theme.backgroundColorPost};
    color: ${props => props.theme.colorTextPost};
  }
  .post-button-wrap {
    display: flex;
    justify-content: flex-end;
  }  
  .post-color-text {    
    color: ${props => props.theme.colorText}
  }
`;
export default PostEditStyled;
