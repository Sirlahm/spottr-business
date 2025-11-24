import React from "react";
import {
  Container,
  OuterContainer,
  CancelSection,
} from "./style";


const Modal = (props) => {
  return (
    <OuterContainer show={props.show}>
      <Container show={props.show}>
        <CancelSection>
          <div  onClick={props.modalClosed}>X</div>
        </CancelSection>
        {props.children}
      </Container>
    </OuterContainer>
  );
};

export default Modal;
