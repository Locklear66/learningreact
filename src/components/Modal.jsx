import "./Modal.css";

function Modal({ title, hideModal }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={hideModal}>
            Cancel
          </button>

          <button className="btn" onClick={hideModal}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
