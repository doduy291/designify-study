import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./styles";
import Form from "../Form";

const Modal = ({ showModal, toggleModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },

    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          variants={backgroundVariants}
          animate="animate"
          initial="initial"
          onClick={closeModal}
          ref={modalRef}
          exit="exit"
        >
          <ModalWrapper
            variants={modalVariants}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <Form></Form>
            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
