import styled from "styled-components";

export default styled.select`
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #fff;
  height: 52px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.primary.main};
  }
`;
