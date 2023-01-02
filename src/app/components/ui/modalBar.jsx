import React from "react";
import ModalForm from "./modalForm";

const ModalBar = ({ modal, ontoggleModal }) => {
  return (
    <div className={"modal " + (modal.isOpen ? "active" : "")}>
      <div className="modal-back" onClick={() => ontoggleModal()}></div>
      <div className="delete-modal">
        <h3 className="delete-modal__question">
          Оставте заявку и мы вам перезвоним
        </h3>
        <ModalForm ontoggleModal={ontoggleModal} modal={modal} />
      </div>
    </div>
  );
};

export default ModalBar;
