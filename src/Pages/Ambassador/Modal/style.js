import styled, { keyframes } from "styled-components/macro";

export const SlideIn = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`;

export const Container = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 500;
  background-color: white;
  max-width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 402px;
  padding: 16px;
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-20px)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.5s;
  overflow:hidden;
  p {
    color: grey;
  }

  @media (min-width: 600px) {
    width: 500px;
  }
  @media (min-width: 300px) {
    width: 100%;
  }
`;

export const OuterContainer = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-100%)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.3s;
`;
export const CancelSection = styled.div`
  display: flex;
  justify-content: flex-end;
  color: grey;

  div {
    cursor: pointer;
    color: white;
    background-color:#274B89;
    height:20px;
    width: 20px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
  img {
    height: 50px;
    width: 50px;
  }
`;
