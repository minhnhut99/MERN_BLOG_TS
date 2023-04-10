import React, { FC, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import "./Modal.scss"
import ClickOutside from "../click_outside/ClickOutside";

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  const handleClickOutside = () => {
    setIsOpenModal(false)
  }
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <ClickOutside onClickOutside={handleClickOutside}>
      <div className={`modal ${isOpen ? "is-open" : ""}`}>
        <div className="modal-overlay"></div>
        <div className="modal-content">{children}</div>
      </div>
    </ClickOutside>
  );
};

export default Modal;