import styled from "styled-components";

const PostEditStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  .post-head {
    display: flex;
    justify-content: space-evenly;
  }
  .post-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-text-wrap {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .post-arrow-back {
    color: ${props => props.theme.colorPrimary};
  }
  .post-info {
    text-align: center;
    color: ${props => props.theme.colorTextInfo};
  }
  .post-badges {
    text-align: end;
    margin-right: 10px;   
  }
  .post-badge {
    display: flex;
    justify-content: flex-end;   
  }
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
