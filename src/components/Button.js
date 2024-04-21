import styled, { css } from "styled-components";

export default styled.button`
  height: 52px;
  padding: 0 16px;
  font-weight: bold;
  background: ${({ theme }) => theme.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: 4px;
  color: #fff;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger && css`
      background: ${theme.danger.main};

      &:hover {
        background: ${({ theme }) => theme.danger.light};
      }

      &:active {
        background: ${({ theme }) => theme.danger.dark};
      }
    `}
`;
