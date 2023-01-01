import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";
import cloneImage from '../../public/close_icon.png';

const Modal = ({ show, onClose, children, title }) => {
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
                    <div style={{cursor: "pointer"}} onClick={handleCloseClick}>
                        <Image src={cloneImage} alt={"اغلاق"} width={30} height={30}/>
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
  direction: rtl;
  display: flex;
  justify-content: flex-start;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  z-index: 101;
  position: fixed;
  background: white;
  margin: 2rem;
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 30px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  z-index: 100;
  //position: absolute;
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


