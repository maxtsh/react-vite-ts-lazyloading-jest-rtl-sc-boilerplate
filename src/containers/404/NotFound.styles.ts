import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 500%;
    font-weight: 700;
  }

  .subtitle {
    font-size: 120%;
    font-weight: 400;
  }

  .image {
    margin: 1rem 0;
    max-width: 500px;
    width: 100%;
    height: auto;
  }
`;
