import React from "react";

const AddModal = () => {
  return (
    <div>
      <input type="checkbox" id="AddModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Add the task here.</h3>

          <div className="modalContent">MODAL CONTENT HERE</div>
          <div className="modal-action">
            <label htmlFor="AddModal" className="btn">
              ADD
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
