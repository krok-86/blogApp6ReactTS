import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.backgroundColor};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(${(props) => props.theme.backgroundImg}); */
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.post-area-global {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  border-radius: 10px;
  border: ${(props) => props.theme.borderPosts};
  background-color: ${(props) => props.theme.backgroundColorPosts};
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.post-head-global {
  display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 0px 5px #144683;
    font-size: 50px;
    font-weight: 900;
    padding: 5px;
    margin: 5px;
    color: ${(props) => props.theme.colorPrimary};
}

.post-body {
  padding: 5px;
  margin: 5px;
}

.post-input {
  display: inline-table;
  width: 99%;
  height: calc(2.25rem + 2px);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;  
  background-color: ${(props) => props.theme.backgroundColorPost};
  color: ${(props) => props.theme.colorTextPost};
  background-clip: padding-box;
  border: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: vertical;
  &__wrapper {
    height: fit-content;
    background-color: ${(props) => props.theme.backgroundColorPost};
  }
}

.post-input:focus {
  outline: none;
}

.post-number {
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
}

.post-topic {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.ant-badge-count {
  background-color: ${(props) => props.theme.colorTextInfo} !important;
}

@media (min-width: 768px) {
  .post-area-global {
    width: 716px;
  }
}

`;
