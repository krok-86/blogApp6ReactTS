import styled from "styled-components";

const NewPostHeadStyled = styled.div`
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
    color: ${(props) => props.theme.colorPrimary};
  }
  .user-text-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default NewPostHeadStyled;