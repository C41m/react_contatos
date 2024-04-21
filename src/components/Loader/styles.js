import styled, { keyframes } from "styled-components";

const load = keyframes`
  0%   {transform: perspective(150px) rotateX(  0deg)}
  100% {transform: perspective(150px) rotateX(360deg)}
  `;

const round = keyframes`
  0% {
    background: #5061fc;
  }
  50% {
    background: gray;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(246, 245, 252, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 40px;
    aspect-ratio: 1;
    animation: ${load} 2s infinite linear,
      ${round} 1s infinite steps(1) alternate;
  }
`;
