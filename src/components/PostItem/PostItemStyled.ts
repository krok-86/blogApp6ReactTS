import styled from "styled-components";

const PostItemStyled = styled.div`
  .post-value {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    object-fit: contain;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorPost};
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    margin-top: 10px;    
  }  
  .post-info {
    display: grid;
    grid-template-columns: 60px 1fr 1fr 1fr 60px 60px;
    align-items: center;
    border-top: ${props => props.theme.borderPost};
    color: ${props => props.theme.colorTextInfo};
    padding: 10px;
  }
  .post-icon {
    color: ${props => props.theme.colorPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }
  .post-text {
    word-break: break-word;
    padding: 10px;
    white-space: pre-wrap;
    color: ${props => props.theme.colorTextPost};
  }  
`;
export default PostItemStyled;
