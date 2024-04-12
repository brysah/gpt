import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 4rem;
  > .input_group {
    max-width: 45.6rem;
    width: 100%;
    input {
      border-radius: 5px 0px 0px 5px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      padding: 2.4rem 3.2rem;
      width: 100%;
      color: white;
      &:placeholder {
        color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
        font-size: 2rem;
        font-weight: 400;
      }
    }
  }
  > button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_INPUT};
    color: white;
    min-height: 6.6rem;
    max-width: 17.4rem;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    transition: all 0.3s;
    &:hover {
      background-color: white;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_INPUT};
    }
  }
`;
