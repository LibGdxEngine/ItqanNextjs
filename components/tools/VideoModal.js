import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";

const Modal = ({show, onClose, children, title}) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <div style={{cursor:"pointer"}} onClick={handleCloseClick}>
                        إغلاق
                    </div>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};


const StyledModalTitle = styled.h2`
  color: #777;

  display: flex;
  justify-content: center;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  position: fixed;
  background: white;
  width: 800px;
  height: 550px;
  border-radius: 15px;
  padding: 15px;
  @media (max-width: 768px) {
    width: 90vw;
    height: 65%;
  }
`;
const StyledModalOverlay = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;


