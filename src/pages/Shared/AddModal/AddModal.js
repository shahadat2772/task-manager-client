import React from "react";

const AddModal = () => {
  return (
    <div>
      <input type="checkbox" id="AddModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <h3 class="font-bold text-lg">Add the task here.</h3>

          <div className="modalContent">MODAL CONTENT HERE</div>
          <div class="modal-action">
            <label for="AddModal" class="btn">
              ADD
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
